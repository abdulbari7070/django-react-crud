import React from "react";
import axios from "axios";
import { Button,Card } from 'antd';
import CustomForm from "../components/Form";

class ArticleDetail extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             article: {}
        }
    }
    
    componentDidMount() {
        const article_id = this.props.match.params.article_id;
        axios.get(`http://127.0.0.1:8000/api/${article_id}`).then(
            response => this.setState({
                article: response.data
            })
        );
    }

    handleDelete = (event) => {
        const article_id = this.props.match.params.article_id;
        axios.delete(`http://127.0.0.1:8000/api/${article_id}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render() {
        console.log(this.state.articles)
        return(
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content} </p>
                </Card>
                <br />
                <CustomForm requestType="put" article_id={this.props.match.params.article_id} buttonText="Update" />
                <form onSubmitCapture={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
            
        )
    }
}

export default ArticleDetail;