const { command, mode } = require("../lib");
const aiResponse = require("../lib/scraper");

command(
 {
  pattern: "codeai",
  fromMe: true,
  desc: "Code With Copliot Mirror",
  type: "ai",
 },
 async (message, match) => {
  if (!match) return await message.sendReply("_Hello What Code Do You Help For?_");
  await message.reply("_Analyzing Request_");
  const processedMsg = await aiResponse.coderAi(match);
  return await message.send(processedMsg, { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: "120363327841612745@newsletter", newsletterName: "ᴄᴏᴅᴇᴀɪ" } } });
 }
);

command(
 {
  pattern: "gpt4",
  fromMe: true,
  desc: "Chat With Gpt4 AI Model",
  type: "ai",
 },
 async (message, match) => {
  if (!match) return await message.sendReply("_Hello How Can I Assist You Today?_");
  await message.reply("_Hold On!_");
  const processedMsg = await aiResponse.gpt4(match);
  return await message.send(processedMsg, { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: "120363327841612745@newsletter", newsletterName: "ᴄʜᴀᴛ ɢᴘᴛ𝟺" } } });
 }
);

command(
 {
  pattern: "lamda",
  fromMe: true,
  desc: "Chat With Lamda AI Model",
  type: "ai",
 },
 async (message, match) => {
  if (!match) return await message.sendReply("_Hmm Commo'n type something_");
  await message.reply("_Thinking_");
  const processedMsg = await aiResponse.lamda(match);
  return await message.send(processedMsg, { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: "120363327841612745@newsletter", newsletterName: "ʟᴀᴍᴅᴀ ᴀɪ" } } });
 }
);

command(
 {
  pattern: "sdimg",
  fromMe: true,
  desc: "Stable Diffusion Image",
  type: "ai",
 },
 async (message, match) => {
  if (!match) return await message.sendReply("_Provide Me Image to Generate_");
  await message.reply("_Generating Image_");
  const processedImg = await aiResponse.stableDiff(match);
  const ImgMessage = `*_Generated BY FXOP_BOT_*`;
  return await message.send(processedImg, {
   caption: ImgMessage,
   contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: "120363327841612745@newsletter", newsletterName: "sᴛᴀʙʟᴇ ᴅɪғғᴜsɪᴏɴ" } },
  });
 }
);
