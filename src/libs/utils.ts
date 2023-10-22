import cache from 'async-throttle-cache'

// eslint-disable-next-line import/prefer-default-export, no-restricted-globals
export const loadScript = cache(async (url: string, prefix: string, context = self) => {
  const resp = await fetch(`${prefix}${url}`, {
    cache: 'force-cache',
  })
  const text = await resp.text()
  // eslint-disable-next-line no-new-func
  return (new Function('globalThis', 'self', text))(context, context)
}, 60000)
