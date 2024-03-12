import './StartMeeting.styles.css';
import MeetingContext from '../../contexts/meeting.context';
import { useContext, useRef } from 'react';

const StartMeeting = () => {
  const { currentInfo } = useContext(MeetingContext);
  let date = new Date(currentInfo.date);

  return (
    <div className="meeting-page">
      {/* <div className="white-bg"></div> */}
      <h1 className='main-header'>{currentInfo.name}</h1>
      <p className='meeting-topic'>{currentInfo.topic}</p>
      <p className='meeting-date'>{`${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")} ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`}</p>
    </div>
  );
}

export default StartMeeting;