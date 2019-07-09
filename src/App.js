import React, { Component } from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';
import { Heading } from 'react-bulma-components';
import { Hero } from 'react-bulma-components';
import { Section } from 'react-bulma-components';
import { Container } from 'react-bulma-components';
import characters from './characters.json'
import ImgContainer from './components/ImageContainer';

class App extends Component {

  state = {
    selectedImages: [],
    characters,
    score: 0,
    topScore: 0
  }

  /* https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array */

  shuffle = () => {
    for (let i = this.state.characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.state.characters[i], this.state.characters[j]] = [this.state.characters[j], this.state.characters[i]];
    }
    this.setState({characters: this.state.characters});
}

  handleIncrement = id => {
    this.updateArray(id)
    this.setState({ score: this.state.score + 1 });
    this.assessScore();
    this.shuffle();
  };

  updateArray = id => {
    let newArray = this.state.selectedImages.slice();
    newArray.push(id);
    this.setState({ selectedImages: newArray })
  }

  assessScore = () => {
    for (let i = 0; i < this.state.selectedImages.length; i++) {
      for (let j = i; j < this.state.selectedImages.length; j++) {
        if (i !== j && this.state.selectedImages[i] === this.state.selectedImages[j]) {
          this.resetScore();
        }
      }
    }
  }

  resetScore = () => {
    this.setState({ topScore: this.state.score, score: 0, selectedImages: [] });
  }

  render() {
    return (
      <div className="App">
        <Hero color="info" className="has-drop-shadow">
          <Hero.Body>
            <Container>
              <Heading id="title">The Office Clicky Game</Heading>
              <Columns>
                <Columns.Column size={6}>Click an image to begin!</Columns.Column>
                <Columns.Column size={6}>Score: {this.state.score} | Top Score: {this.state.topScore}</Columns.Column>
              </Columns>
            </Container>
          </Hero.Body>
        </Hero>
        <Section>
          <Container>
            <Columns>
              {this.state.characters.map(character => (
                <ImgContainer
                  function={() => this.handleIncrement(character.id)}
                  key={character.id}
                  width="175px"
                  alt={character.name}
                  image={character.image}
                />
              ))}
            </Columns>
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
