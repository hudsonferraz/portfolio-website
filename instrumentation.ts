export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { assertResendApiKeyConfigured } = await import("@/lib/env");
    assertResendApiKeyConfigured();
  }
}
