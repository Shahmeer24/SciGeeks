exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { token } = JSON.parse(event.body);

    if (!token) {
      return { statusCode: 400, body: JSON.stringify({ message: 'Turnstile token is required.' }) };
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
        throw new Error("Turnstile secret key is not configured.");
    }
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Verification successful.' }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: 'Invalid verification token.' }),
      };
    }
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'An internal error occurred.' }),
    };
  }
};
