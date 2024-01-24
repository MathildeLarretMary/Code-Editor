
interface HeaderCodeProps {
    handleClickRun: () => void;
  }
  
  const HeaderCode: React.FC<HeaderCodeProps> = ({ handleClickRun }) => {
  
    return (
      <header className='header'>
        <h1>FreeOnlineIDE</h1>
        {/* <button className="run-btn" type="button" onClick={handleClickRun}>
          Run
        </button> */}
      </header>
    );
  }
  
  export default HeaderCode;