import React, { Component } from 'react';
import db from './index-pouch.js';

class Recipes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            doc: {
                _id: '',
                title: '',
                body: '',
                viewed: false,
            },
        }
    }

    componentDidMount() {
        db.get('notif_1')
            .then(doc => this.setState(() => ({ doc })))
            .catch(err => console.log(err))
    }

    render() {
        const {title, body} = this.state.doc
         console.log("recipes render", this.state.doc)
        return (
            <div className='recipes'>
                <h1> Notifications</h1>

                <section>
                    <h2>Click to mark as unread</h2>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th> <span>{title}  </span> | {body}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </section>
            </div>
        )
    }
}

export default Recipes



