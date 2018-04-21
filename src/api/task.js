import request from '@/utils/request'

const baseUrl = '/api'

export function addTask(task, teacherIds) {
  const data = {
    title: task.title,
    shortContent: task.content_short,
    releaseTime: task.release_time,
    content: task.content,
    teacherIds: teacherIds,
    fileUrls: task.file_urls
  }
  return request({
    url: baseUrl + '/task/add',
    method: 'post',
    data
  })
}
