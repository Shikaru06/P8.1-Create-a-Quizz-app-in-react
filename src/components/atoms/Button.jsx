import './Button.css'

export default function Button({ children, onClick, disabled }) {
  const className = [
    'button',
    disabled && 'button--disabled'
  ].filter(Boolean).join(' ')

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
