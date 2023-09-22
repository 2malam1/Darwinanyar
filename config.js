import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285156402391', 'Denny', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285156402391'
global.packname = '© Sticker by 2malam-Bot'
global.author = '2malam'
global.namebot = '2malam-Bot'
global.wm = 'Whatsapp'
global.stickpack = '© Sticker by'
global.stickauth = '2malam-Bot'
global.fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
global.fotonya2 = `https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg`
// Link Sosmed
global.sig = ''
global.syt = ''
global.sgh = ''
global.sgc = 'https://chat.whatsapp.com/Ksg1H'
// Donasi

global.psaweria = ''
global.ptrakterr = ''
global.povo = ''
// Info Wait
global.wait = 'Loading...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'SGWN'
global.rose = 'Rs-putangina'
global.xyro = 'v4siMr8iLX'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}
/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "v4siMr8iLX",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
