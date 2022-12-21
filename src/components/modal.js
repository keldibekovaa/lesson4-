import React from "react";

function Modal(props){
    return(props.trigger)?(
        <div className="Modal">
            <div className="Modal-inner">
                <button className="close-btn"  onClick={()=>
                    props.setTrigger(false)}>ЗАКРЫТЬ  </button>
                {props.children}
            </div>
        </div>
    ):"";
}

export default Modal;