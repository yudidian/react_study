import {useEffect, useRef, useState} from "react";
import "@/style/TaskDome.scss"
import {Button, Table, Popconfirm, message, Modal, Input, Form, DatePicker} from "antd";
import {addTask, completeTask, removeTask} from "@/api/TaskDome";
import {useSelector, useDispatch} from "react-redux";
import {getTaskListAsync, delTaskList, updateTaskState} from "@/views/storeTookit/features/taskSlice"

const TaskHooks = function (props) {
  const [showModal, setShowModal] = useState(false)
  const [index, setIndex] = useState(0)
  const [tableData, setTableData] = useState([])
  const formEL = useRef(null)
  const dispatch = useDispatch()
  let {taskList} = useSelector(store => store.task)
  console.log(taskList)
  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      align: "center"
    },
    {
      title: '描述',
      dataIndex: 'task',
      key: 'task',
      align: "center"
    },
    {
      title: '状态',
      dataIndex: 'state',
      align: "center",
      key: 'state',
      render: (text, _) => {
        return (
            text * 1 === 2 ? <span style={{color: "#1677ff"}}>完成</span> : <span style={{color: "red"}}>未完成</span>
        )
      }
    },
    {
      title: '完成时间',
      dataIndex: 'complete',
      key: 'complete',
      align: "center"
    },
    {
      title: '操作',
      key: 'action',
      align: "center",
      render: (_, {state, id}) => (
          state === 2 ?
              <>
                <div>
                  <Popconfirm
                      placement="top"
                      title="提示"
                      description="是否删除该任务？"
                      onConfirm={() => confirmHandler(true, id)}
                      okText="确定"
                      cancelText="取消"
                  >
                    <Button type={"link"} size={"small"} danger>删除</Button>
                  </Popconfirm>
                </div>
              </> :
              <>
                <div>
                  <Popconfirm
                      placement="top"
                      title="提示"
                      description="是否完成该任务？"
                      onConfirm={() => confirmHandler(false, id)}
                      okText="确定"
                      cancelText="取消"
                  >
                    <Button size={"small"} type={"link"}>完成</Button>
                  </Popconfirm>
                  <Popconfirm
                      placement="top"
                      title="提示"
                      description="是否删除该任务？"
                      onConfirm={() => confirmHandler(true, id)}
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

  const confirmHandler = async (flag, id) => {
    if (flag) {
      const res = await removeTask(id)
      if (res.code === 0) {
        dispatch(delTaskList({id}))
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
        dispatch(updateTaskState({id, type: 2}))
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

  const addTaskHandler = async (values) => {
    let {text, dateTime} = values

    const res = await addTask({
      task: text,
      time: dateTime.format("YYYY-MM-DD HH:mm:ss")
    })
    if (res.code === 0) {
      dispatch(getTaskListAsync({
        limit: 100,
        page: 1,
        state: index
      }))
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
    setShowModal(false)
  }
  const changeIndex = (index) => {
    setIndex(index)
  }
  useEffect(() => {
    if (!taskList) {
      dispatch(getTaskListAsync({
        limit: 100,
        page: 1,
        state: index
      }))
      setTableData([])
    } else {
      if (index === 0) {
        setTableData(taskList)
      } else {
        const list = taskList.filter(item => {
          return item.state === index
        })
        setTableData(list)
      }
    }
  }, [taskList, index])
  return (
      <>
        <div className="task-content">
          <header>
            <span className="header-title">TASK 任务管理</span>
            <Button type="primary" onClick={() => {
              setShowModal(true)
            }}>新增任务</Button>
          </header>
          <div className="table-header">
            <div className="btn-wrapper">
              {['全部', '未完成', '已完成'].map((item, i) => {
                return (
                    <Button key={item} type={i === index ? "primary" : "default"}
                            onClick={() => changeIndex(i)}>{item}</Button>
                )
              })}
            </div>
          </div>
          <Table dataSource={tableData} columns={columns} rowKey={(r) => r.id}/>
        </div>
        <Modal
            title="新增任务"
            open={showModal}
            footer={null}
            onCancel={() => {
              setShowModal(false)
            }}
            destroyOnClose={true}
            maskClosable={false}
        >
          <Form
              name="basic"
              layout={"vertical"}
              labelCol={{span: 8}}
              wrapperCol={{span: 24}}
              style={{maxWidth: 600}}
              onFinish={addTaskHandler}
              initialValues={{remember: true}}
              autoComplete="off"
              ref={formEL}
          >
            <Form.Item
                label="任务描述"
                name="text"
                rules={[{required: true, message: '请输入任务描述'}]}
            >
              <Input.TextArea row={4} autoSize={{minRows: 3, maxRows: 5}}/>
            </Form.Item>

            <Form.Item
                label="选择完成时间"
                name="dateTime"
                rules={[{required: true, message: '请选择完成时间!'}]}
            >
              <DatePicker showTime/>
            </Form.Item>

            <Form.Item className={"form-bottom"}>
              <Button type="default" onClick={() => {
                setShowModal(false)
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

export default TaskHooks
