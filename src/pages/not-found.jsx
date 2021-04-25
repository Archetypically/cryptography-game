import {useState} from "react";
import {useHistory} from "react-router-dom";
import {Container, Card, Icon, Image, Button} from "semantic-ui-react";

export default function NotFound(props) {
  let history = useHistory();

  return (<Container>
    <Card fluid="fluid" color="red">
      <Card.Content>
        <Card.Header>
          <h1 style={{
              fontSize: '20rem'
            }}>404</h1>
        </Card.Header>
        <Card.Meta>Not Found</Card.Meta>
        <Card.Description>The page you're looking for can't be found.</Card.Description>
      </Card.Content>
      <Card.Content extra="extra">
        <Button fluid animated basic color="red" onClick={history.goBack}>
          <Button.Content visible>Go back</Button.Content>
          <Button.Content hidden>
            <Icon name='backward' />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  </Container>);
}
