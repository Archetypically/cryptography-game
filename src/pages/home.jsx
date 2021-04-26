import {
  Button,
  Container,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import ls from 'local-storage';

const disclaimerItems = [
  "All data is stored locally in your browser for this session only.",
  "None of your data is ever transmitted elsewhere.",
  "This project was created for educational purposes and is not used to profit in any way."
]

export default function Home() {
  return (
    <Container className="content">
      <Header inverted as="h1">
        cryp·tog·ra·phy <code>(/kripˈtäɡrəfē/)</code>
        <Header.Subheader>
           the practice and study of techniques for secure communication
        </Header.Subheader>
      </Header>
      <p>
        From <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="__blank">Caesarian ciphers</a> to <a href="https://en.wikipedia.org/wiki/X.509" target="__blank">`X.509` public key certificates</a>, <u>cryptography</u> `permeates our everyday lives. Haven't you ever wondered which cryptography you are? Find out now!`
      </p>
      <Message floating icon="info" color="black" header="Disclaimer" list={ disclaimerItems }/>
      <Button.Group>
        <Button
          icon
          labelPosition='left'
          size="huge"
          color="blue"
          href="#/quiz">
          Take the quiz!
          <Icon name='right arrow' />
        </Button>
        { ls.get("lastResultName") === null
          ? null
          : <Button
            icon
            labelPosition='right'
            size="huge"
            href={"#/result/" + ls.get("lastResultName")}
            color="purple"
            >
              See your previous result: {ls.get("lastResultName")}
              <Icon name='history' />
            </Button>
        }
      </Button.Group>
    </Container>
  );
}
