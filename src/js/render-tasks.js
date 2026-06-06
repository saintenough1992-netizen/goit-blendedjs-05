import { refs } from './refs';

export function taskRender(array) {
  const markup = array
    .map(
      ({ title, desc }) => `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${title}</h3>
      <p>${desc}</p>
  </li>`
    )
    .join('');

  refs.taskList.innerHTML = markup;
}
