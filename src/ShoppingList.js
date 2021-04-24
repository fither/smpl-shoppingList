import React, { Component } from 'react'
import { Container, Button, Input, Row, Col, Table } from 'reactstrap';

export default class ShoppingList extends Component {
    state = {
        shoppingList: []
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h3>Shopping List</h3>
                    </Row>
                    <Row>
                        <Col xs="9">
                            <Input 
                             type="text"
                             id="shoppingItemName" 
                             value={this.props.inputValue}
                             onChange={this.props.changeInputValue}/>
                        </Col>
                        <Col xs="3">
                            <Button 
                                color="info"
                                onClick={() => this.props.addToList()}
                            >Ekle</Button>
                        </Col>
                    </Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>İsim</th>
                                <th>Adet</th>
                                <th>Eylem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.shoppingList.filter(item => item.quantity > 0).map(item => (
                                    <tr key={item.id}>
                                        <th>{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <Button
                                                color="danger"
                                                onClick={() => this.props.deleteFromList(item)}
                                            >Sil</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}
