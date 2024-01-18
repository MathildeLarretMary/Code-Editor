const HeaderCode : React.FC = () => {

    const handleClickRun = () => {
        console.log('click run');
    }
    
    return (
        <header className='header'>
            <h1>FreeOnlineIDE</h1>
            <button className="run-btn" type="button" onClick={handleClickRun}>Run</button>
        </header>
    )
}

export default HeaderCode;