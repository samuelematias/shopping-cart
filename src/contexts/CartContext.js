import { createContext, useReducer, useMemo } from 'react'
import PropTypes from 'prop-types'

export const CartContext = createContext()

const initialState = {
  menuItems: [],
  shoppingCartItems: [],
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return {
        ...state,
        menuItems: action.payload,
      }
    case 'ADD_ITEM': {
      const existingIndex = state.shoppingCartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      let newCartItems = []
      if (existingIndex >= 0) {
        newCartItems = state.shoppingCartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newCartItems = [
          ...state.shoppingCartItems,
          { ...action.payload, quantity: 1 },
        ]
      }
      return { ...state, shoppingCartItems: newCartItems }
    }
    case 'REMOVE_ITEM': {
      const newCartItems = state.shoppingCartItems.reduce((acc, item) => {
        if (item.id === action.payload.id) {
          const newQuantity = item.quantity - 1
          if (newQuantity > 0) acc.push({ ...item, quantity: newQuantity })
        } else {
          acc.push(item)
        }
        return acc
      }, [])
      return { ...state, shoppingCartItems: newCartItems }
    }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
