import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const RemoveItem = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons name="remove-circle" size={24} color="red" />
    </TouchableOpacity>
  )
}

RemoveItem.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default RemoveItem
