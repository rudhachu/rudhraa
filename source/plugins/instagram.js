const { bot } = require('../../lib')
const { Instagram } = require('../../lib/Misc')

bot(
 {
  pattern: 'instagram',
  info: 'Download Instagram Media',
  type: 'downloader',
 },
 async (message, match) => {
  if (!match) return await message.reply('_Provide Instagram Link!_')
  await message.reply('_Downloading_')
  const insta = new Instagram()
  const result = await insta.download(match)
  await message.sendMessage(message.jid, result, {}, 'video')
 }
)
