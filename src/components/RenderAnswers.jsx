import React from 'react'

const RenderAnswers = ({ answer, handleAnswer, options, selected, showAnswer, type }) => {
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
            {(RenderType(type, opt))}
            {opt}
        </div>
    ))
}

function RenderType(type, answer) {
    if (type === "table")
        return <div></div>
}

export default RenderAnswers