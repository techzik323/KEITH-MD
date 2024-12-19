/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk9xekh4VFVUUThjWm1VSnRiYzZ2dEFYT1JRR0htZEdsVGRmdjlNNTRFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjcwNjdYZFZwMHJuT01kSnhHRVdJNExLcU5DNk1NUlpRVHZQaUhyaHdoZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQVF2c29scm1LQ2NNcjgyOG5ERHlsWVl4K2x2UzV6cytLeXN5L0lhc253PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsanM1bVZOSXZvYnNoYUlsSCtRcGJ6dW5YR0t0YVN1bWFFVVZFd1BvMlNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJIdG5aNlFYQVdCUG1VejZHdFRyZjc0ZjhZZHArSGNKSWMzQzliWXA1MWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1XUE5hSmVlaHM5NXFKRUIvS2ZRUXZxVUVNQkd0SnZXRVBLaVRtNTRTRE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VlZmkvZmtPdEtHUUZVUjFmRkhBdG5XQyt2VWUzc0FZWGt0VjhmVEIwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU25DNDI0dTFFWFBPbnMxV3E2VzRmYld2NTNnL1NJVWF0OVFsUUpWNVNBTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw2WGtBNU1nTlkrcjNDb0YxQTRIck8rRUU1VDU3OVdjeDhLeGlIbGk5bTdla1lNRXJ5SFhlVHFRdi81ZDVNeEp4NThZV1dIVkhPeU1IUDhrTzE2UkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJHRFd3N25wRUVEdUt6WC84MjdMWDJZNTI1Mkl6OFdVQTllSEF2R081L1RBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6MHpid09FeVEwYVV1Q2RJN29IZklBIiwicGhvbmVJZCI6ImYxOWM3Nzg5LWEyY2MtNGM2MS05NmQwLTg0YWExODRiMjgyYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHdENiblZoNmFjTHNpSldtVWdNS1pSSWE0MkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTgraWJFR2V5bUh6MERvWG5LNVJ1ZWN2YVNFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVOTkNISkxDIiwibWUiOnsiaWQiOiIyNTY3NTE2MTc3ODg6MzdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01tdDY1SUJFS0tkanJzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtsNUwydU03Y0p0UzFyMkw1clNsTU52cEtXemN1YlRPUGxoWkxLcVN0MGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkR4L21yd0hlQWc0NStzd2hWbkd1ckN6cWlMUmticUkxdlAvcUc5NElmUVJ0TDVYZWJBYnhQNFlBR0dnQlZWbEtnZXFHRG9MRWgyR1ROWHFyZFRTTUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJreVFOd2NaSTlHdFRpdEpmay9ESHZ2Q1NOZks0Vmpvc3Q2a2NjVGtXdkNHL0l5ZXZXclZnMlEyVkVUKzh2VUpSRmRnUDkvVE05L2VRQXVsMnVRWldCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc1MTYxNzc4ODozN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaSmVTOXJqTzNDYlV0YTlpK2EwcFREYjZTbHMzTG0wemo1WVdTeXFrcmRKIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0NTc3ODQxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhNdiJ9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "256";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '256751617788';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'false';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'false';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
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
