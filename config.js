/**
 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/6288292024190
 * Supported By Gpt Assistant 

SAYA ( KyuuRzy ) TIDAK BERTANGGUNG JAWAB JIKA SCRIPT INI DI SALAH GUNAKAN 
DILARANG MENJUAL SCRIPT INI KEPADA KEPADA KRANG LAIN ( Karna Script ini Saya Akan Share Free )
JIKA ADA YANG MENJUAL NYA, SAYA PERSILAHKAN BULLY DIA + BEBAS KENON
KALAU MAU COLONG FITUR, MINIMAL MASUKIN NAMA GW DI TQTO KALIAN AJG

DAH ITU DARI GW AJA
Last Author : KyuuRzy 

NYARI SC KEK GINI?
PV TELE AJA : t.me/KyuuDev

*/

const fs = require('fs')
const { color } = require('./lib/myfunc')
const version = require("@whiskeysockets/baileys/package.json").version 

//owner
global.owner = '6285133475252'
global.nomerowner = ["6285133475252"]

//payment
global.nomordana = '0895381661212'

//bot
global.botname = "NeoMd"
global.KyuuKuru = "https://telegra.ph/file/28282735848de7989301c.png"
global.baileysVersion = `Baileys version ${version}`
global.TypeBaileys = `whiskeysockets`
global.footer = `KyuuRzy 乂 𝐙͢𝐱𝐕 𝐂𝐋͢𝐢𝚵𝐍͢𝐓`
global.prefa = ['','!','.',',','🐤','🗿']

//watermark 
global.packname = 'KyuuRzy'
global.author = 'Slebewww'

//apikey
global.caliph = 'MyBiibotz'
global.lolkey = 'aa287b0865449a8c9b530722'
global.cookie = '_U=1o0gOAFjeuOfJGlzAx7CV-wDu6tv3Q1pbvjc3KbaXLiDaGQnJYmz'

//database 
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

global.Kyuu = "`"
global.mess = {
    group: "Fitur Hanya Digunakan Untuk Grup!",
    Badmin: "Fitur dapat Digunakan Setelah Bot menjadi ADMIN!",
}
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
