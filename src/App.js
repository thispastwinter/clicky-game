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
    topScore: 0,
    winner: ''
  }

  shuffle = () => {
    // https://css-tricks.com/snippets/javascript/shuffle-array/
    this.setState({ characters: characters.sort(function () { return 0.5 - Math.random() }) });
  }

  handleEvent = id => {
    this.updateArray(id)
    this.shuffle();
  };

  updateArray = id => {
    let newArray = this.state.selectedImages.slice();
    if (this.state.selectedImages.includes(id) === false) {
      newArray.push(id)
      this.setState({ selectedImages: newArray })
      this.setState({ score: this.state.score + 1 });
      this.checkForWin();
    } else {
      this.setState({ winner: 'You Guessed Incorrectly!'})
      this.resetScore();
    }
  }

  checkForWin = () => {
    if (this.state.score >= 11) {
      this.setState({ winner: 'You\'re a winner!' });
      this.setState({ topScore: 0, score: 0 });
    } else {
      this.setState({ winner: 'You Guessed Correctly!'});
    }
  }

  resetScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score, score: 0, selectedImages: [] });
    }
    this.setState({ score: 0, selectedImages: [] });
  }

  render() {
    return (
      <div className="App">
        <Hero color="info" className="has-drop-shadow">
          <Hero.Body>
            <Container>
              <Heading id="title">The Office Clicky Game</Heading>
              <Columns id="results">
                <Columns.Column size={4}>Click an image to begin!</Columns.Column>
                <Columns.Column size={4}>{this.state.winner}</Columns.Column>
                <Columns.Column size={4}>Score: {this.state.score} | Top Score: {this.state.topScore}</Columns.Column>
              </Columns>
            </Container>
          </Hero.Body>
        </Hero>
        <Section>
          <Container id="main">
            <Columns>
              {this.state.characters.map(character => (
                <ImgContainer
                  function={() => this.handleEvent(character.id)}
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
