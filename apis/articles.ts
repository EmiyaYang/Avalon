import ghRequest from '@/utils/ghRequest'

export function getArticles(params: Object) {
  return ghRequest(
    `
         query($limit: Int) {
          getArticles(dto: {limit: $limit}) {
              _id
              id
              title
              type
              content
              updatedAt
          }
        }
        `,
    params
  ).then(({ getArticles }) => getArticles)
}
