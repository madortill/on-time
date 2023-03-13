import './BgOption.styles.css'

const BgOption = (props) => {
    const activateMouseEnter = (e) => {
        e.target.style.animation = "hoverAnimation 1s forwards";
    }

    const activateMouseLeave = (e) => {
        e.target.style.animation = "endHoverAnimation 1s forwards";
    }

    return (
      <div className="bg-option">
        <div className={props.className} key={props.option} onMouseEnter={activateMouseEnter} onMouseLeave={activateMouseLeave}></div>
      </div>
    );
}
  
export default BgOption;