import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ShoppingCartScreen from '../ShoppingCartScreen'
import { CartContext } from '../../../contexts/CartContext'
import { menuItems } from '../../../data/menu'

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn(),
}))

describe('ShoppingCartScreen', () => {
  const mockDispatch = jest.fn()

  const renderShoppingCartScreen = (shoppingCartItems = []) => {
    const state = {
      menuItems,
      shoppingCartItems,
    }

    return render(
      <CartContext.Provider value={{ state, dispatch: mockDispatch }}>
        <ShoppingCartScreen />
      </CartContext.Provider>
    )
  }

  it('renders "No items added to cart" when cart is empty', () => {
    const { getByText } = renderShoppingCartScreen([])

    // Verifica se a mensagem de carrinho vazio é exibida
    expect(getByText('No items added to cart.')).toBeTruthy()
  })

  it('renders items in the cart', () => {
    const itemsInCart = [{ ...menuItems[0], quantity: 2 }]
    const { getByText } = renderShoppingCartScreen(itemsInCart)

    // Verifica se o nome do item é renderizado
    expect(getByText(menuItems[0].name)).toBeTruthy()

    // Verifica se a quantidade e o preço são renderizados corretamente
    expect(getByText('$5.99x')).toBeTruthy()
    expect(getByText('2')).toBeTruthy()
    expect(getByText('$11.98')).toBeTruthy() // 5.99 * 2
  })

  it('adds an item to the cart when AddItem is pressed', () => {
    const itemsInCart = [{ ...menuItems[0], quantity: 1 }]
    const { getAllByTestId } = renderShoppingCartScreen(itemsInCart)

    // Simula o clique no botão de adicionar item
    fireEvent.press(getAllByTestId('addItemButton')[0])

    // Verifica se a ação de adicionar foi despachada com quantity
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_ITEM',
      payload: { ...menuItems[0], quantity: 1 }, // Inclui quantity
    })
  })

  it('removes an item from the cart when RemoveItem is pressed', () => {
    const itemsInCart = [{ ...menuItems[0], quantity: 1 }]
    const { getAllByTestId } = renderShoppingCartScreen(itemsInCart)

    // Simula o clique no botão de remover item
    fireEvent.press(getAllByTestId('removeItemButton')[0])

    // Verifica se a ação de remover foi despachada com quantity
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_ITEM',
      payload: { ...menuItems[0], quantity: 1 }, // Inclui quantity
    })
  })

  it('calculates and displays the total correctly', () => {
    const itemsInCart = [{ ...menuItems[0], quantity: 2 }]
    const { getByText } = renderShoppingCartScreen(itemsInCart)

    // Verifica se o total é calculado corretamente e exibido
    expect(getByText('Total: $11.98')).toBeTruthy() // 5.99 * 2
  })
})
