export default function Slots({val1,val2,val3}) {
    const vals = [val1,val2,val3]
    const isWinner = val1===val2 && val1===val3
    return(
        <div>
            {vals.map(v => <span style={{fontSize:"40px"}}>{v}</span>)}
            <h2 style={{color: isWinner? "green" : "red"}}>{isWinner? "You win!" : "You lose"}</h2>
        </div>
    )
}