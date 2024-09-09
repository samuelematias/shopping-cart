import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import MenuScreen from '../screens/Menu/MenuScreen'
import ShoppingCartScreen from '../screens/ShoppingCart/ShoppingCartScreen'

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10,
  },
})

const Stack = createStackNavigator()

const renderHeaderRight = (navigation) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ShoppingCart')}
      style={styles.headerRight}
    >
      <FontAwesome name="shopping-cart" size={24} color="blue" />
    </TouchableOpacity>
  )
}

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={({ navigation }) => ({
          title: 'Menu',
          headerRight: () => renderHeaderRight(navigation),
        })}
      />
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
        options={{ title: 'Shopping Cart' }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator
