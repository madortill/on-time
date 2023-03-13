import { useNavigate } from 'react-router-dom';
import './DesignPage.styles.css'
import BgAllOptions from '../../components/BgAllOptions/BgAllOptions.component';

const DesignPage = () => {
  const navigate = useNavigate();

  const handleNextBtn = () => {
    navigate("/participants");
  }
    return (
      <div className="design-page">
        <div className='design-container'>
            <span>
                <h1 className='main-header'>עיצוב רקע</h1>
            <h4 className='second-header'>בחרו רקע ועיצוב לטיימר שלכם!</h4>
            </span>
            <BgAllOptions></BgAllOptions>
        </div>
        <button className='next-btn' onClick={handleNextBtn}></button>
      </div>
    );
}
  
export default DesignPage;