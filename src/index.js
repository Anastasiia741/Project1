import React from 'react';
import { render } from 'react-dom';

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { random: 0 };
    }

    handleClick() {
        const min = 5;
        const max = 36;
        const n = 5;
        var res = [];
        while (res.length < n) {
            let number = Math.floor(Math.random() * (max - min + 1)) + min;
            if (res.includes(number)) {

            } else {
                res.push(number)
            }
        }
        const listItems = res.map((number) =>
            <div className={"numberItem"} key={number.toString()}>
                {number}
            </div>
        );
        this.setState({ random: listItems });
    }

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Лотерея 5 из 36</h1>
                <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Выбрать числа</button>
                <div className="card" style={{marginTop:"10px"}}>
                    <div className="card-block">Ваши числа:<br/> {this.state.random}</div>
                </div>
            </div>
        );
    }
}

render(<Button />, document.getElementById('root'));
