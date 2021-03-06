import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import { connect } from 'react-redux';
import Person from './Person';
import PersonAPI from '../assets/persons'
class PersonContainer extends Component {

    componentDidMount(){
        PersonAPI.all()
                 .then(persons => 
                    this.props.dispatch({
                        type: 'person/INIT',
                        payload: persons
                    }))
    }
    createCard = personProps => (
        <Col key={`${Math.random()}-${Date.now()}`} xs={4}><Person {...personProps} /></Col>
    )

    createRow = rows => (
        <Row key={`${Math.random()}-${Date.now()}`}>
            {rows.map(i => this.createCard(Object.assign(i, { key: i.id })))}
        </Row>
    )

    render() {
        const { data } = this.props;
        console.log(data)
        const contents = [];
        for(let i = 0; i < data.length; i += 3) {
            contents.push(data.slice(i, i + 3))
            console.log(i)
        }

        return <Container fluid className="p-4">{contents.map(i => this.createRow(i))}</Container>
    }
}

const mapStateToProps = state => ({
    data: state.persons
})

export default connect(mapStateToProps)(PersonContainer)