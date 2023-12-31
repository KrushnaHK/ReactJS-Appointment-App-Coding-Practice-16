// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentsDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentsDetails

  const startImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onCLickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          type="button"
          className="star-button"
          onClick={onCLickStar}
          data-testid="star"
        >
          <img src={startImgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
