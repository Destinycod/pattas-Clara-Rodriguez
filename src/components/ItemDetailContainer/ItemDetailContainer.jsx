import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import LoadingImage from '../../assets/images/loadingRight.png';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    const {idItem} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryProduct = doc(db, `products/${idItem}`);
        getDoc(queryProduct).then(resp => {
          setProduct({id: resp.id, ...resp.data()}); 
          setLoading(false);
        })
      }, [idItem]);

    return (
        <>
            {<div className='itemDetailContainer'>
            {loading 
              ? 
                <img className="loadingImage" src={LoadingImage}/>
              :  
                <ItemDetail product={product} />}                     
            </div>
            }            
        </>
    )

}

export default ItemDetailContainer;