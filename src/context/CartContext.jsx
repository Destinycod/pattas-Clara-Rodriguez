import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider( {children} ){
    const [cartList, setCartList] = useState([])

    function AddItem(item) {
        const index=cartList.findIndex(i=> i.id === item.id)
        if(index > -1){
            const oldQuantity=cartList[index].quantity
            cartList.splice(index,1)
            setCartList([...cartList, {...item, quantity:item.quantity + oldQuantity}])
        }
        else{
            setCartList([...cartList, item]);
        }
    }

    function vaciarCarrito(){
        setCartList([]);
    }

    function removeItem(item){
        setCartList(cartList.filter(product => product.id !== item.id));
    }

    function totalProducts () {
        return cartList.reduce((acc, item) => acc + item.quantity, 0);
    }

    function totalPrice () {
        return cartList.reduce((acc, product) => acc + product.price * product.quantity, 0);
    }
    
    return(
        <CartContext.Provider value={ {
            cartList,
            AddItem,
            vaciarCarrito,
            removeItem,
            totalProducts,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;