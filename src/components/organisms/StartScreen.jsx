import Button from '../atoms/Button'
import './StartScreen.css'

export default function StartScreen({ total, onStart }) {
  return (
    <div className="start-screen">
      <h1 className="start-screen__title">Web Dev Quiz</h1>
      <p className="start-screen__text">
        Answer {total} random questions to test your web development knowledge.
      </p>
      <Button onClick={onStart}>Start Quiz</Button>
    </div>
  )
}
