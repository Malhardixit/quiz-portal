/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({
  isOpen, onClose, size, unmountOnClose, children, hasBackdrop, btnSize,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen && unmountOnClose) return null;

  const getModalSizeClass = () => {
    switch (size) {
      case 'small':
        return 'modal-small';
      case 'large':
        return 'modal-large';
      case 'extra-large':
        return 'modal-extra-large';
      default:
        return 'modal-small'; // Default size if invalid size is provided
    }
  };

  const getCloseButtonSizeClass = () => {
    switch (btnSize) {
      case 'small':
        return 'small-btn';
      case 'large':
        return 'large-btn';
      default:
        return 'small-btn'; // Default size if invalid size is provided
    }
  };

  const closeButtonSize = getCloseButtonSizeClass(btnSize);

  const modalSizeClass = getModalSizeClass(size);

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      {hasBackdrop && <div className="modal-backdrop" onClick={onClose} />}
      <div className={`modal-content ${modalSizeClass}`}>
        <button
          type="button"
          className={`close-button ${closeButtonSize}`}
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'large', 'extra-large']),
  unmountOnClose: PropTypes.bool,
  hasBackdrop: PropTypes.bool, // Added backdrop prop type
  children: PropTypes.node.isRequired,
  btnSize: PropTypes.oneOf(['small', 'large']),
};

Modal.defaultProps = {
  size: 'small',
  unmountOnClose: false,
  hasBackdrop: false, // Set backdrop to true by default
  btnSize: 'small',
};

export default Modal;
