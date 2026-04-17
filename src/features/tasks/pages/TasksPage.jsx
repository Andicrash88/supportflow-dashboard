import { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { TaskBoard } from "@/features/tasks/components/TaskBoard";
import { TaskFilters } from "@/features/tasks/components/TaskFilters";
import { TaskFormModal } from "@/features/tasks/components/TaskFormModal";
import { TaskSummary } from "@/features/tasks/components/TaskSummary";
import { getFilteredTasks, getTaskMetrics } from "@/features/tasks/lib/taskSelectors";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useTasks } from "@/hooks/useTasks";

const defaultControls = {
  searchQuery: "",
  statusFilter: "All statuses",
  categoryFilter: "All categories",
  sortBy: "dueSoon",
};

export function TasksPage() {
  usePageTitle("Tasks");
  const { completeTask, createTask, deleteTask, tasks, updateTask } = useTasks();
  const [controls, setControls] = useState(defaultControls);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const filteredTasks = getFilteredTasks(tasks, controls);
  const metrics = getTaskMetrics(tasks);

  const openCreateModal = () => {
    setSelectedTask(null);
    setActiveModal("create");
  };

  const openEditModal = (task) => {
    setSelectedTask(task);
    setActiveModal("edit");
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedTask(null);
  };

  const handleControlChange = (event) => {
    const { name, value } = event.target;
    setControls((currentControls) => ({ ...currentControls, [name]: value }));
  };

  const handleResetFilters = () => {
    setControls(defaultControls);
  };

  const handleCreateTask = (taskInput) => {
    createTask(taskInput);
    closeModal();
  };

  const handleEditTask = (taskInput) => {
    updateTask(selectedTask.id, taskInput);
    closeModal();
  };

  const handleDeleteTask = (taskId) => {
    const targetTask = tasks.find((task) => task.id === taskId);

    if (!targetTask) {
      return;
    }

    if (window.confirm(`Delete ${targetTask.id}? This removes it from the local operations queue.`)) {
      deleteTask(taskId);
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Execution"
        title="Tasks"
        description="Manage internal support work with searchable records, category filters, and in-browser CRUD backed by local storage."
        actions={
          <button
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
            onClick={openCreateModal}
            type="button"
          >
            <Plus className="h-4 w-4" />
            New task
          </button>
        }
      />

      <TaskSummary metrics={metrics} />

      <TaskFilters
        controls={controls}
        onChange={handleControlChange}
        onReset={handleResetFilters}
        resultCount={filteredTasks.length}
        totalCount={tasks.length}
      />

      <TaskBoard
        hasTasks={tasks.length > 0}
        onComplete={completeTask}
        onCreate={openCreateModal}
        onDelete={handleDeleteTask}
        onEdit={openEditModal}
        onResetFilters={handleResetFilters}
        tasks={filteredTasks}
      />

      {activeModal ? (
        <TaskFormModal
          mode={activeModal}
          onClose={closeModal}
          onSubmit={activeModal === "create" ? handleCreateTask : handleEditTask}
          task={selectedTask}
        />
      ) : null}
    </div>
  );
}
