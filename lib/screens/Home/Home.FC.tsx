import { FC } from 'react'
import { View, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../RootStackParamList.type'
import { useDebug } from '../../hooks/useDebug.hook'

export const Home: FC<NativeStackScreenProps<RootStackParamList, 'home'>> = ({
  navigation,
}) => {
  const { debug } = useDebug()
  debug('Hello, World!')
  return (
    <View className="h-full justify-center">
      <Button
        title="Goto Login"
        color="green"
        onPress={() => navigation.navigate('login')}
      />
    </View>
  )
}
