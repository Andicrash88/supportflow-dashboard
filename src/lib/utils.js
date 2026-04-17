export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatRelativeDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(dateString));
}
