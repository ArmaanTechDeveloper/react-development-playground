import "./start-typing.styles.css"

const StartTyping = () => {
    return(
        <div className="start-typing-container">
            <h1>TODO</h1>
            <div>
                <input type="text" placeholder="Start typing ..."/>
                <button>Create</button>
            </div>
        </div>
    )
}

export default StartTyping