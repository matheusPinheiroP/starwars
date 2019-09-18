import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import api from '../services/api';
import './People.css';


class People extends Component {
    state = {
        people: [],
    }

    componentDidMount() {
        this.loadPeople();
    }

    loadPeople = async () => {
        const response = await api.get('/people/');

        this.setState({ people: response.data.results })

        //console.log(response.data.results);
    }

    render() {
        const { people } = this.state;

        return (
            <div className="people">
                <h1>Personagens principais.</h1>

                <div className="people-list">
                    {people.map(people => (
                        <article key={people.name}>
                            <strong>{people.name}</strong>
                            <p>Birth-Year {people.birth_year}</p>

                            <Link to={`/people/${people.name}`}>Veja mais informações</Link>
                        </article>
                    ))}
                </div>
            </div>
        );
    }
}

export default People;

