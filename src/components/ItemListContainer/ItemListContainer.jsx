import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingImage from '../../assets/images/loadingRight.png';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

function ItemListContainer(){

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams() 

    useEffect(() => {
        const db = getFirestore();
        if(idCategoria) {
          const queryProducts = query(collection(db, 'products'), where('category', '==', idCategoria));
          getDocs(queryProducts)
          .then(resp => { setProductos( resp.docs.map(product => ({id: product.id, ...product.data()}))); 
          setLoading(false); })
        } else {
          const queryProducts = collection(db, 'products');
          getDocs(queryProducts)
          .then(resp => { setProductos( resp.docs.map(product => ({id: product.id, ...product.data()})) ); 
          setLoading(false); })
        }
      }, [idCategoria]);

    return (
        <div className='itemContainer'>
            { loading 
              ? 
              <img className="loadingImage" src={LoadingImage}/> 
              :  
              <ItemList productos={productos} />
            }

        </div>
    );
}

export default ItemListContainer;