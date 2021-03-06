import request from '@/utils/request'

const baseUrl = '/api'

export function getTeacherPage(name, pageNum, pageSize) {
  const data = { name, pageNum, pageSize }
  return request({
    url: baseUrl + '/teacher/page',
    method: 'post',
    data
  })
}

export function getTeacherList(status) {
  const data = { status }
  return request({
    url: baseUrl + '/teacher/list',
    method: 'post',
    data
  })
}

export function changeUserStatus(id, status) {
  const data = { id, status }
  return request({
    url: baseUrl + '/teacher/changeStatus',
    method: 'post',
    data
  })
}

export function getTeacherPermis(id) {
  const data = { id }
  return request({
    url: baseUrl + '/teacher/getPermis',
    method: 'post',
    data
  })
}

export function getDetailInfo() {
  return request({
    url: baseUrl + '/user/detailInfo',
    method: 'get'
  })
}
