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
    characters,
    score: 0,
    topScore: 0
  };

  render() {
    return (
      <div className="App">
        <Section>
          <Hero color="info">
            <Hero.Body>
              <Container>
                <Heading>The Office Clicky Game</Heading>
                <Columns>
                  <Columns.Column size={6}>Click an image to begin!</Columns.Column>
                  <Columns.Column size={6}>Score: {this.state.score} | Top Score: {this.state.topScore}</Columns.Column>
                </Columns>
              </Container>
            </Hero.Body>
          </Hero>
        </Section>
        <Section>
          <Container>
            <Columns>
              {this.state.characters.map(character => (
                <ImgContainer
                onClick={this.setState.score + 1}
                key={character.id}
                  width="150px"
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
