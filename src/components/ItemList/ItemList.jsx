import React from 'react';
import Item from '../Item/Item';

function ItemList({ productos }) {
    return (
        <>
            { productos.map((prod) => 
            <Item 
            key={prod.id} 
            name={prod.name}
            imagen={prod.imagen}
            precio={prod.precio}
            prod={prod} 
            />)  }
        </>
    );
}

export default ItemList;