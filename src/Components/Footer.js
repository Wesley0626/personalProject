import React from 'react'
import ToBeCompleted from './ToBeCompleted'
import RecentlyCompleted from './RecentlyCompleted'
import Messages from './Messages'
import Favorites from './Favorites'

function Footer(){
  return(
    <div>
      <ToBeCompleted />
      <RecentlyCompleted />
      <Messages />
      <Favorites />
    </div>
  )
}

export default Footer