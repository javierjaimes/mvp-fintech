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

  return <ContentComp list={list} fetched={fetched} />
}