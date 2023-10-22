import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 3 },
            { id: 3, value: 0 },
            { id: 4, value: 2 },
        ]
    };

    handleDecrement = (index) => {
        const counters = [...this.state.counters];
        counters[index].value--;

        this.setState({ counters });
    };
    handleIncrement = (index) => {
        const counters = [...this.state.counters];
        counters[index].value++;

        this.setState({ counters });
    };
    handleDelete = (counter) => {
        const counters = this.state.counters.filter(el => el !== counter);

        this.setState({ counters });
    };
    handleReset = () => {
        const counters = this.state.counters.map(el => {
            el.value = 0;
            return el;
        });

        this.setState({ counters });
    };

    render() {
        return (
            <div className='container'>
                <button className="btn btn-primary my-2 row" onClick={this.handleReset}>
                    Reset
                </button>
                {this.state.counters.map((el, index) =>
                    <Counter
                        key={el.id}
                        counter={el}
                        index={index}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                )}
            </div>
        );
    }
}