import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import AppNavigator from './src/navigation/AppNavigator'
import { CartProvider } from './src/contexts/CartContext'

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        {/* StatusBar 'style' prop is for text appearance (light or dark), not for CSS styles */}
        <StatusBar style="auto" /* eslint-disable-line */ />
        <AppNavigator />
      </NavigationContainer>
      <Toast />
    </CartProvider>
  )
}

export default App
