import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Link from 'gatsby-link'

const AncientHistoryPage = ({ data }) => (
  <Layout>
    <SEO title="Ancient History" />
    <h1>Ancient History</h1>
    <ul>
    {
      data.allMarkdownRemark.edges.map(post => (
        post.node.frontmatter.folder === 'ancient' &&
        <li className="pageLink" key={post.node.id}>
          <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
        </li>
      ))
    }
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query AHIndexQuery {
      allMarkdownRemark(sort: {fields: [frontmatter___folder], order: ASC}) {
        edges {
          node {
            id
            frontmatter{
              folder
              path
              title
              date
              author
            }
          }
        }
      }
  }
`

export default AncientHistoryPage
