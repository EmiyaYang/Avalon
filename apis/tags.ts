import tagsGq from './tags.graphql'
import ghRequest from '@/utils/ghRequest'

export function getTags(params: Object) {
  return ghRequest(tagsGq.getTags, params).then(({ getTags }) => getTags)
}
