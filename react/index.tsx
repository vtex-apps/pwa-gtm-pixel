import { canUseDOM } from 'vtex.render-runtime'
import { PixelMessage } from './typings/events'

import push from './modules/push'

export function handleEvents(e: PixelMessage) {
  switch (e.data.eventName) {
    case 'vtex:installWebApp': {
      push({
        event: 'installWebApp',
        userChoice: e.data.userChoice
      })
      return
    }
    default: {
      return
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
