import request from '@/utils/request'
import { parseTime } from '@/utils'

const baseUrl = '/api'

export function addTask(task, teacherIds) {
  const data = {
    title: task.title,
    shortContent: task.content_short,
    releaseTime: parseTime(task.release_time),
    content: task.content,
    teacherIds: teacherIds,
    fileUrls: task.file_urls
  }
  console.log(data.releaseTime)
  return request({
    url: baseUrl + '/task/add',
    method: 'post',
    data
  })
}

export function getList() {
  return request({
    url: baseUrl + '/task/list',
    method: 'get'
  })
}

export function getDetail(id) {
  const data = { taskId: id }
  return request({
    url: baseUrl + '/task/detail',
    method: 'post',
    data
  })
}

export function getStatistics(id) {
  const data = { taskId: id }
  return request({
    url: baseUrl + '/task/statistics',
    method: 'post',
    data
  })
}
