import request from '@/utils/request'

const baseURL = '/api'

export function getKeywords() {
  return request({
    url: baseURL + '/research/getKeywords',
    method: 'get'
  })
}

export function setKeywords(selectedIds, noSelectedIds) {
  return request({
    url: baseURL + '/research/setKeywords',
    method: 'post',
    data: {
      selectedKeywordIds: selectedIds,
      noSelectedKeywordIds: noSelectedIds
    }
  })
}
