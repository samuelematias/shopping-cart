import { cartReducer } from '../CartContext'
import { menuItems } from '../../data/menu'

describe('cartReducer', () => {
  const initialState = {
    menuItems: [],
    shoppingCartItems: [],
  }

  it('should load menu items', () => {
    const action = { type: 'LOAD_ITEMS', payload: menuItems }
    const newState = cartReducer(initialState, action)

    expect(newState.menuItems.length).toBe(menuItems.length)
  })

  it('should add an item to the cart', () => {
    const item = menuItems[0]
    const action = { type: 'ADD_ITEM', payload: item }
    const newState = cartReducer(initialState, action)

    expect(newState.shoppingCartItems.length).toBe(1)
    expect(newState.shoppingCartItems[0].quantity).toBe(1)
  })

  it('should increase the quantity when adding the same item again', () => {
    const item = menuItems[0]
    const initialStateWithItem = {
      ...initialState,
      shoppingCartItems: [{ ...item, quantity: 1 }],
    }

    const action = { type: 'ADD_ITEM', payload: item }
    const newState = cartReducer(initialStateWithItem, action)

    expect(newState.shoppingCartItems[0].quantity).toBe(2)
  })

  it('should remove an item from the cart', () => {
    const item = menuItems[0]
    const initialStateWithItem = {
      ...initialState,
      shoppingCartItems: [{ ...item, quantity: 1 }],
    }

    const action = { type: 'REMOVE_ITEM', payload: item }
    const newState = cartReducer(initialStateWithItem, action)

    expect(newState.shoppingCartItems.length).toBe(0)
  })
})
