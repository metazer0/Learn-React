function handleClick(){
    console.log('clicked')
}

export default function Clicker() {
    return(
        <div>
            <p>Click The Button</p>
            <button onMouseOver={handleClick}>Click</button>
        </div>
    )
}