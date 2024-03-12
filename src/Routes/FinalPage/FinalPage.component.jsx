import './FinalPage.styles.css';

const FinalPage = (props) => {
    return (
      <div className={`final-page ${props.class}`}>
        <h1 className='main-header'>הסתיים האירוע</h1>
        <h2 className='final-header'>תודה על ההשתתפות!</h2>
      </div>
    );
}
  
export default FinalPage;