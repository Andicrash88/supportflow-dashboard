export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function parseDateInput(value) {
  if (value instanceof Date) {
    return value;
  }

  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return new Date(`${value}T00:00:00`);
  }

  return new Date(value);
}

export function formatDate(value, options = {}) {
  return new Intl.DateTimeFormat("en-US", options).format(parseDateInput(value));
}

export function formatRelativeDate(dateString) {
  return formatDate(dateString, {
    month: "short",
    day: "numeric",
  });
}

export function formatLongDate(dateString) {
  return formatDate(dateString, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
