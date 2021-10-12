import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';


const FormItem = Form.Item;

class CustomForm extends React.Component {

    constructor(props) {
        super(props)
    }

    handleFormSubmit = (event, requestType, article_id) => {
        console.log("Form Submitted");
        // event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                }).then(response => console.log(response)).catch(error => console.error(error)); 
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${article_id}/`, {
                    title: title,
                    content: content
                }).then(response => console.log(response)).catch(error => console.error(error));
        }
    }

    render () {
        return (
            <div>
                <Form onSubmitCapture={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.article_id)}>
                    <FormItem label="Title">
                        <Input name="title" placeholder="Enter article title here" />
                    </FormItem>
                    <FormItem label="Content">
                        <Input.TextArea name="content" placeholder="Enter article content here" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">{this.props.buttonText}</Button>
                    </FormItem> 
                </Form>
            </div>
        );
    }
}

export default CustomForm