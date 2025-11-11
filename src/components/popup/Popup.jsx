import React from "react";
import "./Popup.css"; // estilo básico opcional

const Popup = ({ mensagem, tipo = "info", mostrar, onClose }) => {
    if (!mostrar) return null;

    const cores = {
        sucesso: "#4caf50",
        erro: "#f44336",
        aviso: "#ff9800",
        info: "#2196f3"
    };

    if (mostrar) {
        setTimeout(() => {
            onClose();
        }, 2000);
    }
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div
                className="popup-box"
                style={{ borderLeft: `6px solid ${cores[tipo]}` }}
                onClick={(e) => e.stopPropagation()}
            >
                <p>{mensagem}</p>
            </div>
        </div>
    );
};

export default Popup;
