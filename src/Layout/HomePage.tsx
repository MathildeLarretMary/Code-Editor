
import CodeSection from '../Components/CodeSection';
import FilesBar from '../Components/FilesBar';
import HeaderCode from '../Components/HeaderCode';
import ResultZone from '../Components/ResultZone';
import './HomePage.css';

const HomePage : React.FC = () => {

    return (
        <>
            <div className="HomePage">
                <HeaderCode />
                <main>
                    <FilesBar />
                    <div className='editor'>
                        <CodeSection />
                        <ResultZone />
                    </div>
                </main>
            </div>
        </>
    )
}

export default HomePage;