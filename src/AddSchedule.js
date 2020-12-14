import React, {useState} from "react";
import {Form,Input,TimePicker, Row, Col, Button} from 'antd';
import {connect} from "react-redux";
import {Container} from './styled';
import {useRouter} from 'router-util'

function AddSchedule({addSchedule}){
    const router = useRouter()


    const onFinish = values => {
        addSchedule(values)
        router.push('/list')
    }

    const onFail = error => {
        console.log(error)
    }

    return(
        <Container>
            <Row>
                <Col span={12}>
                    <h1>Add schedule</h1>
                    <Form 
                        onFinish={onFinish} 
                        onFinishFailed={onFail}
                        name="mainForm"
                        layout="vertical"
                    >
                        <Form.Item
                            name="title"
                            label="Title"
                            rules={[{required:true,message:"Please enter the title"}]}
                        >
                            <Input/>
                            
                        </Form.Item> 
                        <Form.Item
                            name="time"
                            label="Time"
                        >
                            <TimePicker.RangePicker />
                            
                        </Form.Item>

                        <Form.Item name="description" label="Description">
                            <Input.TextArea/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
           
        </Container>
    )
}



const mapDispatchToProps = dispatch => (
    {
        addSchedule: schedule => dispatch({type:"ADD_ITEM",payload:schedule})
    }
)

export default connect(null, mapDispatchToProps)(AddSchedule);