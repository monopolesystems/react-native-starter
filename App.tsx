import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="items-center justify-center h-full bg-gray-800">
      <Text className="text-white">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="light" />
    </View>
  )
}
