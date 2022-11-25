import React from 'react'
import './row.css'

const Row = (props) => {
    const ans = props.ans || [];
    const clearAns = () => {
        sessionStorage.setItem("currentAns", (JSON.stringify([])));
        props.setAns([]);
    }
    return (
        <div>
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
                    {
                        props.stats &&
                        <div className='stats'>
                            <span>CC : {props.stats.cc}</span>
                            <span>CR : {props.stats.cr}</span>
                        </div>
                    }
                </div>
                {
                    props.clear &&
                    <button className='clear-ans'
                        onClick={clearAns}
                    >X</button>
                }
            </div>
        </div>
    )
}

export default Row