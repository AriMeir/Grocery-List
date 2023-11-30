import LineItem from "./LineItem.js";
const ItemList = ({items, handleCheck, handleDelete}) => {
    
    return (
      <ul>
       {items.map((item) =>
       <LineItem
        item={item}
        key={item.id}
        handleCheck={handleCheck}
        handleDelete={handleDelete}>
       </LineItem> )}
      </ul>
    );
  };
  
  export default ItemList;