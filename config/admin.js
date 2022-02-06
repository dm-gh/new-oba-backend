module.exports = ({ env }) => ({
  autoOpen: true,
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  url: env("PUBLIC_URL") + '/admin'
});
