import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        const { counter, onDelete, onIncrement, onDecrement, index } = this.props;

        return (
            <div className='row align-items-center'>
                <button
                    onClick={() => onDecrement(index)}
                    className={`btn btn-secondary mr-2`}
                    disabled={counter.value === 0}
                >
                    Decrement (-)
                </button>
                <span
                    className={`badge m-2 p-2 ${counter.value === 0 ? 'badge-warning' : 'badge-primary'}`}
                    style={{ fontSize: 18 }}
                >
                    {counter.value === 0 ? 'zero' : counter.value}
                </span>
                <button
                    onClick={() => onIncrement(index)}
                    className='btn btn-secondary ml-2'
                >
                    Increment (+)
                </button>
                <button
                    onClick={() => onDelete(counter)}
                    className="btn btn-danger btn-sm ml-2"
                >
                    Delete
                </button>
            </div>
        )
    }
}
