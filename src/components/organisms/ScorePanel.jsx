import Button from '../atoms/Button'
import './ScorePanel.css'

export default function ScorePanel({ score, total, onPlayAgain }) {
  const getMessage = () => {
    if (score === total) return 'Perfect! Great job!'
    if (score >= 3) return 'Good job!'
    return 'Keep practising!'
  }

  return (
    <div className="score-panel">
      <h2 className="score-panel__title">Quiz Finished!</h2>
      <p className="score-panel__score">
        Your score: {score} / {total}
      </p>
      <p className="score-panel__message">{getMessage()}</p>
      <Button onClick={onPlayAgain}>Play Again</Button>
    </div>
  )
}
