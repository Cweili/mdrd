import cache from 'async-throttle-cache'

// eslint-disable-next-line import/prefer-default-export, no-restricted-globals
export const loadScript = cache(async (url: string, prefix: string, context = self) => {
  const resp = await fetch(`${prefix}${url}`, {
    cache: 'force-cache',
  })
  if (!resp.ok) {
    throw new Error(`Failed to load script: ${prefix}${url} (HTTP ${resp.status})`)
  }
  const text = await resp.text()
  // eslint-disable-next-line no-new-func
  return (new Function('globalThis', 'self', text))(context, context)
}, 60000, {
  key: (url: string, prefix?: string) => (prefix + url),
})

// eslint-disable-next-line import/prefer-default-export
export function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
