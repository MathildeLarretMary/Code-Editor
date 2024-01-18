import { useState } from "react";

const CodeSection : React.FC = () => {

    const [inputValue, setInputValue] = useState<string>("");

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