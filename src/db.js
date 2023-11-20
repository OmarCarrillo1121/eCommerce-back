require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require('pg');
const fs = require("fs");
const path = require("path");
//const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;



const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: "postgres",
  logging: false,
  ssl: true,  // Siempre establecido en true
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Puedes ajustar esto según la configuración de tu servidor PostgreSQL
    },
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a PostgreSQL exitosa");
  } catch (error) {
    console.error("Error al conectar con PostgreSQL:", error);
  }
})();

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring:⭐


const { Videogames, Users, Banners, Reviews, Orders } = sequelize.models;


//🧡❤🧡❤🧡❤🧡❤🧡❤para ver como estan los modelos hago un console.log de sequelize.models🧡❤🧡❤🧡❤🧡❤🧡❤🧡❤🧡❤🧡❤🧡❤
//console.log("MODELOS:");
//console.log(sequelize.models);

// Aca vendrian las relaciones
// Product.hasMany(Reviews):⭐;
Users.hasMany(Reviews, { foreignKey: 'userId' });
Reviews.belongsTo(Users, { foreignKey: 'userId' });

Videogames.hasMany(Reviews, { foreignKey: 'videogameId' });
Reviews.belongsTo(Videogames, { foreignKey: 'videogameId' });

Orders.belongsTo(Users, { foreignKey: 'userId' });
Orders.belongsToMany(Videogames, { through: 'OrderProducts', foreignKey: 'orderId' });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
 
};
