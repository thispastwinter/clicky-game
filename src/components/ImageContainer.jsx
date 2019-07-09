import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';

class ImgContainer extends Component {
  render() {
    return (
      <Columns.Column size={2}>
        <Card onClick={this.props.function} style={{ width: this.props.width }}>
          <Card.Image src={this.props.image}></Card.Image>
        </Card>
      </Columns.Column>
    );
  }
}

export default ImgContainer;