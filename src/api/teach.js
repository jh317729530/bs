import request from '@/utils/request'

const baseUrl = '/api'

export function add(title, fileUrl) {
  const data = { title, fileUrl }
  return request({
    url: baseUrl + '/teachResult/add',
    method: 'post',
    data
  })
}

export function getResultList(title, pageNum, pageSize) {
  const data = {
    title, pageNum, pageSize
  }
  return request({
    url: baseUrl + '/teachResult/page',
    method: 'post',
    data
  })
}

export function updateResult(id) {
  const data = { id }
  return request({
    url: baseUrl + '/teachResult/update',
    method: 'post',
    data
  })
}

export function deleteResult(id) {
  const data = { id }
  return request({
    url: baseUrl + '/teachResult/delete',
    method: 'post',
    data
  })
}
