/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * (title)
 * OpenAPI spec version: 0.0.0
 */
import type { ArticleBody } from './articleBody'
import type { ArticleId } from './articleId'
import type { ArticleStatusProperty } from './articleStatusProperty'
import type { ArticleTitle } from './articleTitle'

/**
 * Generated by scaffdog
feature name is article
created at 2024/10/29
 */
export interface Article {
  body: ArticleBody
  id: ArticleId
  /** @nullable */
  status: ArticleStatusProperty
  title: ArticleTitle
}
