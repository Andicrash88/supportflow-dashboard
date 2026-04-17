import { formatLongDate, parseDateInput } from "@/lib/utils";

function matchesFilter(value, filterLabel) {
  return filterLabel.startsWith("All ") || value === filterLabel;
}

function sortTasks(tasks, sortBy) {
  const sortedTasks = [...tasks];

  if (sortBy === "newest") {
    return sortedTasks.sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
  }

  return sortedTasks.sort((left, right) => {
    const dueDifference = parseDateInput(left.dueDate) - parseDateInput(right.dueDate);

    if (dueDifference !== 0) {
      return dueDifference;
    }

    return new Date(right.createdAt) - new Date(left.createdAt);
  });
}

export function getFilteredTasks(tasks, controls) {
  const query = controls.searchQuery.trim().toLowerCase();

  return sortTasks(
    tasks.filter((task) => {
      const category = task.category || task.type;
      const matchesSearch =
        !query ||
        [task.title, task.owner, task.id, category]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(query));

      return (
        matchesSearch &&
        matchesFilter(task.status, controls.statusFilter) &&
        matchesFilter(category, controls.categoryFilter)
      );
    }),
    controls.sortBy,
  );
}

export function getTaskMetrics(tasks) {
  const actionableTasks = tasks.filter((task) => task.status !== "Completed");

  return {
    totalTasks: tasks.length,
    inProgressTasks: tasks.filter((task) => task.status === "In Progress").length,
    blockedTasks: tasks.filter((task) => task.status === "Blocked").length,
    completedTasks: tasks.filter((task) => task.status === "Completed").length,
    actionableTasks: actionableTasks.length,
  };
}

export function getTaskCardRows(task) {
  const category = task.category || task.type;

  return [
    { label: "Owner", value: task.owner, emphasized: true },
    { label: "Category", value: category },
    { label: "Due date", value: formatLongDate(task.dueDate) },
  ];
}
