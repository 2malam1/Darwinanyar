import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `
ᴋᴇᴛɪᴋ .ᴀʟʟᴍᴇɴᴜ
ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ

_youtube.com/@BG-DARWIN_
`;
 let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}

conn.sendMessage(m.chat, {
    video: fs.readFileSync('./media/thumb2.mp4'),
    mimetype: 'video/mp4',
    fileLength: 100000000000,
    caption: pfft,
    gifPlayback: true,
    gifAttribution: 5,
    contextInfo: {
      forwardingScore: 2023, 
      isForwarded: false,
      mentionedJid: [m.sender]
    }
  },
  )
  conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu.mp3'), quoted: m });
/*
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `𝙳𝙰𝚁𝚆𝙸𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ʟʟᴄ`,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/b11d2895ab50e33d8c909.jpg`,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})*/
}
handler.command = /^(menu|help)$/i;

export default handler;