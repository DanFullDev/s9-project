const admin = require("firebase-admin");

dotenv.config();

const serviceAccountPath = process.env.FIREBASE_KEY_PATH;
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };
