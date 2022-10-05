import React, {Component} from "react";
import './index.css';
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Recommended from "./Recommended";
import Choose from "./Choose";
import Category from "./Category";

class Main extends Component {
    
    render() {
        return(
            <div className="container">
                <Navbar />
                <Header />
                <Recommended />
                <Choose />
                <Category />
            </div>
        )
    }
}
export default Main