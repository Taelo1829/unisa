import React from 'react'

const RenderQuestion = ({ question, type = "", data = [], section }) => {
    question = question.split(".").map((row, key) => <div key={key}>{row}</div>)

    return (
        <div className='question'>
            {!Boolean(section) && <div className='error'> UPDATE SECTION</div>}
            <div>{question}</div>
            {RenderType(type, data)}
        </div>
    )
}

function RenderType(type, data) {
    if (type === "table")
        return (<>
            {data.map((item, index) => (<div className='table' key={index}>
                <div>{item.header}</div>
                <div>{item.value}</div>
            </div>))}
        </>)
    if (type === "list")
        return (<>
            {data.map((item, index) => (<div key={index}>
                <div>{item}</div>
            </div>))}
        </>)
    if (type === "image")
        return (<>
            <img src={data} alt={data} />
        </>)
}

export default RenderQuestion