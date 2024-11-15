import { storage, AUDIO_CONFIG_KEY } from './index.js'
import { uiIcons } from '../ui/index.js'

export default async function synthesis(title, icon) {
  const configParams = storage.get(AUDIO_CONFIG_KEY)
  const synthesis = speechSynthesis
  const utterance = new SpeechSynthesisUtterance()
  utterance.text = title.trim()
  utterance.rate = configParams?.rate || 1
  utterance.lang = configParams?.lang || 'es-MX'
  synthesis.speak(utterance)
  utterance.addEventListener('start', () => (icon.innerHTML = uiIcons.volume2))
  utterance.addEventListener('end', () => (icon.innerHTML = uiIcons.volume))
}
