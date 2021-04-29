import { useState, useEffect } from "react";
import {
  Container,
  Segment,
  Message,
  Progress
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import ls from 'local-storage';

import possibleResults from "../data/results.jsx";
import answersToPoints from "../data/points.jsx";

export default function Processing() {
  const [step, setStep] = useState(0)
  const [percent, setPercentage] = useState(0);
  const [redirectToProcessing, setRedirectToProcessing] = useState(false);
  const [lastResult, setLastResult] = useState(null);

  const messages = [
    {message: "Cracking the code...", color: "teal"},
    {message: "Hacking into the NSA...", color: "yellow"},
    {message: "Signing certificates...", color: "orange"},
    {message: "Reverse engineering passwords...", color: "red"},
    {message: "Scanning ports...", color: "purple"},
    {message: "Done!", color: "green"},
  ]

  let resultsPoints = {
    aes: 0,
    blowfish: 0,
    twofish: 0,
    des: 0,
    serpent: 0,
    caesarian: 0,
    railfence: 0,
    bacon: 0,
    rc4: 0,
    rsa: 0,
  }

  useEffect(() => {
    let answers = ls.get("lastResultAnswers");

    for (const i in answers) {
      let pointObj;
      if (i == 0) {
        // Specific favorite year processing
        if (answers[i][1] == "BCE") {
          pointObj = {
            caesarian: 10
          }
        } else {
          let year = answers[i][0];
          if (year in answersToPoints[i]) {
            pointObj = answersToPoints[i][year];
          }
        }
      } else {
        pointObj = answersToPoints[i][answers[i]];
      }

      for (const j in pointObj) {
        resultsPoints[j] += pointObj[j];
      }

    }

    let lastResult = "aes";
    let maxVal = 0;
    for (const i in resultsPoints) {
      let resVal = resultsPoints[i];
      if (resVal >= maxVal) {
        lastResult = i;
        maxVal = resVal;
      }
    }

    ls.set("lastResultName", lastResult);
    setLastResult(lastResult);

    ls.set("lastResultPoints", resultsPoints);

    setTimeout(() => {setPercentage(17)}, 500);
    setTimeout(() => {setPercentage(28); setStep(1)}, 1000);
    setTimeout(() => {setPercentage(31); setStep(2)}, 1300);
    setTimeout(() => {setPercentage(51)}, 2000);
    setTimeout(() => {setPercentage(64); setStep(3)}, 2300);
    setTimeout(() => {setPercentage(73); setStep(3)}, 2700);
    setTimeout(() => {setPercentage(91); setStep(4)}, 3000);
    setTimeout(() => {setPercentage(100); setStep(5)}, 4000);
    setTimeout(() => {setRedirectToProcessing(true)}, 5000);

  }, []);

  return (
    <Container className="offset">
      <Segment>
        <Progress size="big" percent={percent} attached="top" color="green" active={percent < 100} />
        <Message color={messages[step].color}>{messages[step].message}</Message>
        <Progress size="big" percent={percent} color="green" active={percent < 100} />
      </Segment>
      { redirectToProcessing ? <Redirect to={"/result/" + lastResult}/> : null }
    </Container>
  );
}
