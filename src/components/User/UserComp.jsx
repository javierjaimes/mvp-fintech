import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

const element = <FontAwesomeIcon icon={faMountain} />

export default function UserComp() {
  return (
    <div className="userIcon">
      {element}
    </div>
  )
}
