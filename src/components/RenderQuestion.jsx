import React from 'react'

const RenderQuestion = ({ question, type = "", data = [], section }) => {
    question = question.split(".").map((row, key) => {
        let content = <pre key={key}>{row}{key < question.split(".").length - 1 ? "." : ""}</pre>
        return content
    })

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
        return (<div className='pt-10'>
            {data.map((item, index) => (<div key={index}>
                <div>{item}</div>
            </div>))}
        </div>)
    if (type === "image")
        return (<>
            <img src={data} alt={data} width={"100%"} />
        </>)

    if (type === "alternative") {
        return <div className='d-flex justify-content-between'>
            {data.map((opt, index) => {
                return <div key={index}>
                    <div >{opt.header || "."}</div>
                    {opt.value?.map((item, key) => {
                        return <div key={key}>{item}</div>
                    })}
                </div>
            })}
        </div>
    }

}

export default RenderQuestion