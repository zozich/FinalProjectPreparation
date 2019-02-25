import React, {Component} from 'react';
import './App.css';
import Loader from "./components/Loader/Loader";
import {connect} from "react-redux";
import {getCurrentUser, getUser, saveUser} from "./actions/userActions";

class App extends Component {
    // To have controlled inputs
    state = {
        name: 'ss',
        surname: 'dd',
        password: 'ssasd'
    }

    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        const {userStatus} = this.props
        const {name, surname, password} = this.state

        if (userStatus.userLoading) {
            return <Loader/>
        }

        const user = userStatus.user

        return (
            <div className="App">
                <h1>{user.name}</h1>
                <h1>{user.surname}</h1>
                <div>
                    <div>
                        <label>Name
                            {/*<input type='text' value={name} onChange={(e) => this.setState({name: e.target.value})}/>*/}
                            <input type='text' ref={(input) => this.name = input}/>
                        </label>
                    </div>
                    <div>
                        <label>Surname
                            <input type='text' ref={(input) => this.surname = input}/>
                        </label>
                    </div>
                    <div>
                        <label>Password
                            <input type='text' ref={(input) => this.password = input}/>
                        </label>
                    </div>
                    <button onClick={this.saveUser}>Save user</button>
                </div>
            </div>
        );
    }

    saveUser = () => {
        // const user = {
        //     name: this.state.name,
        //     ...
        // }

        const user = {
            name: this.name.value,
            surname: this.surname.value,
            password: this.password.value
        }

        this.props.saveUserThunk(user, this.props.loading)
    }
}

const mapStoreToProps = ({userStatus, loading}) => {
    return {
        userStatus,
        loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentUser: () => dispatch(getCurrentUser()),
        saveUser: (user) => dispatch(getUser(user)),
        saveUserThunk: (user, loading) => dispatch(saveUser(user, loading))
    }
}

// const mergeProps = (store, {dispatch}) {
//     return {
//         saveUserThunk: (user) => dispatch(saveUser(user, store.loading))
//     }
// }

export default connect(mapStoreToProps, mapDispatchToProps)(App);
