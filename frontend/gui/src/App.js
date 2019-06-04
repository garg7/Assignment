// App.js
import React, { Component } from 'react';

class App extends Component {
  state = {
    report: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const report = await res.json();
      this.setState({
        report
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.Day}</h1>
            <span>{item.Comment}</span>
            <span>{item.Salary}</span>
            <span>{item.Expense_categories }</span>
            <span>{item.Credit_Transactions}</span>
            <span>{item.Expenses}</span>

          </div>
        ))}
      </div>
    );
  }
}

export default App;
