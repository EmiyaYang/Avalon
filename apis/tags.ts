import ghRequest from '@/utils/ghRequest'

export function getTags(params: Object) {
  return ghRequest(
    `query {
      getTags{
          id
          _id
          name
        }
    }
        `,
    params
  ).then(({ getTags }) => getTags)
}
