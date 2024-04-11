import { questionBank } from "./constants";

export function setUpPickSubject() {
  const pickableSubjects = document.querySelectorAll(".option");

  pickableSubjects.forEach((subject) => {
    subject.addEventListener("click", () => {
      const selectedSubject = subject.getAttribute("id") as string;
      // Get the first question of the selected subject
      const subjectQuestion = questionBank.find(
        (subject) => subject.category === selectedSubject
      )?.questions[0];

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

      document.querySelector("#section-left")!.innerHTML = `
        <p class="question-number">Question 0 of 10</p>
        <h3>${subjectQuestion?.question}</h3>
      `;

      // document.querySelector("#section-right")!.innerHTML = `
      //   <ul>
      //     <li id="html" class="option">
      //       <div style="background: white" class="icon-container">
      //         <span class="text-img">A</span>
      //       </div>
      //       <span class="option-text">${subjectQuestion?.options[0]}</span>
      //     </li>
      //     <li id="css" class="option">
      //       <div style="background: white" class="icon-container">
      //         <span class="text-img">B</span>
      //       </div>
      //       <span class="option-text">${subjectQuestion?.options[1]}</span>
      //     </li>
      //     <li id="javascript" class="option">
      //       <div style="background: white" class="icon-container">
      //         <span class="text-img">C</span>
      //       </div>
      //       <span class="option-text">${subjectQuestion?.options[2]}</span>
      //     </li>
      //     <li id="accessibility" class="option">
      //       <div style="background: white" class="icon-container">
      //         <span class="text-img">D</span>
      //       </div>
      //       <span class="option-text">${subjectQuestion?.options[3]}</span>
      //     </li>
      //     <li id="submit-button" >
      //       <button>Submit Answer</button>
      //     </li>
      //   </ul>
      // `;

      // document.querySelector("#section-right")!.innerHTML = `
      //   <ul>
      //     ${subjectQuestion?.options
      //       .map(
      //         (option, index) => `
      //       <li id="${index}" class="option">
      //         <div style="background: white" class="icon-container">
      //           <span class="text-img">${String.fromCharCode(65 + index)}</span>
      //         </div>
      //         <span class="option-text">${option}</span>
      //       </li>
      //     `
      //       )
      //       .join("")}
      //     <li id="submit-button" >
      //       <button>Submit Answer</button>
      //     </li>
      //   </ul>
      // `;

      document.querySelector("#section-right")!.innerHTML = `
        <form id="quiz-form">       
          <ul>
            <li>
              <input id="option-1" type="radio" name="option"/>
              <label for="option-1" class="option">
                <div style="background: white" class="icon-container">
                  <span class="text-img">A</span>
                </div>
                <span class="option-text">${subjectQuestion?.options[0]}</span>
              </label>
            </li>
            <li>
              <input id="option-2" type="radio" name="option"/>
              <label for="option-2" class="option">
                <div style="background: white" class="icon-container">
                  <span class="text-img">B</span>
                </div>
                <span class="option-text">${subjectQuestion?.options[1]}</span>
              </label>
            </li>
            <li>
              <input id="option-3" type="radio" name="option"/>
              <label for="option-3" class="option">
                <div style="background: white" class="icon-container">
                  <span class="text-img">C</span>
                </div>
                <span class="option-text">${subjectQuestion?.options[2]}</span>
              </label>
            </li>
            <li>
              <input id="option-4" type="radio" name="option"/>
              <label for="option-4" class="option">
                <div style="background: white" class="icon-container">
                  <span class="text-img">D</span>
                </div>
                <span class="option-text">${subjectQuestion?.options[3]}</span>
              </label>
            </li>
            <li id="submit-button" >
              <button>Submit Answer</button>
            </li>
          </ul>       
        </form>
      `;
    });
  });
}
