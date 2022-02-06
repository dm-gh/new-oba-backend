module.exports = ({ env }) => ({
  autoOpen: true,
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
});
