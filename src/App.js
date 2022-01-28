import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {

    state = {
        animalentry : []
    }

    componentDidMount() {
        this.fetchAnimal();
    }

    fetchAnimal = () => {
        axios.get("https://zoo-animal-api.herokuapp.com/animals/rand")
        .then((response) => {
            const animalentry = response.data;
            this.setState({ animalentry });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        var animalentry = this.state.animalentry;
        
        if (typeof animalentry === 'object') {
            // do nothing...
        } else {
            var animalentry = JSON.parse(animalentry);
        }

        return(
            <div className="app">
                <div className="site-title">
                    <h1>The Pocket Zoo</h1>
                    <div className="title">
                        <h1>{animalentry.name}</h1>
                        <h2>Scientific name: <i>{animalentry.latin_name}</i></h2>
                            <div className="pic">
                                <img id="photo" src={animalentry.image_link} class="responsive"></img>
                            </div>
                            <button className="button" onClick={this.fetchAnimal}>
                                <span>Next Animal</span>
                            </button>
                            <h3>All about me</h3>
                            <div className="facts">
                                <ul>
                                    <li>Group&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; : {animalentry.animal_type}</li>
                                    <li>Max length&emsp;&emsp;&ensp;&nbsp;&nbsp;: {animalentry.length_max} ft.</li>
                                    <li>Max weight&emsp;&emsp;&ensp;&ensp;: {animalentry.weight_max} lbs.</li>
                                    <li>Lifespan&emsp;&emsp;&emsp;&emsp;&nbsp;: {animalentry.lifespan} years</li>
                                    <li>Habitat&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;: {animalentry.habitat}</li>
                                    <li>Diet&nbsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;: {animalentry.diet}</li>
                                    <li>Range&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;: {animalentry.geo_range}</li>
                                </ul>
                            </div>
                </div>
                </div>
            </div>
        )
    }
}

export default App;