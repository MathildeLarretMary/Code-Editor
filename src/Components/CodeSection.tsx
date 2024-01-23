import { useState } from "react";
import { useSelector } from "react-redux";

const CodeSection : React.FC = () => {

    const [inputValue, setInputValue] = useState<string>("");
    //@ts-ignore
    const inputState = useSelector(state => state.redux)
    console.log(inputState);
    

    const handleCopyCode = () => {
        console.log(inputValue);
    }

    return (
        <div className="code-zone">
            <textarea className="code-zone-textarea" 
            placeholder="code ..." 
            spellCheck = "false"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}></textarea>

            <button className="code-zone-btn" onClick={handleCopyCode}>copy</button>
        </div>
    )
}

export default CodeSection;