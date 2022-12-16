import { Levels } from './DebugProvider.const'

export type Level = typeof Levels[number]

export type DebugProviderProps = {
  level: Level
}
