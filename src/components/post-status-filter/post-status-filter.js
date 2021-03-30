import React, { Component } from "react";

class PostStatusFilter extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return <>
            <button type="button" className="btn btn-info">Все</button>
            <button type="button" className="btn btn-outline-secondary">Понравилось</button></>
    }
}

export default PostStatusFilter;