import { useNavigate } from 'react-router-dom';
import './StartPage.styles.css'

const StartPage = () => {
  const navigate = useNavigate();

  const handleStartBtn = () => {
    navigate("/Design");
  }
    return (
      <div className="start-page">

        <div className="white-bg">
            <button className='start-btn' onClick={handleStartBtn}>התחל</button>
        </div>
      </div>
    );
}
  
export default StartPage;