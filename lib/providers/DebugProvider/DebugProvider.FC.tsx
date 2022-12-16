import React, { FC, PropsWithChildren } from 'react'
import debug from 'debug'
import { DebugProviderProps } from './DebugProvider.types'
import { enableLevel } from './DebugProvider.helper.fns'

export const DebugContext = React.createContext(debug)

export const DebugProvider: FC<PropsWithChildren<DebugProviderProps>> = ({
  children,
  level,
}) => {
  enableLevel(level, debug)
  return <DebugContext.Provider value={debug}>{children}</DebugContext.Provider>
}
