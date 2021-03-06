import request from '@/utils/request'

const baseURL = '/api'

export function savePermis(userId, permisIds) {
  const data = { userId, permisIds }
  return request({
    url: baseURL + '/permis/update',
    method: 'post',
    data
  })
}

export function getPermis() {
  return request({
    url: baseURL + '/permis/getPermis',
    method: 'get'
  })
}
