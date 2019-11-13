import React, { useState, useEffect } from "react";
import M from "materialize-css";
function Modal({ trigger, children, header = "Header", modal }) {
  useEffect(() => {
    const elem = document.querySelector(".modal");
    const modalInstance = M.Modal.init(elem);
    modal.setModal(modalInstance);
  }, []);

  const setTrigger = () => {
    return trigger ? (
      React.createElement(
        React.Fragment,
        null,
        React.cloneElement(trigger, {
          onClick: () => {
            modal.instance.open();
          }
        })
      )
    ) : (
      <a class="waves-effect waves-light btn modal-trigger" href="#modal1">
        Modal
      </a>
    );
  };

  const setFooter = () => {
    switch (typeof footer) {
      case "string":
        return (
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            {footer}
          </a>
        );
      case "object":
        return React.createElement(
          React.Fragment,
          null,

          React.cloneElement(footer, {
            onClick: () => {
              modal.instance.close();
            }
          })
        );
      default:
        return;
    }
  };

  return (
    <>
      {/* Modal Trigger
          Creates the passed in trigger with an onClick attribute for opening the modal
          */}
      {setTrigger()}

      {/* <!-- Modal Structure --> */}
      <div className="modal">
        <div className="modal-content">
          <h4>{header}</h4>
          {children}
        </div>
        <div className="modal-footer">{setFooter()}</div>
      </div>
    </>
  );
}

export default Modal;
