import { render } from '@testing-library/react-native'
import Toast from 'react-native-toast-message'
import FeedbackItem, { ToastType } from '../FeedbackItem'

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}))

describe('FeedbackItem', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('shows success toast for ITEM_ADDED', () => {
    render(<FeedbackItem itemName="Test Item" type={ToastType.ITEM_ADDED} />)

    expect(Toast.show).toHaveBeenCalledWith({
      type: 'success',
      text1: 'Item added',
      text2: 'Test Item has been added to cart.',
      onPress: null,
    })
  })

  it('shows error toast for ITEM_UPDATED', () => {
    render(<FeedbackItem itemName="Test Item" type={ToastType.ITEM_UPDATED} />)

    expect(Toast.show).toHaveBeenCalledWith({
      type: 'error',
      text1: 'Item updated',
      text2: 'Quantity of Test Item has been reduced from cart.',
      onPress: null,
    })
  })

  it('shows error toast for ITEM_REMOVED', () => {
    render(<FeedbackItem itemName="Test Item" type={ToastType.ITEM_REMOVED} />)

    expect(Toast.show).toHaveBeenCalledWith({
      type: 'error',
      text1: 'Item removed',
      text2: 'Test Item has been removed from cart.',
      onPress: null,
    })
  })

  it('calls onPress if provided for ITEM_ADDED', () => {
    const onPressMock = jest.fn()
    render(
      <FeedbackItem
        itemName="Test Item"
        type={ToastType.ITEM_ADDED}
        onPress={onPressMock}
      />
    )

    expect(Toast.show).toHaveBeenCalledWith({
      type: 'success',
      text1: 'Item added',
      text2: 'Test Item has been added to cart.',
      onPress: onPressMock,
    })
  })
})
