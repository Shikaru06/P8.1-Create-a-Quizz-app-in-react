export const questions = [
  {
    id: 1,
    category: 'JavaScript',
    difficulty: 'easy',
    text: 'Which keyword declares a constant in JavaScript?',
    correct: 'const',
    incorrect: ['var', 'let', 'def']
  },
  {
    id: 2,
    category: 'React',
    difficulty: 'easy',
    text: 'Which hook is used to add state to a functional component in React?',
    correct: 'useState',
    incorrect: ['useEffect', 'useRef', 'useContext']
  },
  {
    id: 3,
    category: 'HTML',
    difficulty: 'easy',
    text: 'Which HTML tag is used for the main heading of a page?',
    correct: '<h1>',
    incorrect: ['<head>', '<header>', '<heading>']
  },
  {
    id: 4,
    category: 'CSS',
    difficulty: 'easy',
    text: 'Which CSS property enables flexbox layout?',
    correct: 'display: flex',
    incorrect: ['flex: 1', 'layout: flexbox', 'position: flex']
  },
  {
    id: 5,
    category: 'JavaScript',
    difficulty: 'medium',
    text: 'What is the return type of typeof null in JavaScript?',
    correct: 'object',
    incorrect: ['null', 'undefined', 'boolean']
  },
  {
    id: 6,
    category: 'React',
    difficulty: 'medium',
    text: 'What special prop is required when rendering a list of elements in React?',
    correct: 'key',
    incorrect: ['id', 'index', 'ref']
  },
  {
    id: 7,
    category: 'CSS',
    difficulty: 'medium',
    text: 'What does BEM stand for in CSS methodology?',
    correct: 'Block Element Modifier',
    incorrect: ['Basic Element Method', 'Block Entity Model', 'Base Element Module']
  },
  {
    id: 8,
    category: 'HTML',
    difficulty: 'medium',
    text: 'Which HTML element groups several controls inside a web form?',
    correct: '<fieldset>',
    incorrect: ['<group>', '<formgroup>', '<section>']
  },
  {
    id: 9,
    category: 'JavaScript',
    difficulty: 'hard',
    text: 'Which method returns a new array with elements in reverse order without mutating the original?',
    correct: 'toReversed()',
    incorrect: ['reverse()', 'sort()', 'splice()']
  },
  {
    id: 10,
    category: 'React',
    difficulty: 'hard',
    text: 'Why should props never be modified directly inside a child component?',
    correct: 'Props are read-only to maintain unidirectional data flow',
    incorrect: [
      'JavaScript does not allow modifying objects',
      'It causes a syntax error in Babel',
      'Props are deleted automatically on re-render'
    ]
  }
]
