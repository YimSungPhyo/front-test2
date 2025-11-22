import React, { useEffect } from 'react';


interface boardWriteModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
}

//   <BoardWriteModal open={isOpen}  onClose={closeModal} onSubmit={handleSubmit}/>
const BoardWriteModal = ({open, onClose, onSubmit}: boardWriteModalProps) => {

    //==== hook ===============
    useEffect( () =>{
         console.log("BoardWriteModal-1");
        //open 이 false이면 종료    
        if(!open) return;
       
    } , [open])
    
    console.log("BoardWriteModal-2");
    //open 이 false이면 null리턴
    if(!open) return null;

    return (

        
        <div className="fixed inset-0 z-40 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Modal Content */}

        </div>


    );

}


export default BoardWriteModal;