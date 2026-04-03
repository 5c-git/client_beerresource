import './contacts.scss';

const copy = document.querySelector('.contacts__nav-link--copy');
if (copy) {
  const message = copy.nextElementSibling;
  const showMessage = () => {
    message.classList.add('contacts__message--active');
    setTimeout(() => {
      message.classList.remove('contacts__message--active');
    }, 3000);
  };

  // Логика для считывания адресса ссылки
  copy.onclick = () => {
    // const { link } = copy.dataset;
    const link = window.location.href;
    const textarea = document.createElement('textarea');
    textarea.value = link;
    copy.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    showMessage();
  };
}
