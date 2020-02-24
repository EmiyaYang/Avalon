import axios from './axios'

export default function(query: string, variables?: Object) {
  return axios
    .post(
      '/graphql',
      {
        query,
        variables
      },
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    )
    .then(({ data }) => data)
}
