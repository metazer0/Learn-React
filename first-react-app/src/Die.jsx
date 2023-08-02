export default function Die({numSides=6}) {
    let random = Math.floor(Math.random()*numSides)+1
    return <h1>{numSides} sides = Die Roll {random}</h1>
}