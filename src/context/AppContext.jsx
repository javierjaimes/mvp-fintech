import { useState, createContext } from 'react';
import MVP from '../api'

export const AppContext = createContext();

export const AppProvider = props => {
  const [list, setList] = useState([])
  return (
    <AppContext.Provider value={{list, setList, MVP}} >
      {props.children}
    </AppContext.Provider>
  )
}