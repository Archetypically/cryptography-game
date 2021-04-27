import {Container, Card, Icon, Image, Placeholder} from "semantic-ui-react";

export default function LoadingCard() {
  return (
    <Card fluid>
      <Placeholder>
        <Placeholder.Image />
      </Placeholder>
      <Card.Content>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length='very short' />
            <Placeholder.Line length='medium' />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='very long' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Card.Content>
      <Card.Content extra>
        <Placeholder.Paragraph>
          <Placeholder.Line length='short' />
        </Placeholder.Paragraph>
      </Card.Content>
    </Card>
  )
}
