import { createStackNavigator } from '@react-navigation/stack'
import { MenuScreen, ShoppingCartScreen } from '../screens'
import { ShoppingCartIcon } from '../components'

const Stack = createStackNavigator()

const renderHeaderRight = (navigation) => {
  return <ShoppingCartIcon navigation={navigation} />
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
