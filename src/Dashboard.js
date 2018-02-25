
import React from "react";

import axios from "axios"
 
// 3 types of Components


    // Functional Component
    const Header = (props) => {

        // AJAX Request
        // NO STATE
        // NO Functions

        // props.user
        // props.submit

        // JSX
        return(
            <div>
                <p>Username: { props.user.username }</p>
                <p>Age: {props.user.age}</p>
                <ul>
                    <li>About</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>

                <button onClick = {props.submit}>Click me</button>
            </div>
        );
    };


    const Footer = (props) => {

        return(
            <div>
                <p>Footer</p>

                <p>Username: {props.user.username}</p>
            </div>
        );
    };


    // Class Component v16.0.2
    class App extends React.Component{

        constructor(){
            super();

            this.state = {
                username:"accimeesterlin",
                age: 5,
                address: "8909 Terrace Drive"
            };
        }

        submit = () => {
            // TODO

            this.setState({ age: 10, username: "Patrick Raymond" }); // change data inside our state
            console.log("Hello World!!");
        };

        getData = async () => {
            // TODO
            
            // return data;

            let data = [];


            data = await axios.get("https://jsonplaceholder.typicode.com/posts");

            // axios.get("https://jsonplaceholder.typicode.com/posts")
            //     .then((response) => {

            //         data = response.data

            //         console.log("Response: ", data);
                    
            //     })
            //     .catch((err) => {
            //         console.log("Error: ", err.response.data);
            //     });


            console.log("Data shoule not be empty: ", data.data);   

        };

        componentDidMount = () => {
            // TODO
            // Ajax request here
            console.log("#3 Component Did Mount waiting for Render to execute");
            
            
        };

        componentWillMount = () => {
            // TODO
            // async await
            console.log("#1 Before the Render");
            this.getData();
        };


        render(){
            
            console.log("#2 Render");
            // JSX
            return (
                <div>
                    <h1>I am the Dashboard</h1>

                    <Header user = {this.state} submit = {this.submit}/>

                    <Footer user = {this.state}/>
                </div>
            )
        }

    }


    // Higher order Component (Advanced)
    const MainApp = () => {

        return class SubComponent extends React.Component{

        }
    }


// Props
    // Send data from one component to another component    
export default App;    




// React lifecyles
    // componentDidMount
    // componentWillMount
    // componentWillReceiveProps
    // componentWillUpdate
    // componentDidUpdate
    // shouldComponentUpdate



// Promise

