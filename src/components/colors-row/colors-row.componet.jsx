import React from 'react'
import './color-row.css'

const ColorRow = (props) => {
    console.log('initial', props.ans);
    const ans = props.ans || [];

    return (
        <div className="choices-wrapper">
            <div className='color-row'>
                {
                    props.colors.map((color, idx) =>
                        <button
                            style={{ backgroundColor: color }} key={color + idx}
                            onClick={() => {
                                const newAns = [...ans, color];
                                props.handelClick(newAns)
                            }}
                        ></button>)
                }
            </div>
        </div>
    )

}

export default ColorRow
