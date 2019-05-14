import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//import ToDo from './ToDo';
//import { fetchAll as fetchToDos} from '../../actions/todos';

export default class QuestionsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            loaded: false,
        };
    }


    componentDidMount(){
        this.loadData();
    }
    
    loadData(){
        this.setState({
            items: [
                    {
                    question_text: "Cual es la respuesta a la pregunta fundamental del universo, la vida?"
                },
                {
                    question_text: "De donde venimos?"
                },
            ],
            loaded: true,
        });
    }

    render(){
        if (!this.state.loaded){
            return (
                <div>
                    Falta cargar la informacion....
                </div>
            );    
        } else {
            var textos = this.state.items.map(function(item){
                return (
                    <div>
                        {item.question_text}
                    </div>
                );
            });
            return (
                <div>
                    {textos}
                </div>
            );
        }
        /*
        return (
            <Grid>
                <Row style={{marginTop:'15px'}}>
                    <Col xs={12}>
                        ToDos
                        <div className="pull-right">
                            <Link to="/main/todos/create" className="btn btn-xs btn-primary" role="button">Nuevo ToDo</Link>
                        </div>
                        {items.map(item => (
                            <ToDo key={item.id} item={item} />
                        ))}
                    </Col>
                </Row>
            </Grid>

        );
        */
    }
    
}

