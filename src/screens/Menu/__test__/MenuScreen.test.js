import { render, fireEvent } from '@testing-library/react-native'
import Toast from 'react-native-toast-message'
import MenuScreen from '../MenuScreen'
import { CartContext } from '../../../contexts/CartContext'
import { menuItems } from '../../../data/menu'

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn(),
}))

describe('MenuScreen', () => {
  const mockDispatch = jest.fn()
  const navigationMock = {
    navigate: jest.fn(),
  }

  const state = {
    menuItems,
    shoppingCartItems: [],
  }

  const renderMenuScreen = () => {
    return render(
      <CartContext.Provider value={{ state, dispatch: mockDispatch }}>
        <MenuScreen navigation={navigationMock} />
      </CartContext.Provider>
    )
  }

  it('renders menu items', () => {
    const { getByText } = renderMenuScreen()

    expect(getByText(menuItems[0].name)).toBeTruthy()
  })

  it('calls dispatch to add item to cart when AddItem is pressed', () => {
    const { getAllByTestId } = renderMenuScreen()

    fireEvent.press(getAllByTestId('addItemButton')[0])

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_ITEM',
      payload: menuItems[0],
    })
  })

  it('navigates to ShoppingCart when toast onPress is triggered', () => {
    const { getAllByTestId } = renderMenuScreen()

    fireEvent.press(getAllByTestId('addItemButton')[0])

    const toastConfig = Toast.show.mock.calls[0][0]
    expect(toastConfig.text2).toBe(
      `${menuItems[0].name} has been added to cart.`
    )

    if (toastConfig.onPress) {
      toastConfig.onPress()
    }

    expect(navigationMock.navigate).toHaveBeenCalledWith('ShoppingCart')
  })
})
