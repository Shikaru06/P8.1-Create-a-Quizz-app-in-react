import { useState } from 'react'
import Button from '@/components/atoms/Button'
import ProgressBar from '@/components/atoms/ProgressBar'
import QuestionCard from '@/components/organisms/QuestionCard'
import ScorePanel from '@/components/organisms/ScorePanel'
import StartScreen from '@/components/organisms/StartScreen'
import { questions as allQuestions } from '@/data/questions'
import { buildQuiz } from '@/utils/buildQuiz'
import './QuizPage.css'

export default function QuizPage() {
  const [phase, setPhase] = useState('start')
  const [questions, setQuestions] = useState(() => buildQuiz(allQuestions, 10))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})

  const question = questions[currentIndex]
  const selected = question ? (userAnswers[question.id] ?? null) : null
  const isLast = currentIndex === questions.length - 1
  const score = questions.filter((q) => userAnswers[q.id] === q.correct).length

  const startGame = () => {
    setQuestions(buildQuiz(allQuestions, 10))
    setCurrentIndex(0)
    setUserAnswers({})
    setPhase('playing')
  }

  const handleSelect = (questionId, answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const handleNext = () => {
    if (isLast) {
      setPhase('finished')
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  return (
    <div className="quiz-page">
      <div className="quiz-page__card">
        {phase === 'start' && (
          <StartScreen total={10} onStart={startGame} />
        )}

        {phase === 'playing' && question && (
          <div className="quiz-page__game">
            <h1 className="quiz-page__title">Web Dev Quiz</h1>
            <ProgressBar value={currentIndex + 1} max={questions.length} />
            <QuestionCard
              question={question}
              selected={selected}
              locked={selected !== null}
              onSelect={handleSelect}
            />
            <div className="quiz-page__action">
              <Button onClick={handleNext} disabled={selected === null}>
                {isLast ? 'See Results' : 'Next Question'}
              </Button>
            </div>
          </div>
        )}

        {phase === 'finished' && (
          <ScorePanel
            score={score}
            total={questions.length}
            onPlayAgain={startGame}
          />
        )}
      </div>
    </div>
  )
}
