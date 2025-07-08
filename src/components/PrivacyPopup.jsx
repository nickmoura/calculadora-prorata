import { useState, useEffect } from "react";

export default function PrivacyPopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Exibe o popup assim que a página carrega
        setShow(true);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)] flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md mx-4 text-center shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Aviso Importante</h2>
                <p className="text-gray-700 mb-6">
                    Esta página é apenas uma calculadora. Não coletamos, armazenamos ou
                    compartilhamos quaisquer dados inseridos.
                </p>
                <button
                    onClick={() => setShow(false)}
                    className="px-4 py-2 bg-indigo-600 text-white hover:cursor-pointer rounded hover:bg-indigo-700 transition"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
}
