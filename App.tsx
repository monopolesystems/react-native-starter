import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { DebugProvider } from './lib/providers/DebugProvider'
import { Stack } from './lib/screens'
import { Home } from './lib/screens/Home'
import { Login } from './lib/screens/Login'

export default function App() {
  return (
    <DebugProvider level="verbose">
      <NavigationContainer>
        <View className="h-full">
          <Stack.Navigator>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="login" component={Login} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
      <View className="items-center justify-center h-full bg-gray-800">
        <StatusBar style="dark" />
      </View>
    </DebugProvider>
  )
}
