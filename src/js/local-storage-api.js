export function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const TASKS_LS_KEY = 'tasks';
