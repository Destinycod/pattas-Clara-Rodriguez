import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";

function Cart() {
    const [idOrder, setIdOrder]=useState('')
    const {cartList, vaciarCarrito, removeItem, totalPrice}= useCartContext()

    const generateOrder = (event) =>{
        event.preventDefault();

        let order={}

        order.buyer=dataForm;
        order.total=totalPrice();
        order.items=cartList.map(cartItems=>{
            const id=cartItems.id;
            const name=cartItems.name;
            const price=cartItems.price * cartItems.quantity;
            return {id,name,price}
        });
        order.date=Timestamp.fromDate(new Date());

        const dataBase=getFirestore()
        const orderCollection=collection(dataBase,'orders')

        addDoc(orderCollection,order) //agrega la orden y crea la collección "orders" si no existe en la base de datos
        .then(answer => setIdOrder(answer.id))
        .finally(()=> {
            borrarCarrito()
            setDataForm({
                name:"", email:"", phone:""
            })
        })

        const cleccionNoti = collection(db, 'items')
        const queryActulizarStock = query(
            cleccionNoti, where( documentId() , 'in', cartList.map(it => it.id))          
        )

        const batch = writeBatch(db)

        getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: resp.data().stock - cartList.find(item => item.id === resp.id).cantidad
        }) ))

        batch.commit()

    }

    return (
        <div className="carrito">
            <h2>Carrito de Compras</h2>
            {cartList < 1 ? (
            <>
            <h4><span>No hay productos en el carrito</span></h4><br/>
            <Link to="/"><button id='botonNaranja'>Volver al Home</button></Link>
            </>
            ) : (
            <div className="alingCenter">
                 {idOrder.length !==0 && idOrder} 
                {cartList.map (product => 
                <div >
                    <ListGroup horizontal="lg" className="my-2" key={product.id} >
                        <ListGroup.Item>{product.name}</ListGroup.Item>
                        <ListGroup.Item>{product.category}</ListGroup.Item>
                        <ListGroup.Item>{product.quantity}</ListGroup.Item>
                        <ListGroup.Item>{product.price}</ListGroup.Item>
                        <ListGroup.Item><button onClick={()=>removeItem(product)}>Eliminar</button> </ListGroup.Item> 
                    </ListGroup>
                </div>)}
                <p>Total: ${totalPrice()}</p>
                
                
                <Link to="/"><button id="botonNaranja">Volver al Home</button></Link>
            </div>)
            }
        </div>
    )
    
}

export default Cart;