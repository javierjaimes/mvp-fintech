import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import ContentComp from './ContentComp'

export default function Content(){
  const { list, setList, MVP } = useContext(AppContext)
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    const updateData = async () => {
      const data = await MVP.getList()
      setList(data)
      setFetched(true)
    }
    !fetched && updateData()
  }, [list, setList, MVP, fetched])

  const checkNRS = async (nin) => {
    const data = await MVP.checkNRS(nin)
    return data.length > 0
  }

  const checkJRS = async (nin) => {
    const data = await MVP.checkJRS(nin)
    return data.length > 0
  }

  const checkScore = () => {
    return Math.random(0, 100)
  }

  return <ContentComp {...{list, fetched, checkNRS, checkJRS, checkScore}}  />
}