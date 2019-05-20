import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button} from 'react-bootstrap';

import history from "../../history";
//import {del, fetchAll as fetchToDos} from "../../actions/todos";

export default class Question extends Component {
    
    async onDelete(){
        console.log("Borraria...");
    }

    onSelectItem(){
        console.log("PAra modificacion...");
        history.push("/main/question/update/" + this.props.item.id);
    }

    render(){
        return (
        
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{this.props.item.question_text} </h6>
                        <Button onClick={this.onDelete.bind(this)} bsStyle='danger'>Borrar</Button>
                        <Button onClick={this.onSelectItem.bind(this)}>Modificar</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
    


}
