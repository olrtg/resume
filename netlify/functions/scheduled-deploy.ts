import { schedule } from '@netlify/functions'

const EVERY_THREE_DAYS = '0 0 */3 * *'

const handler = schedule(EVERY_THREE_DAYS, async () => {
  const buildHookUrl = process.env.BUILD_HOOK_URL
  if (!buildHookUrl) {
    throw new Error('BUILD_HOOK_URL is not set')
  }

  await fetch(buildHookUrl, {
    method: 'POST',
  })

  return { statusCode: 200 }
})

export { handler }
