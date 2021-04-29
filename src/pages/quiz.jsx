import {
  useState,
  useEffect
} from "react";
import {
  Segment,
  Container,
  Step,
  Icon,
  Header,
  Divider,
  Pagination,
  Form,
  Radio, Button, List, Dropdown, Input, Label
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import ls from 'local-storage';

export default function Quiz() {
  const [answers, setAnswers] = useState([["2021", "CE"]]);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizEnabled, setQuizEnabled] = useState(false);
  const [isReviewEnabled, setReviewEnabled] = useState(false);
  const [redirectToProcessing, setRedirectToProcessing] = useState(false);

  const eraOptions = [
    { key: 'CE', text: 'CE', value: 'CE' },
    { key: 'BCE', text: 'BCE', value: 'BCE' },
  ]

  const questions = [{
      question: "What is your favorite year?",
      components:
        <Input type='number'
        max='9999'
        min='0'
        value={answers[0][0]}
        onChange={handleAnswerChange}
        labelPosition='right'
        placeholder="2021">
          <input />
          <Label>
            <Dropdown options={eraOptions} onChange={handleAnswerChange} value={answers[0][1]} />
          </Label>
        </Input>
      ,
    },
    {
      question: "When it comes to clothing, which describes you the best?",
      components:
      <Form>
        <Form.Field>
          <Radio
            label={<label><u>Haute couture</u>; I always have the cutting edge, latest and greatest in fashion.</label>}
            name='question1'
            value='haute-couture'
            checked={answers[1] === 'haute-couture'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label><u>Fashion-concious</u>; I subscribe to trends broadly, but try not to sweat the little things.</label>}
            name='question1'
            value='fashion-concious'
            checked={answers[1] === 'fashion-concious'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label><u>Comfort over all</u>; #1 factor to clothing is how comfortable it is to wear.</label>}
            name='question1'
            value='comfort'
            checked={answers[1] === 'comfort'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label><u>Independent</u>; I'd label myself as fairly independent, wearing whatever I feel like.</label>}
            name='question1'
            value='independent'
            checked={answers[1] === 'independent'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label><u>Caesar</u>; I wear whatever Julius Caesar would wear.</label>}
            name='question1'
            value='caesar'
            checked={answers[1] === 'caesar'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
      </Form>,
    },
    {
      question: "You're getting ready to check out at the grocery store. Which line do you take?",
      components: <Form>
        <Form.Field>
          <Radio
            label={<label>The line with the <u>most dependable-looking cashier</u>. I prefer <i>trusted, tried</i> pathways.</label>}
            name='question2'
            value='dependable-looking'
            checked={answers[2] === 'dependable-looking'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label>The line with the <u>fewest people</u>. I prefer <i>speed</i> over anything else.</label>}
            name='question2'
            value='fewest-people'
            checked={answers[2] === 'fewest-people'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label>The line that <u>I think will go the fastest</u>, even if it doesn't have the fewest people.</label>}
            name='question2'
            value='perceived-fastest'
            checked={answers[2] === 'perceived-fastest'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label>The line with the <u>most attractive</u> cashier.</label>}
            name='question2'
            value='most-attractive'
            checked={answers[2] === 'most-attractive'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label>My choice is <u>totally random</u>.</label>}
            name='question2'
            value='totally-random'
            checked={answers[2] === 'totally-random'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label>The <u>self-checkout</u> kiosk. I like <i>doing things myself</i>.</label>}
            name='question2'
            value='self-checkout'
            checked={answers[2] === 'self-checkout'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label>I take the line with <u>Julius Caesar</u> in it.</label>}
            name='question2'
            value='caesar'
            checked={answers[2] === 'caesar'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
      </Form>,
    },
    {
      question: "Which type of vehicle is your preferred mode of transportation?",
      components: <Form>
        <Form.Field>
          <Radio
            label="Truck"
            name='question3'
            value='truck'
            checked={answers[3] === 'truck'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Sports car"
            name='question3'
            value='sports-car'
            checked={answers[3] === 'sports-car'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Sedan"
            name='question3'
            value='sedan'
            checked={answers[3] === 'sedan'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Horse & carriage"
            name='question3'
            value='horse-and-carriage'
            checked={answers[3] === 'horse-and-carriage'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Chariot"
            name='question3'
            value='chariot'
            checked={answers[3] === 'chariot'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
      </Form>,
    },
    {
      question: "Which era out of the ones below was your favorite?",
      components: <Form>
        <Form.Field>
          <Radio
            label={<label>The <u>modern era</u>; no time like the present.</label>}
            name='question4'
            value='modern-era'
            checked={answers[4] === 'modern-era'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label>The <u>90's</u>; I was a 90's kid.</label>}
            name='question4'
            value='nineties'
            checked={answers[4] === 'nineties'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label>The <u>70's</u>; "That Seventies Show" is the best!</label>}
            name='question4'
            value='seventies'
            checked={answers[4] === 'seventies'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label>The <u>1600's</u>; Shakespeare was the best!</label>}
            name='question4'
            value='sixteen-hundreds'
            checked={answers[4] === 'sixteen-hundreds'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={<label>Around <u>100 BCE</u>.</label>}
            name='question4'
            value='one-hundred-bce'
            checked={answers[4] === 'one-hundred-bce'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
      </Form>,
    },
    {
      question: "In high school/university, what were your grades like?",
      components: <Form>
        <Form.Field>
          <Radio
            label="Straight A's!"
            name='question5'
            value='straight-a'
            checked={answers[5] === 'straight-a'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="A-B's"
            name='question5'
            value='a-b'
            checked={answers[5] === 'a-b'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="B-C's"
            name='question5'
            value='b-c'
            checked={answers[5] === 'b-c'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="C-F's"
            name='question5'
            value='c-f'
            checked={answers[5] === 'c-f'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="J-to-the-C"
            name='question5'
            value='j-to-the-c'
            checked={answers[5] === 'j-to-the-c'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
      </Form>,
    },
    {
      question: "How do you deal with locking your front door?",
      components: <Form>
        <Form.Field>
          <Radio
            label="I've got an electronic/smart lock that keeps it locked at all times."
            name='question6'
            value='smart-lock'
            checked={answers[6] === 'smart-lock'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="I've got a physical lock-and-key that I keep locked as much as possible."
            name='question6'
            value='lock-and-key-possible'
            checked={answers[6] === 'lock-and-key-possible'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="I keep my front door locked when I'm out and unlocked when I'm home."
            name='question6'
            value='lock-and-key-when-out'
            checked={answers[6] === 'lock-and-key-when-out'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="I keep my front door unlocked at all times."
            name='question6'
            value='always-unlocked'
            checked={answers[6] === 'always-unlocked'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="I keep my front door open at all times."
            name='question6'
            value='always-open'
            checked={answers[6] === 'always-open'}
            onChange={handleAnswerChange}
          />
        </Form.Field>
      </Form>,
    }
  ]

  function handleAnswerChange(e, v) {
    let thisAnswer = e.target.value;
    if (v !== null) {
      thisAnswer = v.value;
    }

    // HACK! Do not let any recruiters see this.
    if (currentQuestionIndex === 0) {
      let thisAnswerIndex = thisAnswer === "CE" || thisAnswer === "BCE" ? 1 : 0;
      let thisRealAnswer = answers[0];
      thisRealAnswer[thisAnswerIndex] = thisAnswer;
      thisAnswer = thisRealAnswer;
    }

    let answersCopy = [...answers];
    answersCopy[currentQuestionIndex] = thisAnswer;
    setAnswers(answersCopy);
    console.log(answersCopy);
  }


  function handlePageChange(event, data) {
    setCurrentQuestionIndex(data.activePage - 1);
  }

  function handleGetResults(e, d) {
    // This function deals with submitting the quiz to get results
    ls.set("lastResultAnswers", answers);
    // Hacky but w/e
    setRedirectToProcessing(true);
  }

  return (
    <Container className="offset">
        {
          currentStep === 0
          ? <Segment.Group>
            <Segment raised size="massive">
              { questions[currentQuestionIndex].question }
            </Segment>
            <Segment raised>
              { questions[currentQuestionIndex].components }
            </Segment>
            <Segment raised attached="bottom">
              <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                prevItem={
                  currentQuestionIndex === 0
                  ? null
                  : undefined
                }
                nextItem={
                  // If we're on the last page:
                  currentQuestionIndex + 1 === questions.length
                    // Don't show us
                    ? null
                    // Otherwise make this a normal thingy
                    : undefined
                }
                pointing
                secondary
                totalPages={ questions.length }
                onPageChange={ handlePageChange }
              />
            </Segment>
          </Segment.Group>
          : <Segment.Group>
            <Segment textAlign="left">
              <Header as='h1'>Your Answers</Header>
              <List ordered>
                {
                  questions.map((qObj, i) => {return(
                    <List.Item key={i}>
                      <List.Content>
                        <List.Header>{qObj.question}</List.Header>
                        <List.Description>
                          {answers[i]}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  )})
                }
              </List>
            </Segment>
            <Button animated attached="bottom" color="green" onClick={handleGetResults}>
              <Button.Content visible>Get your results!</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Segment.Group>
        }
      <Step.Group size="mini" widths={2}>
        <Step
          as="a"
          onClick={(() => { setCurrentStep(0)}) }
          active={ currentStep === 0 }
          completed={ answers.length === questions.length }
          icon="question circle"
          title="Questions"
          description="Take the quiz"
        />
        <Step
          as="a"
          onClick={(() => {setCurrentStep(1)})}
          active={ currentStep === 1 }
          disabled={ answers.length !== questions.length }
          icon="info"
          title="Review"
          description="Review your answers"
        />
      </Step.Group>
      { redirectToProcessing ? <Redirect to="/processing"/> : null }
    </Container>
  );
}
