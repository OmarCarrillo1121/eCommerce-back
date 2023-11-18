const server = require("./src/server");
const { conn } = require("./src/db");
const port = process.env.PORT || 3001;
//⭐const {} = require ("");

//Syncing all the models at once:
conn.sync({ alter: true }).then(() => { 

  server.listen(port, () => {
    
    //ver si agregamos algo aqui:⭐
    console.log( `puerto escuchando en http://localhost:${port}`); // eslint-disable-line no-console
  });
});
