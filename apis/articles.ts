import ghRequest from '@/utils/ghRequest'

export function getArticleById(params: Object) {
  return ghRequest(
    `
    query($id: ID) {
      getArticleById(id: $id) {
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
        description
        createdAt
        updatedAt
      }
    }
    `,
    params
  ).then(({ getArticleById }) => getArticleById)
}

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
