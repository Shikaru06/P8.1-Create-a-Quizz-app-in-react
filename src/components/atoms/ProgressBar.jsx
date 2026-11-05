import './ProgressBar.css'

export default function ProgressBar({ value, max }) {
  const percentage = (value / max) * 100

  return (
    <div className="progress-bar">
      <div
        className="progress-bar__track"
        role="progressbar"
        aria-valuemin="1"
        aria-valuemax={max}
        aria-valuenow={value}
      >
        <div
          className="progress-bar__fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="progress-bar__label">
        Question {value} of {max}
      </p>
    </div>
  )
}
