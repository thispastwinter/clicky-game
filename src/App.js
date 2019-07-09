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
    } else {
      this.resetScore();
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
