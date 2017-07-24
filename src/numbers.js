import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import db from './index-pouch.js';

function ListItem(props) {
  return <li>{props.value}</li>;
}

class NumberList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                results: {
                  _id: '',
                  title: '',
                  body: '',
                  viewed: false,
                },
                loading: true
            };
    }

      componentDidMount() {
        db.allDocs({
        include_docs: true,
        attachments: true,
        startkey: 'notif',
        endkey: 'notif\ufff0'
      })
        .then(results => this.setState(() => ({ results })))
        .catch(err => console.log(err))  
}


    render() {
        const {title, body} = this.state.results
         console.log("numbers render", this.state.results)
            return (
                <div>
                      <div>
                        <h2>aerwqrt{title}</h2>
                      </div>  
                                     
                </div>
              )}
            }


export default NumberList;
