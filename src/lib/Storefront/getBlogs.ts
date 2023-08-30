import storefrontQuery from "@/src/lib/Storefront/shopify"
import type {
  Article,
  ArticleConnection,
} from "@shopify/hydrogen-react/storefront-api-types"

const gql = String.raw

export async function getBlogs(): Promise<Article[]> {
    const data = await storefrontQuery<"articles", ArticleConnection>(query)
    const articles: Article[] = data.articles.nodes
    return articles
}


const query = gql` {
  articles(first: 10) {
    nodes {
      id
      title
      handle
      authorV2 {
        name
      }
      image {
        altText
        height
        id
        url
        width
      }
      blog {
        handle
      }
      content
      excerpt(truncateAt: 75)
    }
  }
}
`