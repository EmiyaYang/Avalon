import graphql from './articles.graphql'
import ghRequest from '@/utils/ghRequest'

export function getArticleById(params: Object) {
  return ghRequest(graphql.getArticleById, params).then(
    ({ getArticleById }) => getArticleById
  )
}

export function getArticles(params: Object) {
  return ghRequest(graphql.getArticles, params).then(
    ({ getArticles }) => getArticles
  )
}
