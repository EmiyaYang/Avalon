import ghRequest from '@/utils/ghRequest'

export function getArticles(params: Object) {
  return ghRequest(
    `
    query($limit: Int, $keyword: String, $tags:[ID!])  {
      getArticles(dto: {limit: $limit, keyword: $keyword, tags: $tags}) {
          _id
          id
          title
          type
          tags {
            name
            id
            _id
          }
          content
          createdAt
          updatedAt
      }
  }
        `,
    params
  ).then(({ getArticles }) => getArticles)
}
