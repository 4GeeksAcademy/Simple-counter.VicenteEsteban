import React from "react";

const ButtonsCounter = ({onStart, onStop, onReset, isDisabled}) => {
    return(
        <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary m-2 rounded-circle" onClick={onStart} disabled={isDisabled}>
                Iniciar
            </button>
            <button className="btn btn-danger m-2 rounded-circle" onClick={onStop}>
                Parar
            </button>
            <button className="btn btn-secondary m-2 rounded-circle" onClick={onReset}>
                Resetear
            </button>
        </div>
    );
};

export default ButtonsCounter;