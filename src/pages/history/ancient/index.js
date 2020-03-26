import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Link from 'gatsby-link'

const AncientHistoryPage = ({ data }) => (
  <Layout>
    <SEO title="Ancient History" />
    <h1>Ancient History</h1>
    { 
      data.allMarkdownRemark.edges.map(post => (
        post.node.frontmatter.folder === 'ancient' &&
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
          <br/><br/>
          <Link to={post.node.frontmatter.path}>Read More...</Link>
          <br/><br/>
          <hr/>
        </div>
      ))
  }
  </Layout>
)

export const pageQuery = graphql`
  query AHIndexQuery {
      allMarkdownRemark {
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
