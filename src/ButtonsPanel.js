import React from 'react'

const ButtonsPanel = props => {
    return (
        <div className="buttons-panel">
            <button onClick={()=>props.updateCounter(true)}>Add 1</button>
            <button onClick={()=>props.updateCounter(false)}> Substract 1</button>
            <button onClick={()=>props.resetCounter(true)}>Reset</button>
            <button onClick={()=>props.resetCounter(false)}>Set 0</button>
        </div>
    )
}

export default ButtonsPanel;

