import PropTypes from 'prop-types'
import Toast from 'react-native-toast-message'

export const ToastType = {
  ITEM_ADDED: 'ITEM_ADDED',
  ITEM_UPDATED: 'ITEM_UPDATED',
  ITEM_REMOVED: 'ITEM_REMOVED',
}

const FeedbackItem = ({ itemName, type, onPress }) => {
  const showToast = () => {
    switch (type) {
      case ToastType.ITEM_ADDED:
        Toast.show({
          type: 'success',
          text1: 'Item added',
          text2: `${itemName} has been added to cart.`,
          onPress: onPress || null,
        })
        break
      case ToastType.ITEM_UPDATED:
        Toast.show({
          type: 'error',
          text1: 'Item updated',
          text2: `Quantity of ${itemName} has been reduced from cart.`,
          onPress: onPress || null,
        })
        break
      case ToastType.ITEM_REMOVED:
        Toast.show({
          type: 'error',
          text1: 'Item removed',
          text2: `${itemName} has been removed from cart.`,
          onPress: onPress || null,
        })
        break
      default:
        break
    }
  }

  return showToast()
}

FeedbackItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(ToastType)).isRequired,
  onPress: PropTypes.func,
}

export default FeedbackItem
