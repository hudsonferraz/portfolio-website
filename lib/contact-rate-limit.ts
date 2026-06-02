import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const UPSTASH_REDIS_REST_URL_ENV = "UPSTASH_REDIS_REST_URL";
const UPSTASH_REDIS_REST_TOKEN_ENV = "UPSTASH_REDIS_REST_TOKEN";

const CONTACT_RATE_LIMIT_MAX_REQUESTS = 3;
const CONTACT_RATE_LIMIT_WINDOW = "10 m";

let contactRateLimiter: Ratelimit | null = null;

function getContactRateLimiter(): Ratelimit | null {
  const url = process.env[UPSTASH_REDIS_REST_URL_ENV];
  const token = process.env[UPSTASH_REDIS_REST_TOKEN_ENV];

  if (!url || !token) {
    return null;
  }

  if (!contactRateLimiter) {
    contactRateLimiter = new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(
        CONTACT_RATE_LIMIT_MAX_REQUESTS,
        CONTACT_RATE_LIMIT_WINDOW
      ),
      prefix: "portfolio-contact",
    });
  }

  return contactRateLimiter;
}

export function isContactRateLimitConfigured(): boolean {
  return getContactRateLimiter() !== null;
}

export async function isContactRateLimitExceeded(
  identifier: string
): Promise<boolean> {
  const rateLimiter = getContactRateLimiter();

  if (!rateLimiter) {
    return false;
  }

  const { success } = await rateLimiter.limit(identifier);
  return !success;
}
