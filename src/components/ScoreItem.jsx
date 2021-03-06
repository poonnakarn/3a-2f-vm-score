import { useState, useContext } from 'react'
import ScoreContext from '../context/ScoreContext'

function ScoreItem({ score: { text, point } }) {
  const [isToggle, setIsToggle] = useState(false)
  const { changeScore } = useContext(ScoreContext)

  const handleToggle = () => {
    if (isToggle) {
      // toggle off
      setIsToggle(false)
      changeScore(-point)
      document.activeElement.blur()
    } else {
      // toggle on
      setIsToggle(true)
      changeScore(point)
    }
  }

  return (
    <div className='card shadow-md compact side bg-base-100 items-end'>
      <div className='flex-row space-x-4 items-center card-body'>
        <div className='text-base text-right font-light'>{text}</div>
        <button
          className={
            isToggle
              ? 'btn btn-accent'
              : 'btn btn-accent bg-opacity-0 hover:bg-opacity-0 text-teal-500'
          }
          onClick={handleToggle}
        >
          {isToggle ? 'Yes' : 'No'}
        </button>
      </div>
    </div>
  )
}

export default ScoreItem
