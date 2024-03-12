import './MeetingInfo.styles.css'
import { useState, useContext, useRef } from 'react';
import { MeetingContext } from '../../contexts/meeting.context';
import { CounterContext } from '../../contexts/counter.context';
import Error from '../../components/Error/Error.component';
import closeBtn from '../../media/images/x.svg';
import checkbox from '../../media/images/checkbox.svg';
import checkedcheckbox from '../../media/images/checkbox-checked.svg';


const MeetingInfo = (props) => {
    const { setCurrCounter } = useContext(CounterContext);
    const { setCurrInfo } = useContext(MeetingContext);
    const pageRef = useRef();
    const isEmpty = useRef(true);
    const [showError, setShowError] = useState(false);
    const [isDateShown, setIsDateShown] = useState(true);
    const [checkboxSrc, setCheckboxSrc] = useState(checkedcheckbox);
    const [currentInfoObj, setCurrentInfoObj] = useState({
        "name": "",
        "topic": "",
        "date": ""
    });

    const handleSNextBtn = () => {
        checkInputs();
        if (isEmpty.current) {
            setShowError(true);
        } else {
            setCurrInfo(currentInfoObj);
            setCurrCounter("design");
        }
    }

    const handlePrevBtn = () => {
        setCurrCounter("start");
    }

    const checkInputs = () => {
        isEmpty.current = false;
        Object.values(currentInfoObj).forEach((name) => {
            if (name === "" && isDateShown) {
                return isEmpty.current = true;
            }
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentInfoObj(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const closeError = () => {
        setShowError(false);
    }

    const toggleDate = () => {
        if(isDateShown) {
            setCheckboxSrc(checkbox);
            setCurrentInfoObj(prevState => ({
                ...prevState,
                "date": "",
            }));
        } else {
            setCheckboxSrc(checkedcheckbox);
        }
        setIsDateShown(!isDateShown);
    }

    return (
        <div className={`meeting-info ${props.class}`} ref={pageRef}>
            <div className="black-overlay"></div>
            {showError ? <Error></Error> : null}
            {showError ? <img src={closeBtn} className='icon close-btn-error' onClick={closeError}></img> : null}
            <div className='next-btn-container'>
                <button className='next-btn' onClick={handleSNextBtn}>המשך</button>
            </div>
            <button className='prev-btn' onClick={handlePrevBtn}></button>
            <div className='meeting-inputs'>
                <label className='meeting-label name-title'>שם האירוע:</label>
                <label className='meeting-label topic-title'>נושא האירוע:</label>
                <span>
                    <img onClick={toggleDate} src={checkboxSrc} className='checkbox-date'></img>
                    <label className='meeting-label date-title'>תאריך:</label>
                </span>
                <input maxLength="20" className='meeting-name-input input-transparent name-input' name='name' placeholder='הקלד את שם האירוע' onChange={handleInputChange} />
                <input maxLength="100" className='meeting-topic-input input-transparent topic-input' name='topic' placeholder='הקלד את נושא האירוע' onChange={handleInputChange} />
                <input type="datetime-local" name='date'  className={isDateShown ? "meeting-date-input date-input" : "opacity-half meeting-date-input date-input"} required pattern="\d{4}-\d{2}-\d{2}" onChange={handleInputChange} />
            </div>
        </div>
    );
}

export default MeetingInfo;