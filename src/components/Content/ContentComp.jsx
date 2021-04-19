import React from 'react'
import Sidebar from '../Sidebar'
import './styles.scss'

export default function ContentComp({list, fetched, checkHandler, state, visible, setVisible}) {
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

  const getResult = () => {
    if(state.checkCompleted){
      return state.score > 60 ? 'Prospect!' : 'Not Prospect :('
    }else{
      return 'Pending...'
    }
  }

  const statusContent = (
    <div className="status">
      <div>The following is an automated check to validate if the contact could be a prospect</div>
      <ul>
        <li>National Registry System: {state.checkCompleted && state.nrs ? 'OK' : 'Not Registered'}</li>
        <li>Judicial Records System: {state.checkCompleted && state.jrs ? 'OK' : 'With Records'}</li>
        <li>Score System: {state.score}</li>
        <li>Status: {state.checkCompleted ? 'Completed' : 'In progress...'}</li>
        <li>Result: {getResult()}</li>
      </ul>
    </div>
  )

  return (
    <div className="container">
      {content}
      <Sidebar {...{content: statusContent, visible, setVisible}}/>
    </div>
  )
}
