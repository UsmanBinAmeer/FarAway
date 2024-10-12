import React from 'react'
import './stats.css'

export default function Stats({items}) {
  return (
    <div className ='stats'>
      {items > 0 ? (
        <p>You have {items} items on your list.</p>
      ) : (
        <p>Your list is empty. You are all set for your trip!</p>
      )}
    </div>
  )
}
