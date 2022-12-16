import { Debugger } from 'debug'
import { useContext } from 'react'
import { Levels } from '../providers/DebugProvider/DebugProvider.const'
import { DebugContext } from '../providers/DebugProvider/DebugProvider.FC'
export function useDebug(): { [key in typeof Levels[number]]: Debugger } {
  const debug = useContext(DebugContext)
  return {
    error: debug('error'),
    warning: debug('warning'),
    info: debug('info'),
    debug: debug('debug'),
    verbose: debug('verbose'),
  }
}
