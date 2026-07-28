import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// starts with a capital letter
// most valid component you can create 

/*
create a function name is Mycomponent, return null
---- you created a function the returns null ----
create a function name is Mycomponent2, return a valid html elemnt
eg div inside is h1 with some texts
create a function name is Mycomponent3, return a react fragment inside is a multiple html elements 
eg div and another div 
*/

/*
1.rendering (displaying) components 
in your strict component you will be rendering the other components 
use both self closing and open and closing tags 
eg is your component name is Mycomponent 
inside the StrictMode render it 
1. self closing <MyComponent/>
2. open and closing tags; <MyComponent></MyComponent>

2. Create a component called parent component. Render all your other components inside the parent component.
And finally put the parent component inside the StrictMode component

*/

function MyComponent(){
  return null;
}

function MyComponent2(){
  return (
    <div>
      <h1>This is my second component.</h1>
    </div>
  )
}

function MyComponent3(){
  return (
    <>
    <div>
      <h2>This is my 3rd component</h2>
    </div>
    <div>
      <h2>And inside it I have 2 html elements</h2>
    </div>
    </>
  )
}

function ParentComponent(){
  return (
    <>
    <MyComponent />
    <MyComponent2 />
    <MyComponent3 />
    </>
  )
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>My First react App</h1>
    <MyComponent />
    <MyComponent2 />
    <MyComponent3 />
    <ParentComponent />
  </StrictMode>,
);


