import React from 'react'
import Friend from './Friend'

export default function FriendsList({initialFriends}) {
  return (
    <>
      <ul>
            {initialFriends.map(friend=>(
                  <Friend friend={friend} key={friend.id} />
            ))
            }
      </ul>
    </>
  )
}
