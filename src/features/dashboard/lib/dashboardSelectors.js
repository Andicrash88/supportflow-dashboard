import { formatDate, formatLongDate, parseDateInput } from "@/lib/utils";

function startOfDay(value) {
  const date = parseDateInput(value);
  date.setHours(0, 0, 0, 0);
  return date;
}

function isSameDay(left, right) {
  return startOfDay(left).getTime() === startOfDay(right).getTime();
}

function getDayDifference(left, right) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return Math.round((startOfDay(left) - startOfDay(right)) / millisecondsPerDay);
}

function getTicketDateRange(tickets) {
  if (!tickets.length) {
    return [];
  }

  const latestTicketDate = tickets
    .map((ticket) => startOfDay(ticket.createdAt))
    .sort((left, right) => left - right)
    .at(-1);

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(latestTicketDate);
    date.setDate(latestTicketDate.getDate() - (6 - index));
    return date;
  });
}

function getReferenceDate(tickets, tasks) {
  if (tasks.length) {
    return [...tasks]
      .map((task) => startOfDay(task.dueDate))
      .sort((left, right) => left - right)[0];
  }

  if (tickets.length) {
    return getTicketDateRange(tickets).at(-1);
  }

  return startOfDay(new Date());
}

export function getDashboardMetrics(tickets, tasks) {
  const today = getReferenceDate(tickets, tasks);
  const totalTickets = tickets.length;
  const openTickets = tickets.filter((ticket) => ticket.status === "Open").length;
  const resolvedTickets = tickets.filter((ticket) => ticket.status === "Resolved").length;
  const activeTickets = tickets.filter((ticket) => ticket.status !== "Resolved").length;
  const inProgressTickets = tickets.filter((ticket) => ticket.status === "In Progress").length;
  const pendingTasks = tasks.filter((task) => task.status !== "Completed").length;
  const dueTodayTasks = tasks.filter((task) => isSameDay(task.dueDate, today)).length;
  const overdueTasks = tasks.filter((task) => getDayDifference(task.dueDate, today) < 0).length;

  return {
    totalTickets,
    openTickets,
    resolvedTickets,
    pendingTasks,
    activeTickets,
    inProgressTickets,
    dueTodayTasks,
    overdueTasks,
  };
}

export function getRecentTickets(tickets, limit = 5) {
  return [...tickets]
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt))
    .slice(0, limit)
    .map((ticket) => ({
      ...ticket,
      createdLabel: formatDate(ticket.createdAt, {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      }),
    }));
}

export function getUpcomingTasks(tasks) {
  const today = getReferenceDate([], tasks);

  return [...tasks]
    .filter((task) => getDayDifference(task.dueDate, today) >= 0)
    .sort((left, right) => startOfDay(left.dueDate) - startOfDay(right.dueDate))
    .map((task) => ({
      ...task,
      dueLabel: getTaskDueLabel(task.dueDate, today),
      formattedDueDate: formatLongDate(task.dueDate),
    }));
}

function getTaskDueLabel(dueDate, today) {
  const difference = getDayDifference(dueDate, today);

  if (difference === 0) {
    return "Due today";
  }

  if (difference === 1) {
    return "Due tomorrow";
  }

  return `Due ${formatDate(dueDate, { month: "short", day: "numeric" })}`;
}

export function getWeeklyTicketVolume(tickets) {
  const dateRange = getTicketDateRange(tickets);

  if (!dateRange.length) {
    return [];
  }

  return dateRange.map((date) => {
    const total = tickets.filter((ticket) => isSameDay(ticket.createdAt, date)).length;

    return {
      dayLabel: formatDate(date, { weekday: "short" }),
      fullDateLabel: formatLongDate(date),
      tickets: total,
    };
  });
}
