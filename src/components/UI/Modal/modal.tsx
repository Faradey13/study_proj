import React, {FC, ReactHTMLElement, ReactNode, SetStateAction} from 'react';
import cl from './modal.module.css'

export interface ModalProps {
    visible: boolean;
    setVisible: React.Dispatch<SetStateAction<boolean>>
    children: ReactNode

}


const Modal:FC<ModalProps> = ({visible, setVisible,children}) => {

    const rootStyles = [cl.modal]

    if (visible) {
        rootStyles.push(cl.active)
    }

    return (
        <div onClick={() => setVisible(false)} className={rootStyles.join(' ')}>
            <div className={cl.modal__content} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>


        </div>
    );
};

export default Modal;