const parse = require("pg-connection-string").parse;

if (process.env.NODE_ENV === "production") {
  const config = parse(process.env.DATABASE_URL);

  module.exports = () => ({
    connection: {
      client: "postgres",
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
    },
  });
} else {
  module.exports = ({ env }) => ({
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: false,
      },
    },
  });
}
