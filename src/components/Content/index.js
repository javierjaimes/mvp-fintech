import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import ContentComp from './ContentComp'

export default function Content(){
  const { list, setList, MVP } = useContext(AppContext)
  const [fetched, setFetched] = useState(false)
  const [state, setState] = useState({
    nrs: false,
    jrs: false,
    score: false,
    checkCompleted: false
  });
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateData = async () => {
      const data = await MVP.getList()
      setList(data)
      setFetched(true)
    }
    !fetched && updateData()
  }, [list, setList, MVP, fetched])

  const checkHandler = async (nin) => {
    setVisible(true)

    const nrs = await MVP.checkNRS(nin)
    const jrs = await MVP.checkJRS(nin)
    const score = nrs.length === 1 && jrs.length === 0 && (Math.floor(Math.random() * 100)+1)
    
    setState({
      nrs: nrs.length === 1,
      jrs: jrs.length === 0,
      score,
      checkCompleted: true
    })
  }

  return <ContentComp {...{list, fetched, checkHandler, state, visible, setVisible}}  />
}