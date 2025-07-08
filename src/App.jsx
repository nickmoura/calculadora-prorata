// src/App.jsx
import MainPage from './pages/MainPage';
import { ToastContainer } from 'react-toastify';
import PrivacyPopup from "./components/PrivacyPopup";


export default function App() {
  return (
    <>
      <PrivacyPopup />
      <MainPage />
      <ToastContainer />
    </>
  );
}
