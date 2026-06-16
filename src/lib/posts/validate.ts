import type { Post } from "./types";

export function isPost(value: unknown): value is Post {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const record = value as Record<string, unknown>;

  return (
    typeof record.userId === "number" &&
    typeof record.id === "number" &&
    typeof record.title === "string" &&
    typeof record.body === "string"
  );
}

export function parsePosts(value: unknown): Post[] {
  if (!Array.isArray(value)) {
    throw new Error("Posts response must be an array.");
  }

  if (!value.every(isPost)) {
    throw new Error("Posts response contains invalid items.");
  }

  return value;
}
