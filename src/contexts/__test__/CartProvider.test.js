import { Button, Text } from 'react-native'
import { render, fireEvent } from '@testing-library/react-native' // Usando a versão React Native
import { CartProvider, CartContext } from '../CartContext'

const TestComponent = () => {
  return (
    <CartContext.Consumer>
      {(value) => (
        <>
          <Text>Items in cart: {value.state.shoppingCartItems.length}</Text>
          <Button
            title="Add Item"
            onPress={() =>
              value.dispatch({
                type: 'ADD_ITEM',
                payload: { id: 'testItem', name: 'Test Item', price: 1.99 },
              })
            }
          />
        </>
      )}
    </CartContext.Consumer>
  )
}

describe('CartProvider', () => {
  it('should provide cart state and dispatch actions', () => {
    const { getByText } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    )

    // Verifica o estado inicial
    expect(getByText(/Items in cart: 0/i)).toBeTruthy()

    // Simula o clique para adicionar item
    const addButton = getByText('Add Item')
    fireEvent.press(addButton)

    // Verifica se o item foi adicionado
    expect(getByText(/Items in cart: 1/i)).toBeTruthy()
  })
})
