const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: "DataNexus CRUD API",
      version: "1.0.0",
      description: "Production Ready API Documentation"
    },
    host: "datanexus-crud-api.onrender.com",
    basePath: "/",
    schemes: ["https"]
  },
  apis: ["./routes/user.routes.js"]
};

module.exports = swaggerJsDoc(options);