import React from 'react'

export default function ContentComp({list, fetched}) {
  const content = fetched ? (
    <div className="table">
      {list.map(user => (
        <div className="row" key={user.id}>
          <div className="field">{user.firstname}</div>
          <div className="field">{user.lastname}</div>
        </div>
      ))}
    </div>
    ):(
    <div>Loading</div>
    )

  return (
    <div className="container">
      {content}
    </div>
  )
}
