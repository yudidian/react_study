import react from "react";
import "@/style/TaskDome.scss"
import {Button, Table, Popconfirm, message, Modal, Input, Form, DatePicker} from "antd";
import {addTask, completeTask, getTackList, removeTask,} from "@/api/TaskDome";
class TaskDome extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      tableData: [],
      showModal: false
    }
  }
  getListInfo = async (params) => {
    const res = await getTackList(params)
    if (res.code === 0) {
      this.setState({
        tableData: res.list
      })
    } else {
      message.open({
        type: "error",
        content: "获取失败"
      })
    }
  }
  confirmHandler = async (flag, id) => {
    if(flag) {
      const res = await removeTask(id)
      if (res.code === 0) {
        this.getListInfo({
          limit: 100,
          page: 1,
          state: this.state.index
        })
        message.open({
          type: "success",
          content: "删除成功"
        })
      } else {
        message.open({
          type: "error",
          content: "删除失败"
        })
      }
    } else {
      const res = await completeTask(id)
      if (res.code === 0) {
        this.getListInfo({
          limit: 100,
          page: 1,
          state: this.state.index
        })
        message.open({
          type: "success",
          content: "操作成功"
        })
      } else {
        message.open({
          type: "error",
          content: "操作失败"
        })
      }
    }
  }

  addTaskHandler = async (values) => {
    let {text, dateTime} = this.formEL.getFieldsValue()

    const res = await addTask({
      task: text,
      time: dateTime.format("YYYY-MM-DD HH:mm:ss")
    })
    if (res.code === 0) {
      this.getListInfo({
        limit: 100,
        page: 1,
        state: 0
      })
      message.open({
        type: "success",
        content: "添加成功"
      })
    } else {
      message.open({
        type: "error",
        content: "操作失败"
      })
    }
    this.setState({
      showModal: false
    })
  }
  componentDidMount() {
    this.getListInfo({
      limit: 100,
      page: 1,
      state: 0
    })
  }

  render() {
    const {index,tableData, showModal} = this.state
    const changeIndex = (index) => {
      this.setState({
        index: index
      }, () => {
        this.getListInfo({
          limit: 100,
          page: 1,
          state: index
        })
      })
    }
    const columns = [
      {
        title: '编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '描述',
        dataIndex: 'task',
        key: 'task',
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
      },
      {
        title: '完成时间',
        dataIndex: 'complete',
        key: 'complete',
      },
      {
        title: '操作',
        key: 'action',
        render: (_, {state, id}) => (
            state === 1 ?
                <>
                  <div>
                    <Popconfirm
                        placement="top"
                        title="提示"
                        description="是否删除该任务？"
                        onConfirm={() => this.confirmHandler(true, id)}
                        okText="确定"
                        cancelText="取消"
                    >
                      <Button type={"link"} size={"small"} danger>删除</Button>
                    </Popconfirm>
                  </div>
                </>:
                <>
                  <div>
                    <Popconfirm
                        placement="top"
                        title="提示"
                        description="是否完成该任务？"
                        onConfirm={() => this.confirmHandler(false, id)}
                        okText="确定"
                        cancelText="取消"
                    >
                      <Button size={"small"} type={"link"}>完成</Button>
                    </Popconfirm>
                    <Popconfirm
                        placement="top"
                        title="提示"
                        description="是否删除该任务？"
                        onConfirm={() => this.confirmHandler(true, id)}
                        okText="确定"
                        cancelText="取消"
                    >
                      <Button type={"link"} size={"small"} danger>删除</Button>
                    </Popconfirm>
                  </div>


                </>
        )
      }
    ];
    return (
        <>
          <div className="task-content">
            <header>
              <span className="header-title">TASK 任务管理</span>
              <Button type="primary" onClick={() => {
                this.setState({
                  showModal: true
                })
              }}>新增任务</Button>
            </header>
            <div className="table-header">
              <div className="btn-wrapper">
                {['全部', '已完成', '未完成'].map((item, i) => {
                  return (
                      <Button key={item} type={i === index ? "primary" : "default"} onClick={() => changeIndex(i)}>{item}</Button>
                  )
                })}
              </div>
            </div>
            <Table dataSource={tableData} columns={columns} />
          </div>
          <Modal title="新增任务" open={showModal} footer={null}>
            <Form
                name="basic"
                layout={"vertical"}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={this.addTaskHandler}
                initialValues={{ remember: true }}
                destroyOnClose={true}
                autoComplete="off"
                maskClosable={false}
                ref={x => this.formEL = x}
            >
              <Form.Item
                  label="任务描述"
                  name="text"
                  rules={[{ required: true, message: '请输入任务描述' }]}
              >
                <Input.TextArea row={4} autoSize={{ minRows: 3, maxRows: 5 }}/>
              </Form.Item>

              <Form.Item
                  label="选择完成时间"
                  name="dateTime"
                  rules={[{ required: true, message: '请选择完成时间!' }]}
              >
                <DatePicker showTime />
              </Form.Item>

              <Form.Item className={"form-bottom"}>
                <Button type="default" onClick={() => {
                  this.setState({
                    showModal: false
                  })
                }}>
                  取消
                </Button>
                <Button type="primary" htmlType="submit" className={"btn-right"}>
                  确定
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </>
    )
  }
}

export default TaskDome
