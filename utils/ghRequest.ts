import { print } from 'graphql/language/printer'
import { ASTNode } from 'graphql/language/ast'
import axios from './axios'

export default function(query: string | ASTNode, variables?: Object) {
  try {
    // 尝试获取由 graphql-tag 解析的 ast 的文本
    if (typeof query === 'object' && query) {
      query = print(query)
    }
  } catch (e) {
    throw new TypeError(e.message)
  }

  return axios
    .post(
      '/graphql',
      JSON.stringify({
        query,
        variables
      }),
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    )
    .then(({ data }) => data)
}
