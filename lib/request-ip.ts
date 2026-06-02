import { headers } from "next/headers";

export function getRequestIpAddress(): string {
  const headerList = headers();
  const forwardedFor = headerList.get("x-forwarded-for");

  if (forwardedFor) {
    const firstAddress = forwardedFor.split(",")[0]?.trim();
    if (firstAddress) {
      return firstAddress;
    }
  }

  const realIp = headerList.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "anonymous";
}
