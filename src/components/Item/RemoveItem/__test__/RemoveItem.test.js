import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import RemoveItem from '../RemoveItem'

describe('RemoveItem', () => {
  it('renders the remove item button', () => {
    const { getByTestId } = render(<RemoveItem onPress={jest.fn()} />)

    const button = getByTestId('removeItemButton')
    expect(button).toBeTruthy()
  })

  it('calls onPress when the button is pressed', () => {
    const onPressMock = jest.fn()
    const { getByTestId } = render(<RemoveItem onPress={onPressMock} />)

    fireEvent.press(getByTestId('removeItemButton'))

    expect(onPressMock).toHaveBeenCalled()
  })
})
