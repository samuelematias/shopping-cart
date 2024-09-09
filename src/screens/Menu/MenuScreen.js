import { useContext, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'
import PropTypes from 'prop-types'
import { CartContext } from '../../contexts/CartContext'
import { menuItems } from '../../data/menu'
import colors from '../../theme/colors'

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
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
})

const renderItem = ({ item, dispatch, navigation }) => {
  const handleAddItem = () => {
    dispatch({ type: 'ADD_ITEM', payload: item })
    Toast.show({
      type: 'success',
      text1: 'Item added',
      text2: `${item.name} has been added to cart.`,
      onPress: () => {
        navigation.navigate('ShoppingCart')
        Toast.hide()
      },
    })
  }

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textSize}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.textSize}>${item.price}</Text>
        <TouchableOpacity onPress={handleAddItem}>
          <FontAwesome name="plus-circle" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ItemSeparator = () => <View style={styles.separator} />

const MenuScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(CartContext)

  useEffect(() => {
    dispatch({ type: 'LOAD_ITEMS', payload: menuItems })
  }, [dispatch])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={state.menuItems}
          renderItem={({ item }) => renderItem({ item, dispatch, navigation })}
          ItemSeparatorComponent={ItemSeparator}
          key={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  )
}

MenuScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default MenuScreen
