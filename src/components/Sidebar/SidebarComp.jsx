import React from 'react'
import './styles.scss'

export default function SidebarComp({content, visible, setVisible}) {
  return (
    <div className={`sidebar ${visible ? 'visible' : 'no-visible'}`}>
      {content}
      <button onClick={()=>setVisible(!visible)}>Close</button>
    </div>
  )
}
