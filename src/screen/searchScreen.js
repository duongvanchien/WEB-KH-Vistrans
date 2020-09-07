import React, { Component } from 'react';
import '../style/styleSearch.css';

import {Container, Row, Col, Label,Button} from 'reactstrap';
import { Table } from 'reactstrap';
import {Icon} from 'react-icons-kit';
import {plus} from 'react-icons-kit/fa/plus'
import {Link} from 'react-router-dom'
import {share} from 'react-icons-kit/fa/share'
import {connect} from 'react-redux';
import {addCustomer} from '../redux/action/index'

class Search extends Component{
    constructor(){
        super();
        this.state={
            id: "",
            table_1: true,
            table_2: false,
        }
        this.onHandlerChange = this.onHandlerChange.bind(this);
        this.onHandlerSubmit = this.onHandlerSubmit.bind(this);
    }

    onHandlerChange(e){
        this.setState({
            id: e.target.value
        })
    }

    onHandlerSubmit(){
        this.setState({
            id: "",
            table_1: !this.state.table_1
        })
    }

    render(){
        const {customers} = this.props;
        return(
            <div className="search">
                <Container>
                    <Row className="form-search">
                        <Col><Label><strong>Nhập mã đơn hàng: </strong></Label></Col>
                        <Col><span><input type="text" className="text-search" onChange={this.onHandlerChange} value={this.state.id}/></span></Col>
                        <Col>
                            <Button color="primary" className="btn-search" onClick={this.onHandlerSubmit}>Tìm kiếm</Button>
                            <Button color="warning" className="btn-search" style={{marginLeft: "0.3em"}}>Hiển thị tất cả</Button>
                        </Col>
                    </Row>
                    <Row style={{width: "200px"}}>
                        <Col>
                            <Link to="/themdonhang" style={{textDecoration: "none"}} >
                                <Button color="success" className="btn-add"  >
                                    <Icon size="28" icon={plus}/>Thêm đơn hàng
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Danh sách đơn hàng</h3>
                            <Table bordered style={this.state.table_1 ? {display: ""} : {display: "none"}}>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã đơn hàng</th>
                                        <th>Khách hàng</th>
                                        <th>Số điện thoại</th>
                                        <th>Gom hàng</th>
                                        <th>Phí vận chuyển</th>
                                        <th>Trạng thái TĐ</th>
                                        <th>Ngày gửi</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        customers.map((customer,key) => 
                                            <tr>
                                                <th>{key+1}</th>
                                                <th>{customer.id}</th>
                                                <th>{customer.nameK}</th>
                                                <th>{customer.phone}</th>
                                                <th>{customer.nameG}</th>
                                                <th>{customer.cost}</th>
                                                <th>{customer.status}</th>
                                                <th>{customer.date}</th>
                                                <th><Link><Icon style={{color: "blue"}} icon={share}/></Link></th>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    customers: state.customers
})

const mapDispatchToProps = {
   addCustomer
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);