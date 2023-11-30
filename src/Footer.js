const Footer = (props) => {
    
    return (
      <footer>
        <p>{props.length} List Item{props.length !=1 ? 's':''}</p>
      </footer>
    );
  };
  
  export default Footer;