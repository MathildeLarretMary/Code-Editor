import { useDispatch } from "react-redux";
import { updateCode } from "../Features/redux";
import { useState } from "react";

const CodeSection : React.FC<{ id: string; code: string }>  = ({id, code}) => {
    const dispatch = useDispatch()
    const [text, setText] = useState("")

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log('Text successfully copied to clipboard');
          })
          .catch((err) => {
            console.error('Unable to copy text to clipboard', err);
          });
      };

    return (
        <div className="code-zone">
            <textarea className="code-zone-textarea" 
            placeholder="code ..." 
            spellCheck = "false"
            value={code}
            onChange={(e) => {
                dispatch(updateCode({id, value: e.target.value}))
                setText(e.target.value)
            }
        
        }
            ></textarea>

            <button className="code-zone-btn" onClick={() => {copyToClipboard(text)}}>copy</button>
        </div>
    )
}

export default CodeSection;