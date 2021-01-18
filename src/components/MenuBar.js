import React from "react";

function MenuBar({selection, onSelection}) {
 
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

   

  return (
    <div className="ui four item menu">
      <span className={selection === "Profile" ? "item active" : "item"} id="Profile" onClick={(evt) => onSelection(evt.target.id)}>
        <i className="user large icon" />
      </span>

      <span className={selection === "Photo" ? "item active" : "item"} id="Photo" onClick={(evt) => onSelection(evt.target.id)}>
        <i className="photo large icon" />
      </span>

      <span className={selection === "Cocktail" ? "item active" : "item"} id="Cocktail" onClick={(evt) => onSelection(evt.target.id)}>
        <i className="cocktail large icon" />
      </span>

      <span className={selection === "Pokemon" ? "item active" : "item"} id="Pokemon" onClick={(evt) => onSelection(evt.target.id)}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
