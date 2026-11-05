import QuestionHeader from '../molecules/QuestionHeader'
import AnswerOption from '../molecules/AnswerOption'
import './QuestionCard.css'

export default function QuestionCard({ question, selected, locked, onSelect }) {
  const getStatus = (answer) => {
    if (!locked) return 'idle'
    if (answer === question.correct) return 'correct'
    if (answer === selected) return 'wrong'
    return 'idle'
  }

  return (
    <fieldset className="question-card" disabled={locked}>
      <QuestionHeader
        id={`question-${question.id}`}
        category={question.category}
        difficulty={question.difficulty}
        text={question.text}
      />

      <div className="question-card__answers">
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer}
            name={`question-${question.id}`}
            text={answer}
            checked={selected === answer}
            status={getStatus(answer)}
            disabled={locked}
            onSelect={(ans) => onSelect(question.id, ans)}
          />
        ))}
      </div>

      {locked && (
        <p className="question-card__feedback">
          {selected === question.correct
            ? 'Correct!'
            : `The right answer was: ${question.correct}`}
        </p>
      )}
    </fieldset>
  )
}
