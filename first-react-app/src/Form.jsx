function handleFormSubmit(e){
    e.preventDefault()
    console.log('hola')
}

export default function Form() {
    return(
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}