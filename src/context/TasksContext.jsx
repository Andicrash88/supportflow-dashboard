import { createContext, useEffect, useMemo, useState } from "react";
import { taskStorageService } from "@/services/taskStorageService";

export const TasksContext = createContext(null);

function normalizeTask(task) {
  const category = task.category || task.type || "Operations";

  return {
    ...task,
    category,
    type: category,
  };
}

function sortByNewest(tasks) {
  return [...tasks].sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
}

function getNextTaskId(tasks) {
  const maxId = tasks.reduce((highest, task) => {
    const numericId = Number(task.id.replace("TSK-", ""));
    return Number.isNaN(numericId) ? highest : Math.max(highest, numericId);
  }, 205);

  return `TSK-${maxId + 1}`;
}

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => taskStorageService.getTasks());

  useEffect(() => {
    taskStorageService.saveTasks(tasks);
  }, [tasks]);

  const value = useMemo(
    () => ({
      tasks,
      createTask: (taskInput) => {
        setTasks((currentTasks) =>
          sortByNewest([
            normalizeTask({
              ...taskInput,
              id: getNextTaskId(currentTasks),
              createdAt: new Date().toISOString(),
            }),
            ...currentTasks,
          ]),
        );
      },
      updateTask: (taskId, updates) => {
        setTasks((currentTasks) =>
          sortByNewest(
            currentTasks.map((task) => (task.id === taskId ? normalizeTask({ ...task, ...updates }) : task)),
          ),
        );
      },
      completeTask: (taskId) => {
        setTasks((currentTasks) =>
          sortByNewest(
            currentTasks.map((task) =>
              task.id === taskId ? normalizeTask({ ...task, status: "Completed" }) : task,
            ),
          ),
        );
      },
      deleteTask: (taskId) => {
        setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
      },
    }),
    [tasks],
  );

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
}
