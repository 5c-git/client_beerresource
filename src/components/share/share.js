import './share.scss';

const shares = document.querySelectorAll('.share');
shares.forEach((share) => {
  // Логика для считывания адресса ссылки
  const copyButton = share.querySelector('.share__link--copy');
  const message = share.querySelector('.share__message');
  const showMessage = () => {
    message.classList.add('share__message--active');
    setTimeout(() => {
      message.classList.remove('share__message--active');
    }, 3000);
  };

  copyButton.onclick = () => {
    const link = window.location.href;
    const textarea = document.createElement('textarea');
    textarea.value = link;
    copyButton.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    showMessage();
  };
});
