// Show a hidden message on button click
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.reveal-button');
    const hiddenMessage = document.querySelector('.hidden-message');

    button.addEventListener('click', () => {
        hiddenMessage.classList.toggle('show');
        button.textContent = hiddenMessage.classList.contains('show') ? "Hide Your Message" : "Reveal Your Message";
    });
});
