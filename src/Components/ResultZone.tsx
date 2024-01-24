import { useSelector } from "react-redux";

const ResultZone : React.FC = () => {
    //@ts-ignore
    const files = useSelector(state => state.redux)

    function getCode(lang : string) {
        return files.find((obj: { lang: string; }) => obj.lang === lang).code
    }

    const srcDocs = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <style>${getCode("css")}</style>
    </head>
    <body>
    ${getCode("html")}
        <script>${getCode("javascript")}</script>
    </body>
    </html>
    `

    return (
        <section className="result-zone">
            <iframe title="code-preview" srcDoc={srcDocs} sandbox="allow-scripts"></iframe>
        </section>
    )
}

export default ResultZone;