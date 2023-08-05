export default function ShoppingListItem({ item, quantity, purchased }) {
  const styles = {
    color: purchased === true && "grey",
    textDecoration: purchased === true && "line-through",
  };
  return (
    <li style={styles}>
      {item} - {quantity}
    </li>
  );
}
{
  /* <ul>
{items.map((i) => (
  <li key={i.id}
    style={{
      color: i.purchased === true && "grey",
      textDecoration: i.purchased === true && "line-through",
    }}
  >
    {i.item}-{i.quantity}
  </li>
))}
</ul> */
}
