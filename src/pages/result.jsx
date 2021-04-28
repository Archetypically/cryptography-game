import {
  useEffect,
  useState
} from "react";
import {
  Container,
  Card,
  Icon,
  Image,
  List,
  Label,
  Segment,
} from "semantic-ui-react";
import {
  useLocation,
  Redirect
} from "react-router-dom";
import possibleResults from "../data/results.jsx";
import LoadingCard from "../components/loading-card.jsx";


export default function Result() {

  const [thisResult, setResult] = useState("loading");
  let location = useLocation()

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const resultName = location.pathname.replace("/result/", "");
    if (!(resultName in possibleResults)) {
      setResult(null);
    } else {
      setResult(resultName);
    }
  });

  return (<Container>
    {
      // Source: https://stackoverflow.com/questions/46592833
      (thisResult === null && <Redirect to="/not-found"/>)
      || (thisResult === "loading" && <LoadingCard />)
      ||
        <Card fluid>
          <Card.Content>
            <Card.Header>
              You are:
              <h1 style={{fontSize: "4rem", fontFamily: "'Open Sans', Lato"}}>{possibleResults[thisResult].displayName}</h1>
            </Card.Header>
            <Card.Meta>
              {possibleResults[thisResult].secondaryNames.join(", ")}
            </Card.Meta>
            <Card.Description>
              <Image bordered centered src={possibleResults[thisResult].img} height="202" />
              <Segment textAlign="left">
                <List bulleted>
                {
                  possibleResults[thisResult].details.map((line, i) =>
                  {
                    return (
                      <List.Item key={i}>{line}</List.Item>
                    );
                  })
                }
                </List>
              </Segment>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            Learn more:
            <Label.Group>
              {
                possibleResults[thisResult].links.map((thisObj, i) => {
                  return (
                    <Label key={thisObj.name} color={thisObj.color} as="a" href={thisObj.href} target="_blank">
                      <Icon name={thisObj.icon} />
                      {thisObj.name}
                      <Label.Detail>{thisObj.detail}</Label.Detail>
                    </Label>
                  );
                })
              }
            </Label.Group>
          </Card.Content>
        </Card>
    }

  </Container>);
}
