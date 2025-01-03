/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElkeS9vZWM0NldFN3ZOTGxPQXpaTkxYWDUxTlJqVXdNT282WmthSC9sbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUg2bURWWTRHZnhyb08rQklPekJkRXhOQWU4dEJJR3MrYi84cFh3UGZDcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSlJFOEtFS0R6amxMUEhQa2RqcE5CZ3U1R0tQa3l3UHgrUnE3dWdLcVVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwWlJvWm8rVlloOW5IVHZta1gwSDFQbTc2Z3N0eEdTMUlIeEJ5aWhRT3lzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKTjB4RzNGd21ZZTArWGs1cWdCcUR5SXI1N2JpZW1JcjRGVjFCZHU1bXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdsQXF2Q1hYbzBlMy8rMzAwanU5cU9VL3BYZnE0MkdQNUVEdHpnakhSRDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5oNk4wYXVBZERnay95bG52Vjl5NEtaRzIzeXlBR2JTcG8wdUtoQnFWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVJ2TkRJRmxlSWZ5UVQ4RVlHUFZUTHZuRHFxZFVWOU9YanhNNnBvZ1V5ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJlcnVSdlZDejcwaldad3JQdUtyRUprRzJsNmRvbytTbjFHeVJOSDVNM2pGWDlzdTB3KzJMN1hEb1lTRU5TYUdBR01ycGM1WnhZaTR6S1pxbnlObkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiJ4Z055dlJPems1M1Ewc0l2NVdUSTd1VGxhRzhPNVpTakYwWFZ5RzRFYUE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQQ2JQNE8zRVFSMkFXNmduc0prTUZnIiwicGhvbmVJZCI6IjAwNjcxZTMyLTI1YzYtNGQ0Ny04MWIxLTA2ZWExNTdjMjYzOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIweVJKaG5xZURlV1E0cWNPYUlhZW1BMGRvcjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkVrY3kvUS9oSzNPMWFlclZpMFlZZDVLNnJFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlIyR0ZSNEI1IiwibWUiOnsiaWQiOiIyNTY3NTE2MTc3ODg6NDFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ011dDY1SUJFTVRCM2JzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtsNUwydU03Y0p0UzFyMkw1clNsTU52cEtXemN1YlRPUGxoWkxLcVN0MGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilo2eVAvcGk1NTlnMWtHdUYzc21hZVJBWFEvMkJ5RlRJUEdSVlgvTmVoYkpnb2xmOFE4MjYxNnA5MzZZaGwvUXZxank5OE1wY0pXZldqbGpQVEp1QkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHTWNrRWUySGtMTGNMN2hIYk5odVNUT0dQMXBxcmwxUFVZRUppQ09vWktpV2xtenROREJMTTVoOEgxYmJ1dmY5ZGVKQlU0SzhBajJXWm9BL25ncVpCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc1MTYxNzc4ODo0MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaSmVTOXJqTzNDYlV0YTlpK2EwcFREYjZTbHMzTG0wemo1WVdTeXFrcmRKIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1ODc2ODE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1KdSJ9';

const prefix = process.env.PREFIX || '+';
const mycode = process.env.CODE || "256";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '256751617788';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || '🔆ZIK 🔆BUG 🔆BOT🔆';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
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
