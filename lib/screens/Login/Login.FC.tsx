import { FC } from 'react'
import { Button, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../RootStackParamList.type'

export const Login: FC<NativeStackScreenProps<RootStackParamList, 'login'>> = ({
  navigation,
}) => (
  <View className="h-full justify-center">
    <Button title="Goto Home" onPress={() => navigation.navigate('home')} />
  </View>
)
