const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    swagger: "2.0",   // ⭐ change from openapi → swagger
    info: {
      title: "DataNexus CRUD API",
      version: "1.0.0",
      description: "Production Ready API Documentation"
    },
    host: "localhost:5000",
    basePath: "/",
    schemes: ["http"]
  },
  apis: ["./routes/user.routes.js"]
};

module.exports = swaggerJsDoc(options);