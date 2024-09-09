import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { CartContext } from '../../contexts/CartContext'
import colors from '../../theme/colors'

const styles = StyleSheet.create({
  badgeContainer: {
    alignItems: 'center',
    backgroundColor: colors.red,
    borderRadius: 11,
    height: 22,
    justifyContent: 'center',
    position: 'absolute',
    right: -6,
    top: -6,
    width: 22,
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  iconContainer: {
    marginRight: 10,
    position: 'relative',
  },
})

const ShoppingCartIcon = ({ navigation }) => {
  const { state } = useContext(CartContext)

  const totalItems = state.shoppingCartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ShoppingCart')}
      style={styles.iconContainer}
    >
      <FontAwesome name="shopping-cart" size={24} color="blue" />
      {totalItems > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>
            {totalItems > 9 ? '9+' : totalItems}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

ShoppingCartIcon.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default ShoppingCartIcon
