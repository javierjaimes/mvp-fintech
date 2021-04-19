import React from 'react'
import User from '../User'
import './styles.scss'

export default function HeaderComp() {
  return (
    <div className="header">
      <div className="branding">
        <div className="branding name">MVP</div>
      </div>
      <div className="search"></div>
      <div className="user"><User /></div>
    </div>
  )
}
