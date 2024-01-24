import { useDispatch, useSelector } from "react-redux";
import CodeSection from '../Components/CodeSection';
import HeaderCode from '../Components/HeaderCode';
import ResultZone from '../Components/ResultZone';
import './HomePage.css';
import { useState } from "react";
import ButtonFile from "../Components/ButtonFile";

export interface State {
    id: string;
    lang: string;
    imgURL: string;
    buttonContent: string;
    code: string;
}

const HomePage: React.FC = () => {
    //@ts-ignore
    const inputState = useSelector(state => state.redux)
    const dispatch = useDispatch()
    const [fileIndex, setFileIndex] = useState(inputState[0].id);

    const  clickRunBtn = () => {
        console.log('click run');
    }

    return (
        <>
            <div className="HomePage">
                <HeaderCode 
                handleClickRun={clickRunBtn}
                />
                <main>
                <section className="sidebar">
                    {inputState.map((element: { id: string; imgURL: string; buttonContent: string; }) => {
                        return (
                            <ButtonFile
                                key={element.id}
                                id={element.id}
                                toggleFile={(id: string) => {
                                    setFileIndex(id)
                                }}
                                imgURL={element.imgURL}
                                btnContent={element.buttonContent}
                            />
                        );
                    })}
                </section>
                    <div className='editor'>
                        <CodeSection
                            id={fileIndex}
                            code={inputState.find(( obj : State) => obj.id === fileIndex).code}/>
                        <ResultZone />
                    </div>
                </main>
            </div>
        </>
    )
}

export default HomePage;
