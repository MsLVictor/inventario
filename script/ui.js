export function showMessage(text, type = 'success') {

    const message = document.getElementById('message');
    message.textContent = text;
    message.className = `alert alert-${type} mt-3`;
    message.classList.remove('d-none');

    setTimeout(() => {
    message.classList.add('d-none');
    }, 3000);
}