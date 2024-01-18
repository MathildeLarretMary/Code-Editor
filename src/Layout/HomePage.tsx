
import CodeSection from '../Components/CodeSection';
import FilesBar from '../Components/FilesBar';
import ResultZone from '../Components/ResultZone';
import './HomePage.css';

const HomePage : React.FC = () => {

    const handleClickRun = () => {
        console.log('click run');
    }

    return (
        <div className="HomePage">
            <FilesBar />
            <div className='editor'>
                <CodeSection />
                <ResultZone />
                <button className="run-btn" type="button" onClick={handleClickRun}>Run</button>
            </div>
        </div>
    )
}

export default HomePage;