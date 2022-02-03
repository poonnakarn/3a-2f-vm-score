import ScoreItem from './ScoreItem'

function Score() {
  const scoreData = [
    {
      id: 1,
      text: 'Attention deficit hyperactivity disorder',
      point: 2,
    },
    {
      id: 2,
      text: 'Being on Antidepressants at the time of first unprovoked seizure',
      point: -2,
    },
    {
      id: 3,
      text: 'Antiseizure drug started after the first unprovoked seizure',
      point: -1,
    },
    {
      id: 4,
      text: 'Family history of epilepsy',
      point: 2,
    },
    {
      id: 5,
      text: 'Focal aware seizure as a seizure type of the first unprovoked seizure',
      point: 1,
    },
    {
      id: 6,
      text: 'Valvular heart disease',
      point: 2,
    },
    {
      id: 7,
      text: 'Presence of intraparenchymal Microbleeds on MRI',
      point: 1,
    },
  ]

  return (
    <div className='grid grid-cols-1 gap-1 mb-4'>
      {scoreData.map((score) => (
        <ScoreItem key={score.id} score={score} />
      ))}
    </div>
  )
}

export default Score
