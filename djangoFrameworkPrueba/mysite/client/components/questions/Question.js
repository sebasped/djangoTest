import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button} from 'react-bootstrap';

import history from "../../history";
import {del} from '../../services/Questions';

export default class Question extends Component {
    
    async onDelete(){
        del(this.props.item.id);
        //history.push("/main/questions/"); // No anda.
        this.props.refresh();
    }

    onSelectItem(){
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
