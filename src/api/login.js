import request from '@/utils/request'

const baseURL = '/api'

export function login(username, password) {
  return request({
    url: baseURL + '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: baseURL + '/user/baseInfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
