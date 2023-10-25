// Credenciales
const enviroments = {
  prod: {
    url_api: 'https://backsuma.gruporedsalud.com/api',
  },
  dev: {
    url_api: 'http://localhost:3000',
  },

  local : {
    url_api: 'http://localhost:3000',
  },

  local_suma : {
    url_api: 'http://127.0.0.1:5000/api',
  },

};



export const environment = enviroments.local_suma;




// export const passwordS01 = passwordS01.prod;
