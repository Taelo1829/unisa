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
            {(RenderType(type, data))}
            {opt}
        </div>
    ))
}

function RenderType(type, data = []) {
    if (type === "table")
        return data.map((opt, index) => {
            return <div>{opt.header}</div>
        })
}

export default RenderAnswers