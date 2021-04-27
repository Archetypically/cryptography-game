import {
  Container,
  Label
} from "semantic-ui-react";
import possibleResults from "../data/results.jsx";

export default function PossibleResults() {

  const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
  ]


  return (
    <Container style={{position: "absolute", top: "250px"}}>
      <Label.Group size="massive">
        { Object.keys(possibleResults).map((key, i) => {return(
          <Label as="a" href={ "#/result/" + key } color={colors[i]}>
            {possibleResults[key].displayName}
          </Label>
        )})}
      </Label.Group>
    </Container>
  );
}
