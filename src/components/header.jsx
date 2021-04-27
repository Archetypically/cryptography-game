import { Container, Header, Menu, Icon } from "semantic-ui-react";

import { useLocation } from "react-router-dom";

export default function PageHeader () {
  let location = useLocation();

  return (
    <Container as="nav">
      <Header inverted as="a"
        href="#/"
        icon="code"
        content="cryptography"
        subheader="ga.me" />
      <Menu borderless compact inverted>
        <Menu.Item active={ location.pathname === '/' } href="#/">
          Home
        </Menu.Item>
        <Menu.Item active={ location.pathname === '/possible-results' } href="#/possible-results">
          Possible Results
        </Menu.Item>
        <Menu.Item href='https://github.com/Archetypically/cryptography-game' target='_blank' >
          <Icon name="github" />
        </Menu.Item>
      </Menu>
    </Container>
  );
}
