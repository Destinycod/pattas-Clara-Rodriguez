import React, {useState} from 'react';


const ItemCount = ( {stock, onAdd} ) => {

    const [valor, setValor] = useState(1);

    const handleSuma=() => {
        valor < stock ? setValor (prev => prev + 1) : alert ('Compra máxima');
    }

    const handleResta=() => {
        valor > 1 ? setValor (prev => prev - 1) : alert ('Compra mínima');
    }

    const aniadir=() =>{
        if (valor <= stock){
            alert(`Tu compra es de  ${valor}`)
        }
        else{
            alert('Has superado el stock');
        }
    }

    return(
        <div>
            <div className='alignCenter'>
                <button id='botonNaranja' onClick={handleResta}> - </button><h4>{valor}</h4><button id='botonNaranja' onClick={handleSuma}> + </button>
            </div>
            <div className='alignCenter'>
                <button id='botonNaranja' onClick={aniadir, () => onAdd(valor)}>Agregar al Carrito</button>
            </div>
        </div>
    )

}

export default ItemCount;