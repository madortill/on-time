
import './ParticipantPage.styles.css'
import Participant from '../../components/Participant/Participant.component';

const ParticipantPage = () => {
    return (
      <div className="participant-page">
        <h1 className='main-header'>רשימת משתתפים</h1>
        <Participant></Participant>
      </div>
    )
}
  
export default ParticipantPage;