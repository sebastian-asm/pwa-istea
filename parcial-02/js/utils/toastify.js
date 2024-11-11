export default function toast(message, type = 'success') {
  Toastify({
    text: message,
    className: type,
    gravity: 'top',
    position: 'center',
    duration: 5000
  }).showToast()
}
