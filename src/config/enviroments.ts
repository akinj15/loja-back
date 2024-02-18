export const environment = {
  JWT_SECRET:
    process.env.JWT_SECRET ??
    'DOUPNASupodnaiuondiqwyhe978102y3901287312037!@&(¨#!*&@¨%#*(!@&#¨!@7dhauosdnIASBhidvbaugivdyqtiuv71263912783u8i9ajsdiuojasb',
  CLIENT_ID: process.env.CLIENT_ID ?? '',
  CLIENT_SECRET: process.env.CLIENT_SECRET ?? '',
  REDIRECT_URL: process.env.REDIRECT_URL ?? '',
  TOKEN_INN: process.env.TOKEN_INN ?? '',
  BASE_URL_INN: process.env.BASE_URL_INN ?? '',
  CONFIG_INN: {
    headers: {
      Authorization: 'Bearer ' + process.env.TOKEN_INN,
    },
  },
};
