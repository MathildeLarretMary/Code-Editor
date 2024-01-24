import { useState } from "react";

const CodeSection : React.FC<{ id: string; code: string }>  = ({id, code}, ref) => {

    const [inputValue, setInputValue] = useState<string>("");

    const handleCopyCode = () => {
        console.log(id);
    }

    return (
        <div className="code-zone">
            <textarea className="code-zone-textarea" 
            placeholder="code ..." 
            spellCheck = "false"
            value={code}
            onChange={(e) => setInputValue(e.target.value)}></textarea>

            <button className="code-zone-btn" onClick={handleCopyCode}>copy</button>
        </div>
    )
}

export default CodeSection;