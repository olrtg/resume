import { schedule } from '@netlify/functions'

const EVERY_THREE_DAYS = '0 0 */3 * *'
const BUILD_HOOK_URL =
  'https://api.netlify.com/build_hooks/6788cbebeed3e25dc6ca7d1e'

const handler = schedule(EVERY_THREE_DAYS, async () => {
  await fetch(BUILD_HOOK_URL, {
    method: 'POST',
  })

  return { statusCode: 200 }
})

export { handler }
