import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import { connect } from 'react-redux';
import Person from './Person';

class PersonContainer extends Component {
    createCard = personProps =>{
        <Col xs={4}><Person {...personProps} /></Col>
    }

    createRows = rows => (
        <Row key={`${Math.random()}-${Date.now()}`}>
            {rows.map(i => this.createCard(Object.assign(i, {key: i, id})))}
        </Row>
    )

    render(){
        const { data } = this.props;
        const contents = [];
        for (let i = 0; i < data.length; i+=3 ){
            contents.push(data.slice(i, i+3))
        }
        return <Container fluid className='p-4'>{contents.map(i => this.createRows(i))}</Container>
    }
}

const mapStateToProps = state => ({
    data: state.person
})

export default connect(mapStateToProps)(PersonContainer)