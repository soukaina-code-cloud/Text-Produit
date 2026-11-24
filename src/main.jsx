import React from "react";
import { StrictMode } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createRoot } from "react-dom/client";
import "./App.css";

// import App from "./testuseState/App.jsx";
// import App from "./FolderDevises/Devises.jsx";
import Produits from "./FormProduit/Produits";

const root=createRoot(document.getElementById('root'));
// const store=createStore(reducerEmployer)
root.render(
  <StrictMode>
         <Produits />
    </StrictMode>
  
   
  
)
