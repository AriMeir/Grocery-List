import { FaTrashAlt } from "react-icons/fa"
const LineItem = ({item, handleCheck, handleDelete}) => {
    
    return (
        <li className="item" >
        <input
         type="checkbox" 
         checked={item.check} 
         onChange={() => handleCheck(item.id)}
         />
        <label 
        style={(item.check) ? 
            {textDecoration:'line-through'}: null}
        onDoubleClick={() => handleCheck(item.id)}>
            {item.item}
            </label>
        <FaTrashAlt 
          role="button"
          tabIndex="0"
          onClick={() => handleDelete(item.id)}
          aria-label={`Delete ${item.item}`}/>
      </li> 
    );
  };
  
  export default LineItem;