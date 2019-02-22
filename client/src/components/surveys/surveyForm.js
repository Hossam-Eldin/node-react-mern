//survey form is the compnent
import _ from 'lodash'
import React,{Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import suveryField from './surveyField';

const FIELDS = [
    {label:'survey Title' , name:'title'},
    {label:'survey Subject' , name:'subject'},
    {label:'survey Body' , name:'body'},
    {label:'survey Emails' , name:'emails'},
]

class surveyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    renderFields(){
         return _.map(FIELDS, field =>{
                return <Field key={field.name} component={suveryField} type="text" name={field.name} label={field.label} />
         })
    }
    render() {
        return (
                <div>
                    surveyForm
                    <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                        {this.renderFields()}
                        <button type="submit" className="btn">submit</button>  
                    </form>
                    
                </div>
        );
    }
}

export default reduxForm({
    form:'surveyForm'
})(surveyForm);