// import React from "react"
// import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"

// //elements
// import { Post } from "./elements/elements"
// import { PostImage } from "./elements/elements"
// import { PostText } from "./elements/elements"
// import { PostTitle } from "./elements/elements"
// import { PostDiscription } from "../elements/elements"

// import SEO from "../components/seo"

// class GridLayout extends React.Component {
//   render() {
//     const { data } = this.props
//     const posts = data.allContentfulPost.edges

//     return (
//       <>
//         <SEO title="New posts" />

//         {posts.map(({ node }) => {
//           const title = node.title || node.slug

//           return (
//             <Link
//               to={`/${node.slug}`}
//               key={node.slug}
//               data-id={node.contentful_id}
//             >
//               <Post>
//                 <PostImage>
//                   <Img fluid={node.image.fluid} width="100%" height="100%" />
//                 </PostImage>
//                 <PostText>
//                   <header>
//                     <PostTitle>{title}</PostTitle>
//                   </header>
//                   <section>
//                     <PostDiscription>
//                       <p>{node.createdAt}</p>
//                       <p>#{node.category}</p>
//                     </PostDiscription>
//                   </section>
//                 </PostText>
//               </Post>
//             </Link>
//           )
//         })}
//       </>
//     )
//   }
// }
