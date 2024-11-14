require("dotenv").config();
// Global configurations object contains Application Level variables such as:
// client secrets, passwords, connection strings, and misc flags
const configurations = {
  ConnectionStrings: {
    MongoDB: "mongodb+srv://soshiyant82:aaaaa@cluster0.gf6ut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  },
  Authentication: {
    Google: {
      ClientId: "197283431947-b901193iiqcnilcc099sjt02uu7ruqpn.apps.googleusercontent.com",
      ClientSecret: "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",
      CallbackUrl: "http://localhost:3000/auth/google/callback"
    }
  },
};
module.exports = configurations;
