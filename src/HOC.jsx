import { useState } from "react";

export default function withToggles(WrappedComponent) {
  return function List(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const displayItems = isCollapsed ? props.items.slice(0, 3) : props.items;

    function toggleOpen() {
      setIsOpen((isOpen) => !isOpen);
      setIsCollapsed(false);
    }

    return (
      <div className="list-container">
        <div className="heading">
          <h2>{props.title}</h2>
          <button onClick={toggleOpen}>{isOpen ? <span>&or;</span> : <span>&and;</span>}</button>
        </div>

        {isOpen && <WrappedComponent {...props} items={displayItems} />}

        {/* The HOC withToggles takes WrappedComponent as an argument (actual it's a parameter, but we're referring to what’s passed in when the function withToggles is calling) and returns a new component - List and props of the List component will be passed to the WrappedComponent => WrappedComponent: ProductList, CompanyList when we call withToggles(...) */}

        {/* define the ProductListWithToggle variable (this variable has title and items props that contain the data need to be rendered) => which will call withToggles function and pass in the ProductList component => forward these props of ProductListWithToggle component to ProductList component (WrappedComponent) => add logic and render data */}

        <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>{isCollapsed ? `Show all ${props.items.length}` : "Show less"}</button>
      </div>
    );
  };
}
