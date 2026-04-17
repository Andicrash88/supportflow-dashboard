import { seedTasks } from "@/data/tasks";

const TASKS_STORAGE_KEY = "supportflow.tasks";

function normalizeTask(task) {
  const category = task.category || task.type || "Operations";

  return {
    ...task,
    category,
    type: task.type || category,
    createdAt: task.createdAt || new Date().toISOString(),
  };
}

function sortByNewest(tasks) {
  return [...tasks].sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
}

function readStoredTasks() {
  if (typeof window === "undefined") {
    return sortByNewest(seedTasks.map(normalizeTask));
  }

  const rawTasks = window.localStorage.getItem(TASKS_STORAGE_KEY);

  if (!rawTasks) {
    return sortByNewest(seedTasks.map(normalizeTask));
  }

  try {
    const parsedTasks = JSON.parse(rawTasks);
    return Array.isArray(parsedTasks)
      ? sortByNewest(parsedTasks.map(normalizeTask))
      : sortByNewest(seedTasks.map(normalizeTask));
  } catch {
    window.localStorage.removeItem(TASKS_STORAGE_KEY);
    return sortByNewest(seedTasks.map(normalizeTask));
  }
}

function saveTasks(tasks) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(sortByNewest(tasks.map(normalizeTask))));
}

export const taskStorageService = {
  getTasks: () => readStoredTasks(),
  saveTasks,
  reset: () => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.removeItem(TASKS_STORAGE_KEY);
  },
};
