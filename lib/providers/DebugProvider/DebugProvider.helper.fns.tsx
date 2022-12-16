import _debug from 'debug'
import { Levels } from './DebugProvider.const'
import { Level } from './DebugProvider.types'

function prepareEnableString(level: Level): string {
  const levelIndex = Levels.indexOf(level)
  return Levels.slice(0, levelIndex + 1).join(',')
}

export function enableLevel(level: Level, debug: typeof _debug) {
  debug.enable(prepareEnableString(level))
}
