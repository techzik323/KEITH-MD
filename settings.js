/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0UyeThFZU9zV2FpbVR6UTRZNWpqdlpwT0Rsb0x3bzVVU00rRVdwSk0yUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREpZTm1xbWNUMzJFbDMyblNUTll4ZUNpbC9vOXh5V0hKVGMyazFHVW9qaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ0Z6MnppUGUvbWJiMGtJUkJlemdSWEdhakRTdXdBenMzRVQ1YmNqWlVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFa1lQL3ZMUVo5azg3Z00zTWpaazZCNzhScEpRa2lsSTJQODdJQkFOb1QwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGVk9IVFFvdHhJN1lmcmhtQ1JCZUVoZVBCalByZkNIT2JzTEMrQzI4WHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNKUE5TcWNlRFFmNzZhQ3daM3p5TE9aaFdJZzVhcjJ0UGNsRUJ2enoxV2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ085ejJZeUtnN29zUnJUSXdUaVV6Q21sVW5xekVSQmlSaGFqUC8za1pGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXNRKzJkd0FhWG5WNmNxNGdOb3c2ajZpSU04Y0djam1WZHFKSVRLUFVTUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpCZlJHMDQwNkUrT2hrckhVQUFEUmczRFR3d1UvU1hzajdReDlEWG5sWmN5Z0NjVWxZMXNyVDR3dFl6RTFHVGFoTVBHVDNOQmpOcWJvQnVUZEl0WkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiOXVBQXBqSEpqV3B1TDBHYWJ2NFd0Ukh6c1pVRk1WSzhmbm8rU0p3QkFyaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSnQweXEzUWJUdUdicVpCQTdUam5MdyIsInBob25lSWQiOiJmYWU1MTE5Zi05NDJhLTQ2NGUtYTg3MC00ZGNiN2YwZWMzZjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWU5QXVMSVk5Vk90VHo3NzdPUmE4b3M5ZGg0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh2WG1tSSt4eXRTL0Vmdmp3b3JPQnhLOEhPUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCVzdORTZFSyIsIm1lIjp7ImlkIjoiMjU2NzUxNjE3Nzg4OjU0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNK3Q2NUlCRUpUTDdMd0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrbDVMMnVNN2NKdFMxcjJMNXJTbE1OdnBLV3pjdWJUT1BsaFpMS3FTdDBrPSIsImFjY291bnRTaWduYXR1cmUiOiJhVDlrN3RXWHVWZUlSTVhrOUdkV3NmTkwwVTBMcWwyaDQrbjZVbVArd1dBbjA1T25Wb0NOZVlSQUg1MFBoRGozV0hYWU95cEZaUlQvUXBlTjdxTWdBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoid0ZmS082bnU4N2xZZWlYT2h3STA4KzNwS3dPbGFNNXpiVFpmRG41eW9wcUQraWVqanprR2dJUUc4TFRkNkU2WGpZdzNxcTZBdzJXa216OGo1T3diQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTY3NTE2MTc3ODg6NTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkplUzlyak8zQ2JVdGE5aSthMHBURGI2U2xzM0xtMHpqNVlXU3lxa3JkSiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODIyMDk2MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDUmsifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "256";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '256751617788';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || '`❄️ZIK TECH❄️`';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'false';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'false';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'false';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
