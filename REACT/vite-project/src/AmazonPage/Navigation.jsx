/*
top navigation of the page 
*/

/*
import <name> from "<relative path>"
ensure before import its in the src directory
*/

import logo from "./Assets/amazon.png"

// *component naming rules 
// null or void jsx 

function Navigation(){
    return (
        <div>
        <h2>Navigation section</h2>
        </div>
    );
}

/*
export so that any a the file can 
import the component 
1. default export: <one major>
*/

export default Navigation;