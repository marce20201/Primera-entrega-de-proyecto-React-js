import React, {useState} from 'react'

function ItemCount(props) {
    const {initial, stock, onAdd}=props

    const [cantidad, setCantidad] = useState(initial) // inicializo con el valor de initial 

    const subirCantidad = ()=>{
        if (cantidad<stock) {
            setCantidad(cantidad+1)
        }
    }
    const bajarCantidad= ()=>{
        if (cantidad>initial) {
            setCantidad(cantidad-1) 
        }
    }
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    <h5>Contador de items</h5>
                </div>
                <div className="cad-body">
                    <button className="btn btn-primary " onClick={bajarCantidad}>-</button>
                    <label>{cantidad}</label>
                    <button className="btn btn-primary" onClick={subirCantidad}>+</button> <br/>
                    <button className="btn btn-success" onClick={()=> onAdd(cantidad)}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount

