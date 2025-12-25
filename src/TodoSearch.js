import './TodoSearch.css';

function TodoSearch() {
    function handleChange(event) {
        console.log("ESCRIBISTE EN EL CAMPO DE TEXTO")
        console.log("====> evento ", event)
        console.log("====> target ", event.target)
        console.log("====> Texto escrito ", event.target.value)
    }

    return (
        <input
            placeholder="Cortar cebolla"
            className="TodoSearch"
            onChange={handleChange}
        />
    );
}

export { TodoSearch };

/*
== ESTILO ARROW FUNCTION ==

function TodoSearch() {
    return (
        <input
            placeholder="Cortar cebolla"
            className="TodoSearch"
            onChange={
                (event) => {
                    console.log("ESCRIBISTE EN EL CAMPO DE TEXTO", )
                    console.log("====> evento ", event)
                    console.log("====> target ", event.target)
                }
            }
        />
    );
}


*/