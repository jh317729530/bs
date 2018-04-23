import request from '@/utils/request'

const baseURL = '/api'

export function getResearch(title) {
  return request({
    url: baseURL + '/research/getResearch',
    method: 'post',
    data: {
      title: title
    }
  })
}