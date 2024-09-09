import { useContext, useMemo } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'
import PropTypes from 'prop-types'
import { CartContext } from '../../contexts/CartContext'
import colors from '../../theme/colors'

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  listContainer: {
    flex: 1,
  },
  separator: {
    backgroundColor: colors.black,
    height: 2,
  },
  textSize: {
    fontSize: 18,
  },
  totalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})

const ListFooter = ({ total }) => {
  return (
    <View style={styles.totalContainer}>
      <Text style={styles.textSize}>Total: ${total}</Text>
    </View>
  )
}

ListFooter.propTypes = {
  total: PropTypes.string.isRequired,
}

const renderEmptyComponent = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.textSize}>No items added to cart.</Text>
  </View>
)

const renderItem = ({ item, dispatch }) => {
  const handleAddItem = () => {
    dispatch({ type: 'ADD_ITEM', payload: item })
    Toast.show({
      type: 'success',
      text1: 'Item added',
      text2: `${item.name} has been added to cart.`,
    })
  }

  const handleRemoveItem = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: item })
    if (item.quantity === 1) {
      Toast.show({
        type: 'error',
        text1: 'Item removed',
        text2: `${item.name} has been removed from cart.`,
      })
    } else {
      Toast.show({
        type: 'error',
        text1: 'Item updated',
        text2: `Quantity of ${item.name} has been reduced from cart.`,
      })
    }
  }

  const quantityPrice =
    item.price * item.quantity === 0 ? item.price : item.price * item.quantity

  return (
    <View style={styles.itemContainer}>
      <Text>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.textSize}>${item.price}x</Text>
        <TouchableOpacity onPress={handleRemoveItem}>
          <MaterialIcons name="remove-circle" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.textSize}>{item.quantity}</Text>
        <TouchableOpacity onPress={handleAddItem}>
          <FontAwesome name="plus-circle" size={24} color="green" />
        </TouchableOpacity>
        <Text style={styles.textSize}>${quantityPrice}</Text>
      </View>
    </View>
  )
}

const calculateTotal = (items) => {
  if (!items || !items.length) return '0.00'
  return items
    .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
    .toFixed(2)
}

const ItemSeparator = () => <View style={styles.separator} />

const ShoppingCartScreen = () => {
  const { state, dispatch } = useContext(CartContext)

  const total = useMemo(
    () => calculateTotal(state.shoppingCartItems),
    [state.shoppingCartItems]
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={state.shoppingCartItems}
          renderItem={({ item }) => renderItem({ item, dispatch })}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={renderEmptyComponent}
          key={(item) => item.id.toString()}
        />
      </View>
      <ListFooter total={total} />
    </SafeAreaView>
  )
}

export default ShoppingCartScreen
