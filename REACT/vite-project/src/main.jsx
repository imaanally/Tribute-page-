import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// starts with a capital letter
// most valid component you can create 

/*
path "./"
import <AnyName:Default Export> from "path"
import js or jsx files. the extention is optional. 
*/

import AmazonPage from "./AmazonPage"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AmazonPage/>
  </StrictMode>,
);


