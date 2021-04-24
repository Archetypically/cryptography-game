import { Segment, Icon } from "semantic-ui-react";

export default function Attribution () {
  return (
    <Segment inverted vertical as="footer">
      Made with <a><Icon name="heart" /></a>by{" "}
      <a href="https://github.com/Archetypically">
        @Archetypically
      </a>
      .
    </Segment>
  )
}
