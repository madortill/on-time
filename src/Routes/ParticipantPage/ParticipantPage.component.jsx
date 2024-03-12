import { React, useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './ParticipantPage.styles.css';
import Participant from '../../components/Participant/Participant.component';
import Error from '../../components/Error/Error.component';
import AddBtn from "../../media/images/add_btn.svg";
import closeBtn from '../../media/images/x.svg';
import { CounterContext } from '../../contexts/counter.context';

const ParticipantPage = (props) => {
    const { setCurrCounter } = useContext(CounterContext);
    const [participantList, setParticipantList] = useState([{ 'name': '', 'job': '', 'topic': '', 'hours': '0', 'minutes': '0', 'seconds': '0' }]);
    const dragItem = useRef();
    const dragOverItem = useRef();
    const childRef = useRef(null);
    const [showError, setShowError] = useState(false);
    const noMistake = useRef(true);

    const handleNextBtn = () => {
        checkMistakes();
        console.log(noMistake.current);

        // childRef.current.checkForMistake();
        if (!noMistake.current) {
            console.log("check correct");
            setShowError(true);
        } else if (noMistake.current) {
            setShowError(false);
            props.UpdateArray(participantList);
            setCurrCounter("timer");
        }


        // setCurrCounter("timer");
        // navigate("/timer");
    }

    const checkMistakes = () => {
        noMistake.current = true;
        // for(let i = 0; i <= participantList.length; i++) {
        participantList.forEach((participant) => {
            if (Number(participant["hours"]) > 9 || isNaN(participant["hours"]) || Number(participant["hours"]) < 0) {
                return noMistake.current = false;
            } else {
                if (Number(participant["minutes"]) > 59 || isNaN(participant["minutes"]) || Number(participant["minutes"]) < 0) {
                    return noMistake.current = (false);
                } else {
                    if (Number(participant["seconds"]) > 59 || isNaN(participant["seconds"]) || Number(participant["seconds"]) < 0) {
                        return noMistake.current = (false);
                    } else {
                        if ((Number(participant["hours"]) + Number(participant["seconds"]) + Number(participant["minutes"])) === 0) {
                            return noMistake.current = (false);
                        } else {
                            if (participant["name"] === "" && participant["job"] === "" && participant["name"] === "") {
                                return noMistake.current = (false);
                            }
                        }

                    }
                }

            }
        });
    }

    const closeError = () => {
        console.log("close");
        setShowError(false);
    }

    const handlePrevBtn = () => {
        props.UpdateArray(participantList);
        setCurrCounter("design");
        // navigate("/design");
    }

    //  adds a new component
    function HandleAddBtn() {
        const newParticipantList = participantList.concat([{ 'name': '', 'job': '', 'topic': '', 'hours': '0', 'minutes': '0', 'seconds': '0' }]);
        setParticipantList(newParticipantList);
    }

    // saves changes in array
    let handleChange = (event, index) => {
        let newParticipantList = [...participantList];
        newParticipantList[index][event.target.id] = event.target.value;
        setParticipantList(newParticipantList);
    }

    // remove the selected object from array
    const HandleDeleteBtn = (num) => {
        let newParticipantList = [...participantList];
        newParticipantList.splice(num, 1);
        setParticipantList(newParticipantList);
    }


    const dragStart = (e) => {
        dragItem.current = e.target.id;
    };

    const dragEnter = (e) => {
        dragOverItem.current = e.currentTarget.id;
    }

    const drop = () => {
        
        const copyParticipantList = [...participantList];
        const dragItemContent = copyParticipantList[dragItem.current];
        copyParticipantList.splice(dragItem.current, 1);
        copyParticipantList.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        console.log(copyParticipantList);
        setParticipantList(copyParticipantList);
    }

    return (
        <div className={`participant-page ${props.class}`}>
            {showError ? <Error></Error> : null}
            {showError ? <img src={closeBtn} className='icon close-btn-error' onClick={closeError}></img> : null}
            <button className='prev-btn' onClick={handlePrevBtn}></button>
            <div className="participant-page-container">
                <h1 className='main-header'>רשימת מציגים</h1>
                <div className="participant-list">
                    {participantList.map((element, index) => (
                        <span key={index} id={index} onDragStart={(e) => dragStart(e)}  onDragEnter={(e) => dragEnter(e)} onDragEnd={drop} draggable>
                            <Participant ref={childRef} HandleDeleteBtn={() => HandleDeleteBtn(index)} list={index} name={element.name} job={element.job} topic={element.topic} hours={element.hours} minutes={element.minutes} seconds={element.seconds} handleChange={(event) => { handleChange(event, index) }} />
                        </span>))}
                    <button className="add-btn" onClick={HandleAddBtn}>
                        <img src={AddBtn} className="add-btn-inside" />
                        <div>הוסף משתתף</div>
                    </button>
                </div>
            </div>
            <div className="next-btn-container">
                {/* <p className={ isMistake ? "error-message" : "opacity-none"}>אופס! נראה שמשהו פה לא תקין...</p> */}
                {/* <input type="submit" className='next-btn' onClick={handleNextBtn} value="המשך"/> */}
                <button className="next-btn" onClick={handleNextBtn}>המשך</button>
            </div>
            {/* </form> */}
        </div>
    )
}

export default ParticipantPage;