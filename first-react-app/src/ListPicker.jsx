export default function ListPicker({values}) {
    const randInx = Math.floor(Math.random()*values.length)
    const randElement = values[randInx]
    return (
        <div>
            <p>The list of values: {values}</p>
            <p>Random element is: {randElement}</p>
        </div>
    )
}