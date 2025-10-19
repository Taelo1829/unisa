import React from 'react'

const RenderQuestion = ({ question, type = "", data = [] }) => {
    let content = <></>

    return (
        <div className='question'>
            <div>{question}</div>
            {RenderType(type, data)}
        </div>
    )
}

function RenderType(type, data) {
    if (type === "table")
        return (<>
            {data.map(item => (<div>
                <div>{item.header}</div>
                <div>{item.value}</div>
            </div>))}
        </>)
    if (type === "list")
        return (<>
            {data.map(item => (<div>
                <div>{item}</div>
            </div>))}
        </>)
    if (type === "image")
        return (<>
            <img src={data} alt={data} />
        </>)
}

export default RenderQuestion