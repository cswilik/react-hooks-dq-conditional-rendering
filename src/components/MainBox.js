import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
 const [selection, setSelection] = useState("Profile")
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

 function  handleSelection(newSelection) {
   console.log(newSelection)
    setSelection(newSelection)
  }


  let detailsToDisplay = <Profile/>

  if (selection === "Profile") {
    detailsToDisplay = <Profile/>;
  } else if (selection === "Photo") {
    detailsToDisplay = <Photos/>;
  } else if (selection === "Cocktail") {
    detailsToDisplay = <Cocktails/>;
  } else if (selection === "Pokemon") {
    detailsToDisplay = <Pokemon/>
  }
  return (
    <div>
      <MenuBar selection={selection} onSelection={handleSelection}/>
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
