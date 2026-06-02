export const contactErrorCodes = [
  "invalidEmail",
  "invalidEmailFormat",
  "invalidMessage",
  "emptyMessage",
  "rateLimited",
  "sendFailed",
] as const;

export type ContactErrorCode = (typeof contactErrorCodes)[number];

export function isContactErrorCode(value: string): value is ContactErrorCode {
  return contactErrorCodes.includes(value as ContactErrorCode);
}
