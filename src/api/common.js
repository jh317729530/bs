import request from '@/utils/request'

const baseURL = '/api'

export function download(url) {
  return request({
    url: baseURL + '/common/download?fileName=' + url,
    method: 'get'
  })
}
