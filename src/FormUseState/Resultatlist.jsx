import React from "react";
import { useState } from "react";

export default function ResultatList(){
    const listes = ["tomote","carotte","pomme","navet","poivron"] ;
    const resultat = listes.filter((P)=p.nom===p.toUpperCase());
    return <ul>
        {resultat.map((l,index)=><li key={index}>{l}

         </li>)}
    </ul>
}