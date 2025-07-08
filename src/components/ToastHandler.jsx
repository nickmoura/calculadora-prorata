// src/components/ToastHandler.jsx
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const baseConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export function showToast(message, type = 'success') {
  const toastClass = `animate__animated animate__faster animate__bounceInRight`;

  toast(message, {
    ...baseConfig,
    type,
    className: toastClass,
    onClose: () => {
      const toastEl = document.querySelector('.Toastify__toast--' + type);
      if (toastEl) {
        toastEl.classList.remove('animate__bounceInRight');
        toastEl.classList.add('animate__bounceOutRight');
      }
    }
  });
}
