import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../actions/postAction'
import { useParams } from 'react-router-dom'
import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {

  const dispatch = useDispatch()
  // fetch user from global state from redux store
  const { user } = useSelector((state) => state.authReducer.authData)
  // fetch post from global state
  let {posts, loading} = useSelector((state) => state.postReducer)
  const params = useParams()

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [])

  if (!posts) return "No Posts"
  if (params.id) posts = posts.filter((post) => post.userId === params.id)

  return (
    <div className="Posts">
        {loading ? "Fetching Posts..." :
        posts.map((post, id) => {
            return <Post data={post} id={id} />
        })}
    </div>
  )
}

export default Posts