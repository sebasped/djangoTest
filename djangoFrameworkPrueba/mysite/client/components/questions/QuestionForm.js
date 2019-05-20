import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button, FormGroup, ControlLabel, FormControl, Panel} from 'react-bootstrap';
import history from "../../history";
import $ from 'jquery';

import {fetch, create, update} from '../../services/Questions';

class QuestionForm extends Component {

    constructor(props){
        super(props);
        var id = null;
        if (props.match.params.id){
            id = props.match.params.id;
        }
        this.state = {
            id : id,
        };
    }

    async componentDidMount(){
        if (this.state.id){
            var item = await fetch(this.state.id);
            console.log("Item recibido: ", item);
            $("#text").val(item.question_text);
        }
    }

    async onSubmit(e){
        e.preventDefault();
        
        if (!this.state.id){
            await create({
                question_text: $("#text").val(),
            });    
        } else {
            await update(this.state.id,{
                question_text: $("#text").val(),
            });
        }
        
        console.log("Submiteando...");
        history.push("/main/questions");
    }

    onCancel(e){
        history.push("/main/questions");
    }


    render(){
        return (
            <Well>
                <Panel header="Questions">
                    <FormGroup controlId="text">
                        <ControlLabel>Text </ControlLabel>
                        <FormControl
                            type="text"
                            placeholder ="Enter Text..."
                            id = "text"
                            ref="text" 
                        />
                    </FormGroup>
                    <Button onClick={this.onSubmit.bind(this)} bsStyle="primary">Save</Button>
                    <Button onClick={this.onCancel.bind(this)} bsStyle="primary">Cancel</Button>
            
                </Panel>
            </Well>

        )
        

    }

}


export default QuestionForm;

