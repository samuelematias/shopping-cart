import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import colors from './src/theme/colors'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app, LOL!</Text>
      {/* StatusBar 'style' prop is for text appearance (light or dark), not for CSS styles */}
      <StatusBar style="auto" /* eslint-disable-line */ />
    </View>
  )
}
