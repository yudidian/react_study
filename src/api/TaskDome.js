import request from "@/api/request";

export const getTackList = (params) => {
  return request({
    url: "/getTaskList",
    method: "get",
    params: params
  })
}
export const addTask = (data) => {
  return request({
    url: "/addTask",
    method: "post",
    data: data
  })
}
export const removeTask = (id) => {
  return request({
    url: `/removeTask?id=${id}`,
    method: "get"
  })
}
export const completeTask = (id) => {
  return request({
    url: `/completeTask?id=${id}`,
    method: "get"
  })
}
