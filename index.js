/* const server = require("./src/server");
const { conn } = require("./src/db");
const PORT = process.env.PORT || 3001;

const port = process.env.PORT ;

//Syncing all the models at once:
conn.sync({ alter: true }).then(() => {
  server.listen(port, () => {
    console.log(`puerto escuchando en localhost:${port}`); // eslint-disable-line no-console
  });

}); */

const server = require("./src/server");
const { conn } = require("./src/db");
const PORT = process.env.PORT || 3001;

// Syncing all the models at once:
conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
