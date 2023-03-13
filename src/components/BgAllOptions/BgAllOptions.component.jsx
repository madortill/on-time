import './BgAllOptions.styles.css'
import BgOption from '../BgOption/BgOption.component';

const BgAllOptions = () => {
    const OptionsArr = ["option1", "option2", "option3", "option4", "option5", "option6"];

    return (
      <div className="bg-all-options">
        {OptionsArr.map(option => (<BgOption className={'option ' + option} key={option}></BgOption>))}
      </div>
    );
}
  
export default BgAllOptions;