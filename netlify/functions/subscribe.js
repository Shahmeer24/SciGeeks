import admin from "firebase-admin";
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { email } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Email is required" }),
      };
    }
    await db.collection("subscribers").add({
      email: email,
      subscribedAt: new Date().toISOString(),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Subscription successful!" }),
    };
  } catch (error) {
    console.error("Subscription error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "An error occurred." }),
    };
  }
};
