import { shuffle } from './shuffle.js'

export function buildQuiz(allQuestions, amount = 5) {
  const shuffledQuestions = shuffle(allQuestions)
  const selected = shuffledQuestions.slice(0, amount)

  return selected.map((q) => ({
    id: q.id,
    category: q.category,
    difficulty: q.difficulty,
    text: q.text,
    correct: q.correct,
    answers: shuffle([q.correct, ...q.incorrect])
  }))
}
