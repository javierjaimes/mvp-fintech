import React from 'react'
import Sidebar from '../Sidebar'
import './styles.scss'

export default function ContentComp({list, fetched, checkNRS, checkJRS, checkScore}) {
  const checkHandler = (nin) => {

  }

  const content = fetched ? (
    <div className="table">
      <div className="row">
          <div className="field head">status</div>
          <div className="field head">firstname</div>
          <div className="field head">lastname</div>
          <div className="field head">phone</div>
          <div className="field head"></div>
        </div>
      {list.map(user => (
        <div className="row" key={user.id}>
          <div className="field"><button onClick={() => checkHandler(user.nin)}>Check</button></div>
          <div className="field">{user.firstname}</div>
          <div className="field">{user.lastname}</div>
          <div className="field">{user.phone}</div>
          <div className="field">options</div>
        </div>
      ))}
    </div>
    ):(
    <div>Loading</div>
    )

  return (
    <div className="container">
      {content}
      <Sidebar />
    </div>
  )
}
