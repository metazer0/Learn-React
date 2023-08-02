export default function Greeter({person, from = "anonymous"}) {
    return (
        <>
            <h1>Hi there {person}</h1>
            <h2>from {from}</h2>
        </>
    )
}