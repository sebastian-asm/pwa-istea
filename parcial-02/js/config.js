import { uiAlert, uiNavbar } from './ui/index.js'
import { AUDIO_CONFIG_KEY, storage, SUCCESS_MESSAGE } from './utils/index.js'

const container = document.querySelector('#container')
const form = document.querySelector('form')
const cancelButton = document.querySelector('#cancel-button')
const saveButton = document.querySelector('#save-button')
const langSelect = document.querySelector('#lang-select')
const rateSelect = document.querySelector('#rate-select')

async function init() {
  cancelButton.addEventListener('click', () => (location.href = 'index.html'))
  form.addEventListener('change', () => renderConfigParams(langSelect.value, rateSelect.value))
  saveButton.addEventListener('click', saveConfigParams)
  uiNavbar()
  verifyDataLocalStorage()
}

function verifyDataLocalStorage() {
  const paramsConfig = storage.get(AUDIO_CONFIG_KEY)
  langSelect.value = paramsConfig?.lang || 'es-MX'
  rateSelect.value = paramsConfig?.rate || 1
  renderConfigParams(langSelect.value, rateSelect.value)
}

function renderConfigParams(langValue, rateValue) {
  const langLabel = document.querySelector('#lang')
  const rateLabel = document.querySelector('#rate')
  langLabel.innerHTML = `Idioma: <strong>${langValue}</strong>`
  rateLabel.innerHTML = `Velocidad: <strong>${rateValue}</strong>`
}

function saveConfigParams() {
  storage.set(AUDIO_CONFIG_KEY, { lang: langSelect.value, rate: rateSelect.value })
  uiAlert(SUCCESS_MESSAGE, 'success', container)
}

init()
