module.exports = () => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: "AKIAXOGXXODNRWIEXBUE",
          secretAccessKey: "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",
          region: "eu-west-3",
          params: {
            ACL: "public-read",
            signedUrlExpires: 15 * 60,
            Bucket: "ecommerce-react-native-strapi",
          },
        },
      },
    },
  },
});
