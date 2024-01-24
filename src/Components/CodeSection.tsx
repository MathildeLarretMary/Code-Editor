import { useDispatch } from "react-redux";
import { updateCode } from "../Features/redux";

const CodeSection : React.FC<{ id: string; code: string }>  = ({id, code}, ref) => {
    const dispatch = useDispatch()

    const handleCopyCode = () => {
        console.log(id);
    }

    return (
        <div className="code-zone">
            <textarea className="code-zone-textarea" 
            placeholder="code ..." 
            spellCheck = "false"
            value={code}
            onChange={e => dispatch(updateCode({id, value: e.target.value}))}
            ></textarea>

            <button className="code-zone-btn" onClick={handleCopyCode}>copy</button>
        </div>
    )
}

export default CodeSection;