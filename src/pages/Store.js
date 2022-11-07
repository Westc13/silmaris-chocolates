import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

function Store() {
  return (
    <>
      <h1>Store</h1>
      <ul>
        {storeItems.map((item) => (
          <li key={item.id}>
            <StoreItem {...item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Store;
