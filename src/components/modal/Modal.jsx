import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div
      className={`overlay ${props.isShowModal ? `overlay--show` : ``}`}
      onClick={props.isShowCloseBtnModal ? () => props.onClose(true) : () => props.onClose(false)}
    >
      <div className="card-modal">
        <div className="card-modal--wrapper">
          {props.isShowCloseBtnModal && (
            <button className="btn-close-modal" onClick={() => props.onClose(true)}>
              x
            </button>
          )}
          <p className="card-modal--message">{props.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
