import React, { useState } from "react";
import Listing from "./Listing";
import Filter from "./Filter";
export default function Produits(){
   const products = [
  { code: "P001", name: "Téléphone Samsung", prix: 2500, quality: "Excellent" },
  { code: "P002", name: "Souris HP", prix: 120, quality: "Good" },
  { code: "P003", name: "Clavier Logitech", prix: 250, quality: "Excellent" },
  { code: "P004", name: "Écouteurs JBL", prix: 350, quality: "Very Good" },
  { code: "P005", name: "Chargeur USB-C", prix: 100, quality: "Good" },
  { code: "P006", name: "Laptop Lenovo", prix: 6500, quality: "Excellent" },
  { code: "P007", name: "Casque Gaming", prix: 450, quality: "Very Good" },
  { code: "P008", name: "Clé USB 64GB", prix: 90, quality: "Good" },
  { code: "P009", name: "Écran Dell", prix: 1800, quality: "Excellent" },
  { code: "P010", name: "Power Bank", prix: 300, quality: "Very Good" }
];
let[rechercher,setRechercher] = useState("");
function filterd(mot){
   setRechercher(mot)
}
let productsFilterd=products.filter(product=>(
    product.name.includes(rechercher.toLocaleUpperCase())
));
return(<>
<Filter filterd={filterd}/>
<Listing products={productsFilterd}/>
</>)
}