export default function DoubleDice() {
    const num1 = Math.floor(Math.random()*3)+1
    const num2 = Math.floor(Math.random()*3)+1
    const styles = {color: num1===num2 ? 'green' : 'red'}
    // const result = (num1 === num2) ? "You win :)" : "You lose :("
    return(
        <div className="DoubleDice" style={styles}>
            {/* <h2>{result}</h2> */}
            <h2>Double Dice</h2>
            {num1 === num2 && <h3>You win!</h3>}
            {/* {num1 === num2 ? <h3>YOU WIN!</h3>:""} */}

            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )
}