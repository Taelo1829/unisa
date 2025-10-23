import React from 'react'

const RenderAnswers = ({ answer, data, handleAnswer, options, selected, showAnswer, type }) => {
    return options.map((opt, idx) => (
        <div key={idx}
            onClick={() => handleAnswer(opt)}
            disabled={showAnswer}
            className='answer'
            style={{
                backgroundColor: showAnswer ?
                    opt === answer ? 'green' :
                        opt === selected ? 'red' : '' : '',
                color: showAnswer && (opt === answer || opt === selected) ? "#fff" : ''
            }}>
            {(RenderType(type, data, opt))}
        </div>
    ))
}

function RenderType(type, data = [], opt) {
    if (type === "table") {
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
    return opt

}

export default RenderAnswers