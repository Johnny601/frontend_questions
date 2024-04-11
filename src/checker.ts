import { questionBank } from "./constants";

type Questions = {
  category: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

export function setUpChecker() {
  let selectedSubject: string;
  let selectedSubjectQuestions: Questions;
  let currentQuestionNo = 0;
  let correctAnswers = 0;

  let submitButton: HTMLButtonElement;

  const pickableSubjects = document.querySelectorAll(".subject");
  pickableSubjects.forEach((subject) => {
    subject.addEventListener("click", () => {
      // set the selected subject
      selectedSubject = subject.getAttribute("id") as string;
      // get the questions of the selected subject
      selectedSubjectQuestions = questionBank.find(
        (subject) => subject.category === selectedSubject
      ) as Questions;
      // get the first question of the selected subject from the question bank
      const firstQuestion = selectedSubjectQuestions?.questions[0];

      // display the subject selected
      document.querySelector("#header-top")!.innerHTML = `
        <div class="subject-category">
          <div style="background: #fceeea" class="icon-container">
            <img
              src="./src/assets/${selectedSubject}.svg"
              alt="${selectedSubject} Logo"
              width="25"
              height="25"
            />
          </div>
          <span class="option-text">${
            selectedSubject === "html" || selectedSubject === "css"
              ? selectedSubject.toUpperCase()
              : selectedSubject.charAt(0).toUpperCase() +
                selectedSubject.slice(1)
          }</span>
        </div>
      `;

      // display the first question
      document.querySelector("#section-left")!.innerHTML = `
        <p class="question-number">Question ${currentQuestionNo + 1} of 10</p>
        <h3>${firstQuestion?.question}</h3>
      `;

      // display the options for the first question
      document.querySelector("#section-right")!.innerHTML = `
          <form>
            <ul id="option-list">
              ${firstQuestion?.options
                .map((option, index) => {
                  return `
                  <li>
                    <input id="option-${index}" type="radio" name="option" value="${option}"/>
                    <label for="option-${index}" class="option">
                      <div style="background: white" class="icon-container">
                        <span class="text-img">${String.fromCharCode(
                          65 + index
                        )}</span>
                      </div>
                      <span class="option-text">${option}</span>
                    </label>
                  </li>
                `;
                })
                .join("")}          
            </ul>
            <div class="button-container">
                  <button id="submit-button">Submit Answer</button>
            </div>
          </form>
      `;

      submitButton =
        document.querySelector<HTMLButtonElement>("#submit-button")!;
      submitButton?.addEventListener("click", (e) => {
        e.preventDefault();

        // check answer
        const correctAnswer =
          selectedSubjectQuestions.questions[currentQuestionNo].answer;
        const userAnswer = document.querySelector(
          'input[type="radio"]:checked'
        ) as HTMLInputElement;

        console.log(correctAnswer, userAnswer.value);

        if (correctAnswer === userAnswer.value) {
          console.log("correct");

          correctAnswers += 1;
        }

        currentQuestionNo += 1;
        if (selectedSubjectQuestions.questions.length === currentQuestionNo) {
          document.querySelector("#section-left")!.innerHTML = `
            <div class="introduction">
              <h2>
                <span style="font-weight: normal;opacity: 0.9">Quiz completed</span><br/>
                You scored...
              </h2>
            </div>
          `;

          document.querySelector("#section-right")!.innerHTML = `
            <div>
              <div class="score-board">
                <span style="font-size:xx-large">${correctAnswers}</span>
                <span class="question-number">out of ${selectedSubjectQuestions.questions.length}</span>
              </div>
            </div>
          `;

          return;
        }

        // display next question
        document.querySelector("#section-left")!.innerHTML = `
          <p class="question-number">Question ${currentQuestionNo + 1} of 10</p>
          <h3>${
            selectedSubjectQuestions.questions[currentQuestionNo].question
          }</h3>
        `;

        // diplay next question's options
        document.querySelector("#option-list")!.innerHTML = `
              ${selectedSubjectQuestions.questions[currentQuestionNo]?.options
                .map((option, index) => {
                  return `
                  <li>
                    <input id="option-${index}" type="radio" name="option" value="${option}"/>
                    <label for="option-${index}" class="option">
                      <div style="background: white" class="icon-container">
                        <span class="text-img">${String.fromCharCode(
                          65 + index
                        )}</span>
                      </div>
                      <span class="option-text">${option}</span>
                    </label>
                  </li>
                `;
                })
                .join("")} 
      `;
      });
    });
  });
}
