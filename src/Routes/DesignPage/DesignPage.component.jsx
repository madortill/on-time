import { useNavigate } from 'react-router-dom';
import './DesignPage.styles.css'
import BgAllOptions from '../../components/BgAllOptions/BgAllOptions.component';

const DesignPage = () => {
  const navigate = useNavigate();

  const handleStartBtn = () => {
    // navigate("/Design");
  }
    return (
      <div className="design-page">
        <span>
            <h1 className='main-header'>עיצוב רקע</h1>
            <h4 className='second-header'>בחרו רקע ועיצוב לטיימר שלכם!</h4>
        </span>
        <BgAllOptions></BgAllOptions>
      </div>
    );
}
  
export default DesignPage;