import axios from './axios'

export default function(query: string) {
  return axios
    .post('/graphql', {
      query
    })
    .then(({ data }) => data)
}
