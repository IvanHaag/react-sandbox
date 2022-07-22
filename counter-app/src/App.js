import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last: 2,
      counters: [{ id: 1, value: 0 }],
    };
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleAdd = () => {
    const counters = this.state.counters.concat({
      id: this.state.last,
      value: 0,
    });
    const last = this.state.last + 1;
    this.setState({ counters, last });
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment className="background">
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="background">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
          <button
            className=" btn btn-secondary btn-sm m-4"
            onClick={() => this.handleAdd()}
          >
            Add Element
          </button>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
