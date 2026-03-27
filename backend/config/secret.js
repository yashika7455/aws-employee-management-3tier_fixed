const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

let cachedSecrets = null;

async function getSecrets() {
  if (cachedSecrets) return cachedSecrets;

  const secretName = process.env.SECRET_NAME || "employee-management/backend";
  const client = new SecretsManagerClient({ region: process.env.AWS_REGION || "ap-south-1" });

  const response = await client.send(
    new GetSecretValueCommand({
      SecretId: secretName,
    })
  );

  const secretString = response.SecretString;
  cachedSecrets = JSON.parse(secretString);
  return cachedSecrets;
}

module.exports = { getSecrets };