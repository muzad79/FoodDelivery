import { createContext, useReducer } from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            console.log("add state payload",action.payload)
            return state = [...state, action.payload]
        case 'DELETE':
            let newState = state.filter((item) => item.id != action.payload)
            return state = [...newState]
        case 'UPDATE':
            console.log("update state payload",action.payload)
            let food1 = state.map((food) => {
                
                if (food.id == action.payload.id) {
                    console.log("food item",food)
                    // food.qty = food.qty +action.payload.qty
                    
                    // food.price = food.price + action.payload.price
                    return {...food, qty:food.qty +action.payload.qty, price : food.price + action.payload.price }
                } 
                return food
            })
            return state = [...food1]
        case 'CHECKOUT' :
          return  state =[]

        default:
            console.log("reducer erroe")
    }
}
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (

        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;