
interface ButtonInterface {
    id : string,
    toggleFile : (id: string) => void,
    btnContent : string,
    imgURL : string
}

const ButtonFile : React.FC<ButtonInterface> = ({
    id,
    toggleFile,
    btnContent,
    imgURL
}) => {

    return(
        <button id={id} onClick={() => {
            toggleFile(id)
            }}>
            <img src={imgURL} alt={btnContent} />
            <span>{btnContent}</span>
        </button>
    )
}

export default ButtonFile;