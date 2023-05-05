module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "digitalocean",
      providerOptions: {
        accessKeyId: env("DO_SPACES_KEY"), // Your DigitalOcean Space access key
        secretAccessKey: env("DO_SPACES_SECRET"), // Your DigitalOcean Space secret key
        region: env("DO_SPACES_REGION"), // Your DigitalOcean Space region
        params: {
          Bucket: env("DO_SPACES_BUCKET"), // Your DigitalOcean Space name
        },
      },
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  },
});
//asdasdasdassda
