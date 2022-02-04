import Score from '../components/Score'
import Result from '../components/Result'
import { ScoreProvider } from '../context/ScoreContext'

function Home() {
  return (
    <ScoreProvider>
      <div>
        <Score />
        <Result />
      </div>
    </ScoreProvider>
  )
}

export default Home
