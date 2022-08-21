import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import './Profile.css'
import RightSide from '../../components/RightSide/RightSide'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft />

        <div className="Profile-Center">
            <ProfileCard location = "profilePage" />
            <PostSide />
        </div>

        <RightSide />
    </div>
  )
}

export default Profile