import { useState } from "react";
import React from "react";

export default function ChercheBar({recherche,setRechercher}){
    
    return <div><h2>Composant ChercheBar</h2>
        <label>Entresvle nom cle de recherche :</label>
        <input type="text" value={recherche} onChange={(event)=>setRechercher(event.target.value)}/>
        <button>charcher</button>
    </div>
}