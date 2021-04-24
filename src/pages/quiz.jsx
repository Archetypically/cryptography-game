import { useState } from "react";
import { Segment, Container, Step, Icon, Header, Divider, Pagination } from "semantic-ui-react";


export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizEnabled, setQuizEnabled] = useState(false);
  const [isReviewEnabled, setReviewEnabled] = useState(false);

  const questions = [
    {
      question: "cookie?"
    },
    {
      question: "cookie2?"
    }
  ]

  function handlePageChange(event, data){
    // These are 1-indexed, while the list is 0-indexed.
    setCurrentQuestionIndex(data.activePage - 1);
  }

  return (
    <Container className="content">
      <Segment.Group >
      <Segment raised size="massive">
        { questions[currentQuestionIndex].question }
      </Segment>
      <Segment raised>
        content
      </Segment>
      <Segment raised attached="top">
        <Pagination
          defaultActivePage={1}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          totalPages={ questions.length }
          onPageChange={ handlePageChange }
        />
      </Segment>
    </Segment.Group>
    <Step.Group size="mini" widths={2}>

      <Step
        active={ true }
        icon="question circle"
        title="Questions"
        description="Take the quiz"
      />

      <Step
        disabled={ !isReviewEnabled }
        icon="info"
        title="Review"
        description="Review your answers"
      />
    </Step.Group>

    </Container>
  );
}
