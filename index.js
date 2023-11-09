const server = require ("./src/server");
const { conn } = require("./src/db");

//⭐const {} = require ("");

//Syncing all the models at once:
conn.sync({ alter: true }).then(() => {
    server.listen(3001, () => {
      //ver si agregamos algo aqui:⭐
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
  });