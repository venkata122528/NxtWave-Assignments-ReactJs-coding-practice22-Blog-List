// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogListContainer">
      {blogsList.map(each => (
        <BlogItem each={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
