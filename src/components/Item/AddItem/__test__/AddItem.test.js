import { render, fireEvent } from '@testing-library/react-native'
import AddItem from '../AddItem'

describe('AddItem', () => {
  it('renders the add item button', () => {
    const { getByTestId } = render(<AddItem onPress={jest.fn()} />)

    const button = getByTestId('addItemBtton')
    expect(button).toBeTruthy()
  })

  it('calls onPress when the button is pressed', () => {
    const onPressMock = jest.fn()
    const { getByTestId } = render(<AddItem onPress={onPressMock} />)

    fireEvent.press(getByTestId('addItemButton'))

    expect(onPressMock).toHaveBeenCalled()
  })
})
