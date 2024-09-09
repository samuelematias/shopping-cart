import { useContext, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import Toast from 'react-native-toast-message'
import PropTypes from 'prop-types'
import { CartContext } from '../../contexts/CartContext'
import { menuItems } from '../../data/menu'
import colors from '../../theme/colors'
import { AddItem, FeedbackItem, ToastType } from '../../components'

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
    FeedbackItem({
      itemName: item.name,
      type: ToastType.ITEM_ADDED,
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
        <AddItem onPress={handleAddItem} />
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
