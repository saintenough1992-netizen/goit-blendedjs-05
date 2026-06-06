import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { taskRender } from './render-tasks';
import { saveData, SaveDataFromLS, TASKS_LS_KEY } from './local-storage-api';

const dataTasks = SaveDataFromLS(TASKS_LS_KEY) || [];

export function addTask(e) {
  e.preventDefault();
  const taskTitle = e.target.elements.taskName.value.trim();
  const taskDesc = e.target.elements.taskDescription.value.trim();

  if (!taskTitle || !taskDesc) {
    iziToast.warning({
      message: 'All fields have to be filled in!',
      position: 'topCenter',
    });
    return;
  }
  const task = {
    title: taskTitle,
    desc: taskDesc,
  };
  dataTasks.push(task);
  taskRender(dataTasks);
  saveData(TASKS_LS_KEY, dataTasks);
  e.target.reset();
}

export function initTasks() {
  taskRender(dataTasks)
}