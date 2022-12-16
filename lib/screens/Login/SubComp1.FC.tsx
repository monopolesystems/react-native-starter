import React, { FC } from 'react'
import { Text } from 'react-native'

export const SubComp1: FC<{ test : boolean }> = (props: { test : boolean }) => {
  const { test } = props
  return <Text>{test}</Text>
}
