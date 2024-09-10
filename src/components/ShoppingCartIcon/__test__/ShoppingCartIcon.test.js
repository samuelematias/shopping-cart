import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { CartContext } from '../../../contexts/CartContext'
import ShoppingCartIcon from '../ShoppingCartIcon'

describe('ShoppingCartIcon', () => {
  const navigationMock = {
    navigate: jest.fn(),
  }

  const renderComponent = (shoppingCartItems) => {
    const state = {
      shoppingCartItems,
    }

    return render(
      <CartContext.Provider value={{ state }}>
        <ShoppingCartIcon navigation={navigationMock} />
      </CartContext.Provider>
    )
  }

  it('renders the shopping cart icon with no items', () => {
    const { queryByText } = renderComponent([])

    expect(queryByText('0')).toBeFalsy()
  })

  it('renders the shopping cart icon with items', () => {
    const items = [{ id: 'item1', name: 'Item 1', quantity: 5 }]
    const { getByText } = renderComponent(items)

    expect(getByText('5')).toBeTruthy()
  })

  it('renders 9+ when there are more than 9 items', () => {
    const items = [{ id: 'item1', name: 'Item 1', quantity: 10 }]
    const { getByText } = renderComponent(items)

    expect(getByText('9+')).toBeTruthy()
  })

  it('navigates to the ShoppingCart screen when clicked', () => {
    const { getByTestId } = renderComponent([])

    fireEvent.press(getByTestId('shoppingCartIcon'))

    expect(navigationMock.navigate).toHaveBeenCalledWith('ShoppingCart')
  })
})
