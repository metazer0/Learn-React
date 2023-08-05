export default function ColorList({colors}) {
    // const lis = colors.map(color => <li>{color}</li>)
    return (
        <div>
            <p>Color list</p>
            <ul>
                {colors.map(c => <li style={{color:c}}>{c}</li>)}
            </ul>
        </div>
    )
}