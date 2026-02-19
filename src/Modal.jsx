import React, { useEffect, useId } from "react";

function Modal({ 
    isOpen, 
    onClose, 
    children, 
    title, 
    overlayClassName,
    contentClassName,
    titleClassName,
    closeButtonClassName,
    closeOnOverlayClick = true, 
    showCloseButton = true, 
    closeOnEsc = true 
}) {
    const titleId = useId();

    // Lock Scroll
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        if (isOpen === true) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = originalOverflow;
        };

    }, [isOpen]);

    // Escape to Close
    useEffect(() => {
        if (!isOpen || !closeOnEsc) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }

    }, [isOpen, closeOnEsc, onClose])

    if (!isOpen) return null; // Nothing to render if modal is close

    return (
        <div className={`hrnet-modal-overlay ${overlayClassName ?? ""}`}  onClick={closeOnOverlayClick ? onClose : undefined} aria-modal="true" role="dialog" aria-labelledby={title ? titleId : undefined}>
            <div className={`hrnet-modal-content ${contentClassName ?? ""}`}  onClick={(e) => e.stopPropagation()}>
                {title && <h2 id={titleId} className={titleClassName}>{title}</h2>}

                {children}

                {showCloseButton && (
                    <button type="button" className={`hrnet-modal-close ${closeButtonClassName ?? ""}`} onClick={onClose}>×</button>
                )}

            </div>
        </div>
    );
}

export default Modal;