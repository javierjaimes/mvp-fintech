import React from 'react'
import './styles.scss'

export default function SidebarComp({content, visible, setVisible}) {
  return (
    <div className="sidebar">
      {content}
    </div>
  )
}
