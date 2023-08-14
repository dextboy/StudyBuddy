import React, { useState } from "react";

export default function Papers() {
  const questions = [
    {
      questionText: "Which of the following is not a reasonable estimate?",
      answerOptions: [
        {
          answerText: "The diameter of a strand of human hair is 80 μm",
          isCorrect: false,
        },
        { answerText: "The volume of an apple is 200 cm^3", isCorrect: false },
        {
          answerText: "The weight of a sheet of A4 paper on Earth is 50 mN",
          isCorrect: false,
        },
        {
          answerText: "The frequency of light from a green laser is 550 GHz",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "A bowling ball undergoes head-on elastic collision with a stationary bowling pin. The bowling ball’s mass is 5 times that of the pin. Given that the pin’s speed immediately after the collision is 3.33 m s-1, what is the speed of the bowling ball just before the collision?",
      answerOptions: [
        { answerText: "1.33ms-1", isCorrect: false },
        { answerText: "2.00ms-1", isCorrect: false },
        { answerText: "3.33ms-1", isCorrect: false },
        { answerText: "4.00ms-1", isCorrect: true },
      ],
    },
    {
      questionText:
        "A constant force F is applied to a stationary object of mass m on a frictionless surface. The object accelerates uniformly to reach a velocity v in time t covering a distance s during this time. Which of the following is the correct expression for the kinetic energy of the object at time t?",
      answerOptions: [
        { answerText: "Fv", isCorrect: false },
        { answerText: "Fvt", isCorrect: false },
        { answerText: "Fs", isCorrect: true },
        { answerText: "Fst", isCorrect: false },
      ],
    },
    {
      questionText:
        "A part in an engine is rotating in a circle of radius 8.0 cm at 3000 revolutions per minute. What is its centripetal acceleration?",
      answerOptions: [
        { answerText: "25ms–2", isCorrect: false },
        { answerText: "7900ms–2", isCorrect: true },
        { answerText: "3.1x104 ms–2", isCorrect: false },
        { answerText: "7.2x107 ms–2", isCorrect: false },
      ],
    },
    {
      questionText:
        "Two sites are being considered for a rocket launch. Site A is at the equator while site B is nearer to the North Pole. Taking the Earth to be a uniform sphere, which of the following statements is true?",
      answerOptions: [
        {
          answerText:
            "The escape speed for both sites are the same as gravitational potential at both sites are the same.",
          isCorrect: true,
        },
        {
          answerText:
            "The escape speed for site A is higher as gravitational potential at site A is larger.",
          isCorrect: false,
        },
        {
          answerText:
            "The escape speed for site A is lower as gravitational potential at site A is lower.",
          isCorrect: false,
        },
        {
          answerText:
            "The escape speed is independent of the gravitational potential.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Equal amount of an ideal gas was housed separately in containers A and B. The volume of B is larger than that of A. Gases in both containers were maintained at a common temperature for both containers. Which statement best describe the gases inside the two containers.?",
      answerOptions: [
        {
          answerText:
            "The average microscopic kinetic energy of A is larger than that of B.",
          isCorrect: false,
        },
        {
          answerText: "The gas pressure of B is larger than that of A.",
          isCorrect: false,
        },
        {
          answerText:
            "The root-mean-square speed of both gases are not the same.",
          isCorrect: false,
        },
        {
          answerText: "The gas density of A is larger than that of B",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "A point source emits energy in the form of waves such that a detector of cross-sectional area A at a distance of x from the point source receives power P. A second detector of cross-sectional area 2A, is placed at another position such that its distance is 0.5x from the same point source. What is the power received by the second detector??",
      answerOptions: [
        { answerText: "P", isCorrect: false },
        { answerText: "2P", isCorrect: false },
        { answerText: "4P", isCorrect: false },
        { answerText: "8P", isCorrect: true },
      ],
    },
    {
      questionText:
        "The ratio 14C:12C of living material has a constant value during life but the ratio decreases after death because the 14C is not replaced. The half-life of 14C is 5600 years. The 14C content of a 5 g sample of living wood has a radioactive count rate of about 100 per minute. If the count rate of a 10 g sample of ancient wood is 50 per minute, the age of the sample is about?",
      answerOptions: [
        { answerText: "1400 years", isCorrect: false },
        { answerText: "2800 years.", isCorrect: false },
        { answerText: "5600 years.", isCorrect: false },
        { answerText: "11200 years.", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="body">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
