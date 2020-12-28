import React from 'react'

const FormSwitch = props => {
    return (
        <div className="form-switch" ref={props.containerRef} onClick={props.switchForm}>
            <div>
                <div>{props.current}</div>
            </div>
        </div>
    )
}

export default FormSwitch
