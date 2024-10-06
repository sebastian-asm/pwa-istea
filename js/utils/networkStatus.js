export default function networkStatus(publishButton) {
  window.addEventListener('online', () => (publishButton.disabled = false))
  window.addEventListener('offline', () => (publishButton.disabled = true))
}
