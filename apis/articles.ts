import ghRequest from '@/utils/ghRequest'

export function getArticles() {
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
    { limit: 10 }
  ).then(({ getArticles }) => getArticles)
}
