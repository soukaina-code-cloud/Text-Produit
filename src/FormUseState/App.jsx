import React from "react";
import { useState } from "react";
import ResultatList from "./Resultatlist";
import ChercheBar from "./ChercheBar";
export default function App(){
    const [recherche,setRechercher]=useState("");
    return <div>
        <ChercheBar recherche={recherche} setRechercher={setRechercher}/>
        <p>Le type : lugeme</p>
         <ResultatList type={recherche}/>
        

    </div>

}
