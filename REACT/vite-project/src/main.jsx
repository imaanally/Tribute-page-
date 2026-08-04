import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import StatendEvents from "./StateAndEvents/Form"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateAndEvents/>
  </StrictMode>,
);


