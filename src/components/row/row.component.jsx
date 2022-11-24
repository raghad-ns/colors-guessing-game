import React from 'react'
import './row.css'

const Row = (props) => {
    const ans = props.ans || [];
    return (
        <div className="row">
            <div className='color-row'>
                {ans.length >= 1
                    ? <button className='hidden' style={{ backgroundColor: ans[0] }}></button>
                    : <button className='hidden' style={{ backgroundColor: '#999' }}></button>
                }
                {ans.length >= 2
                    ? <button className='hidden' style={{ backgroundColor: ans[1] }}></button>
                    : <button className='hidden' style={{ backgroundColor: '#999' }}></button>
                }
                {ans.length >= 3
                    ? <button className='hidden' style={{ backgroundColor: ans[2] }}></button>
                    : <button className='hidden' style={{ backgroundColor: '#999' }}></button>
                }
                {ans.length >= 4
                    ? <button className='hidden' style={{ backgroundColor: ans[3] }}></button>
                    : <button className='hidden' style={{ backgroundColor: '#999' }}></button>
                }
            </div>
            <button className='clear-ans'
            onClick={props.setAns ([]) }
            >X</button>
        </div>
    )
}

export default Row