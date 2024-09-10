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

    expect(getByText('No items added to cart.')).toBeTruthy()
  })

  it('renders items in the cart', () => {
    const itemsInCart = [{ ...menuItems[0], quantity: 2 }]
    const { getByText } = renderShoppingCartScreen(itemsInCart)

    expect(getByText(menuItems[0].name)).toBeTruthy()

    expect(getByText('$5.99x')).toBeTruthy()
    expect(getByText('2')).toBeTruthy()
    expect(getByText('$11.98')).toBeTruthy()
  })

  it('adds an item to the cart when AddItem is pressed', () => {
    const itemsInCart = [{ ...menuItems[0], quantity: 1 }]
    const { getAllByTestId } = renderShoppingCartScreen(itemsInCart)

    fireEvent.press(getAllByTestId('addItemButton')[0])

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_ITEM',
      payload: { ...menuItems[0], quantity: 1 },
    })
  })

  it('removes an item from the cart when RemoveItem is pressed', () => {
    const itemsInCart = [{ ...menuItems[0], quantity: 1 }]
    const { getAllByTestId } = renderShoppingCartScreen(itemsInCart)

    fireEvent.press(getAllByTestId('removeItemButton')[0])

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_ITEM',
      payload: { ...menuItems[0], quantity: 1 },
    })
  })

  it('calculates and displays the total correctly', () => {
    const itemsInCart = [{ ...menuItems[0], quantity: 2 }]
    const { getByText } = renderShoppingCartScreen(itemsInCart)

    expect(getByText('Total: $11.98')).toBeTruthy()
  })
})
