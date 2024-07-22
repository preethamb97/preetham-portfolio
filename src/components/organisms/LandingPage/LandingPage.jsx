import React from 'react'
import UserTitleCard from '../../atoms/UserTitleCard/UserTitleCard'
import UserBackStory from '../../atoms/UserTitleCard/UserBackStory/UserBackStory'

export default function LandingPage() {
  return (
    <div class="flex mt-32">
        <UserTitleCard />
        <UserBackStory />
    </div>
  )
}
