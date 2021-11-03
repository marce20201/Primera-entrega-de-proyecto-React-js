import React from 'react'
import ItemCount from './ItemCount/ItemCount'
//import { Container } from 'react-bootstrap'
import './ItemDetail.css'



function ItemDetail({item={}}){
    console.log(item)
    
    const handleCount=(cant)=>{
        return alert(`Agregaste ${cant} ${item.nombre}`);
    } 
    return (

        <div className="item-detail" key={item.id}>
                <h4>{item.nombre}</h4>
                <img src={item.imgDir} alt="producto seleccionado"/> 
                <ItemCount stock={item.stock} initial={1} onAdd={handleCount} />
                <p>Stock: {item.stock}</p>
                <p>Talle: {item.talle}</p>
                <p>Precio: ${item.precio}</p>
        </div>
    
    )
}


export default ItemDetail
