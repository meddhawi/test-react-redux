import React, {Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Row, Col } from 'react-bootstrap'

const Person = ({name, address, phoneNumber}) => {
    <Card className='container-fluid p-4 text-center'>
        {/* <Card.Img variant='top' src={photo}/> */}
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <Row className='my-2'>
                    <Col>{address}, {phoneNumber}</Col>
                </Row>
            </Card.Text>
            <Button variant='danger'>Remove</Button>
        </Card.Body>
    </Card>
}

export default Person




// class Person extends Component{
//     componentDidMount(){
//         console.log('Data dari Redux Store')
//         console.log('Data: ', this.props.data)
//     }

//     render(){
//         const {children} = this.props
//         return(
//             <div className='container'>{children}</div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     data: state.person
// })

// export default connect(mapStateToProps)(Person)