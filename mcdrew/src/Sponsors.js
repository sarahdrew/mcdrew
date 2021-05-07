import { Component } from "react";

export default class Sponsors extends Component {
    render() {
        return (
            <>
                <p style={{ border: "1px solid black" }}>SPONSORS</p>
                <div>
                    <img src={require('./assets/sponsor5.png')} alt="troxell" />
                </div>
            </>
        )
    }
}