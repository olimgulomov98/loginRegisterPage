import React, {Component} from "react";
import Login from './Login/Login';
import Register from "./Register/Register";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'login'
        }
    }
    render() {

        const onChange = (page) => {
            this.setState({page})
        }

        return(
            <>
                {this.state.page === 'login' ? <Login onChange={onChange} /> : <Register onChange={onChange} /> }
            </>
        )
    }
}
export default Main