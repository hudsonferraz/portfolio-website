const RESEND_API_KEY_ENV_NAME = "RESEND_API_KEY";

export function assertResendApiKeyConfigured(): void {
  const apiKey = process.env[RESEND_API_KEY_ENV_NAME];

  if (!apiKey || apiKey.trim().length === 0) {
    throw new Error(
      `${RESEND_API_KEY_ENV_NAME} is not set. Add it to .env.local for local development or configure it in your hosting provider.`
    );
  }
}

export function getResendApiKey(): string {
  assertResendApiKeyConfigured();
  return process.env[RESEND_API_KEY_ENV_NAME]!.trim();
}
