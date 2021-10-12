import React from "react";
import axios from "axios";

import Articles from "../components/Article";
import CustomForm from "../components/Form";


class ArticleList extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             articles: [] 
        }
    }
    
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api').then(
            response => this.setState({
                articles: response.data
            })
        )
    }

    render() {
        console.log(this.state.articles)
        return(
            <div>
                <Articles data={this.state.articles} />
                <br />
                <h2>Create An Article</h2>
                <CustomForm requestType="post" article_id={null} buttonText="Create" />
            </div>
        )
    }
}

export default ArticleList