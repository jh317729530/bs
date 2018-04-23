import request from '@/utils/request'

const baseURL = '/api'

export function getKeywords() {
  return request({
    url: baseURL + '/research/getKeywords',
    method: 'get'
  })
}