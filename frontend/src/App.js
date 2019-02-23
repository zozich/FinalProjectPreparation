import React, {Component} from 'react';
import './App.css';
import Loader from "./components/Loader/Loader";

class App extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        fetch('/api/users/current')
            .then(res => res.json())
            .then(user => this.setState({user}))
    }

    render() {
        const {user} = this.state

        if (!user) {
            return <Loader/>
        }

        return (
            <div className="App">
                <h1>{user.name}</h1>
                <h1>{user.surname}</h1>
            </div>
        );
    }
}

export default App;
