import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../actions/postAction'
import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {

  const dispatch = useDispatch()
  // fetch user from global state from redux store
  const { user } = useSelector((state) => state.authReducer.authData)
  // fetch post from global state
  const {posts, loading} = useSelector((state) => state.postReducer)

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [])

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