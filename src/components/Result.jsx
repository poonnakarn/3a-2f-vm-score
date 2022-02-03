import { useContext } from 'react'
import ScoreContext from '../context/ScoreContext'

function Result() {
  const { score } = useContext(ScoreContext)

  let risk, recurRate, annRecurRate, timeRecur
  if (score <= -1) {
    risk = 'Low'
    recurRate = 22.45
    annRecurRate = 8
    timeRecur = 'NA'
  } else if (score === 0) {
    risk = 'Medium'
    recurRate = 56.25
    annRecurRate = 26
    timeRecur = '2.38'
  } else {
    risk = 'High'
    recurRate = 89.47
    annRecurRate = 124
    timeRecur = '0.36'
  }

  return (
    <div className='grid flex-grow h-40 card bg-base-200 rounded-box place-items-center'>
      <div className='font-medium text-2xl text-teal-700'>Score {score}</div>
      <div className='font-light text-xl'>Risk: {risk}</div>
      <div className='font-light text-base'>
        Any time recurrent sz rate {recurRate}%
      </div>
      <div className='font-light text-base'>
        Annual incidence sz recurrence {annRecurRate}/100 pts/year
      </div>
      <div className='font-light text-base'>
        Median time to recurrence {timeRecur} years
      </div>
    </div>
  )
}

export default Result
