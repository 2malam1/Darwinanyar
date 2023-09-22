let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `.`

`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/89291bc27c3aadb7e271c.jpg' }, caption: caption }, {quoted: m })
}
handler.help = ['payment']
handler.tags = ['main']
handler.command = /^(pay|payment)$/i
handler.group = false

handler.register = false
export default handler