export function getUser() {
  if (typeof window === "undefined") return null;

  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
}