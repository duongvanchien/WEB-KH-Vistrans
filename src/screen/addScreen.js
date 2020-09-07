import React, { Component } from 'react';
import {Container, Col, Row} from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import {Icon} from 'react-icons-kit';
import {image} from 'react-icons-kit/fa/image'

import '../style/styleAdd.css';


export default class Add extends Component{
    render(){
        return(
            <div className="add">
                <Container>
                    <Row>
                        <Col md="6">
                            <h4>Thông tin người gửi</h4>
                            <Form>
                                <FormGroup>
                                    <Input type="text" placeholder="Họ và tên*"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" placeholder="Số điện thoại*"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="textarea" placeholder="Địa chỉ"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" placeholder="Địa chỉ cụ thể"/>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md="6">
                            <h4>Thông tin người nhận</h4>
                            <Form>
                                <FormGroup>
                                    <Input type="text" placeholder="Họ và tên*"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" placeholder="Số điện thoại*"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="textarea" placeholder="Địa chỉ"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" placeholder="Địa chỉ cụ thể"/>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <h4>Thông tin đơn hàng</h4>
                    </Row>
                    <Row>
                        <Col md="6">   
                            <FormGroup row>
                                <Label md="4">Hình thức thanh toán</Label>
                                <Col md="8" style={{marginTop: "0.5em"}}>
                                    <Label check>
                                        <Input type="radio" name="radio1" />
                                        Trả trước
                                    </Label>
                                    &emsp;&emsp;
                                    <Label check>
                                        <Input type="radio" name="radio1" />
                                        Trả sau
                                    </Label>
                                    &emsp;&emsp;
                                    <Label check>
                                        <Input type="checkbox" color="primary"/>
                                        Thu hộ
                                    </Label>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={3}>Số tiền thu hộ</Label>
                                <Col md={9}>
                                    <Input type="number" min="1000000" max="1000000000" placeholder="Số tiền..."/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={3}>Cân nặng</Label>
                                <Col md={9}>
                                    <Input type="text" placeholder="Cân nặng..."/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={3}>Giá trị đơn hàng</Label>
                                <Col md={9} style={{marginTop: "0.8em"}}>
                                    <Input type="text" placeholder="Giá trị..."/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={3}>Chi phí dự kiến</Label>
                                <Col md={9}>
                                    <Input type="text" placeholder="Chi phí..."/>
                                </Col>
                            </FormGroup>
                            <Label check style={{color: "red",fontSize:"1.5em",fontWeight: "600"}}>
                                <Input type="checkbox" id="checkbox2" style={{marginTop: "0.5em"}}/>
                                Hàng dễ vỡ
                            </Label>
                        </Col>
                        <Col md="6">
                            <Row>
                                <Input type="textarea" placeholder="Đơn hàng sẽ bao gồm laptop, nước hoa, điện thoại, mỹ phẩm...." className="des" style={{height: "6em",marginBottom: "1em"}}/>
                            </Row>
                            <Row>
                                <Input type="textarea" placeholder="Đơn hàng sẽ bao gồm laptop, nước hoa, điện thoại, mỹ phẩm...." className="des" style={{height: "6em",marginBottom: "1em"}}/>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <span>Chọn hình ảnh</span>
                                    &nbsp;
                                    <Icon size="32" icon={image}/>
                                </Col>
                                <Col md="6"><Input type="file"/></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}