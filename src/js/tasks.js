import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
  console.log(task);

  e.target.reset();
}
