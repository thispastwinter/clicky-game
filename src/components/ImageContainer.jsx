import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';


function ImgContainer(props) {
  return (
    <Columns.Column size={2}>
      <Card style={{width: props.width}}>
        <Card.Image src={props.image}></Card.Image>
      </Card>
    </Columns.Column>
  );
}


export default ImgContainer;