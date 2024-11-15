import { FINISHED, PENDING, dateFormatted } from '../utils/index.js'

export default function uiModal(task) {
  const dateTask =
    task.status === PENDING
      ? `<small>Creada el ${dateFormatted(task.createdAt)}</small>`
      : `<small>Finalizada el ${dateFormatted(task.finishedAt)}</small>`

  return /* html */ `
    <h2>Actualizar tarea</h2>
    <form>
      <label for="title">Título</label>
      <input type="text" name="title" id="title" value="${task.title}" />
      <label for="description">Descripción</label>
      <textarea rows="6" id="description" name="description">${task.description}</textarea>
      <p class="checkbox">
        <input type="checkbox" id="checkbox" name="status" ${task.status === FINISHED ? 'checked' : ''} />
        <label for="checkbox">¿La tarea está <strong>finalizada</strong>?</label>
      </p>
      ${dateTask}
      <div class="buttons-container">
        <button type="button" id="close-modal" class="btn-secondary">Cerrar</button>
        <button type="submit" class="btn-primary">Actualizar</button>
      </div>
    </form>
  `
}
