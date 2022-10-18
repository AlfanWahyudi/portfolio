import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div className={`overlay ${props.isShowModal ? `overlay--show` : `` }`} onClick={props.close}>
      <div className="card-modal">
        <div className="card-modal--wrapper">
          {props.isShowCloseBtnModal && (
            <button className="btn-close-modal" onClick={props.close}>x</button>
          )}
          <p className="card-modal--message">{props.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
