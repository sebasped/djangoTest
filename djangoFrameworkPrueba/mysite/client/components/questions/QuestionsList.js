import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Question from './Question';
import {fetchAll, del} from '../../services/Questions';

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
    

    refresh(){
        this.loadData();
    }

    async loadData(){
        var items = await fetchAll();
        this.setState({
            items: items,
            loaded: true,
        });
    }

    render(){
        var me = this;
        if (!this.state.loaded){
            return (
                <div>
                    Falta cargar la informacion....
                </div>
            );    
        } else {
            var itemsDOM = this.state.items.map(function(item){
                return (
                    <Question key={item.id} item={item} refresh={me.refresh.bind(me)}/>
                );
            });
            return (
                <Grid>
                <Row style={{marginTop:'15px'}}>
                    <Col xs={12}>
                        Questions
                        <div className="pull-right">
                            <Link to="/main/question/create" className="btn btn-xs btn-primary" role="button">Nueva Question</Link>
                        </div>
                        {itemsDOM}
                    </Col>
                </Row>
            </Grid>
            ) ;         

        }
    }
    
}

