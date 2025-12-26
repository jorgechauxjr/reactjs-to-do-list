import './CreateTodoButton.css'

function CreateTodoButton() {
    function handleClick(event) {
        console.log("DISTE CLICK!")
        console.log("====> evento ", event)
        console.log("====> target ", event.target)
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={handleClick}
        >+</button>
    );
}

export { CreateTodoButton };

/*

== ESTILO ARROW FUNCTION ==

function CreateTodoButon() {

    return (
        <button
            className="CreateTodoButton"
            onClick={
                (event) => {
                    console.log("DISTE CLICK!")
                    console.log("====> evento ", event)
                    console.log("====> target ", event.target)
                }
            }
        >+</button>
    );
}
*/