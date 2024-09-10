import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const AddItem = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} testID="addItemButton">
      <FontAwesome name="plus-circle" size={24} color="green" />
    </TouchableOpacity>
  )
}

AddItem.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default AddItem
