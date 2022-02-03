import { createContext, useState } from 'react'

const ScoreContext = createContext()

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0)

  const changeScore = (itemScore) => {
    setScore(score + itemScore)
  }

  return (
    <ScoreContext.Provider value={{ score, changeScore }}>
      {children}
    </ScoreContext.Provider>
  )
}

export default ScoreContext
