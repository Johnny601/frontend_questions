import "./style.css";

import htmlLogo from "./assets/html.svg";
import cssLogo from "./assets/css.svg";
import javascriptLogo from "./assets/javascript.svg";
import accessibilityLogo from "./assets/accessibility.svg";

import { setUpPickSubject } from "./subject.ts";
import { setUpChecker } from "./checker.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header id="header-top"></header>
  <section>
    <div id="section-left">
      <div class="introduction">
        <h2>
          <span style="font-weight: normal;opacity: 0.9">Welcome to the</span><br/>
          Frontend Quiz!
        </h2>
        <p style="opacity: 0.5">Pick a subject to get started</p>
      </div>
    </div>
    <div id="section-right">
      <ul id="option-list">
        <li id="html" class="option subject">
          <div style="background: #fceeea" class="icon-container">
            <img 
              src="${htmlLogo}"
              alt="html Logo"
              width="25"
              height="25"
            />
          </div>
          <span class="option-text">HTML</span>
        </li>
        <li id="css" class="option subject">
          <div style="background: #e9f1fc" class="icon-container">
            <img 
              src="${cssLogo}"
              alt="css Logo"
              width="25"
              height="25"
            />
          </div>
          <span class="option-text">CSS</span>
        </li>
        <li id="javascript" class="option subject">
          <div style="background: #fffbe6" class="icon-container">
            <img
              src="${javascriptLogo}"
              alt="javascript Logo"
              width="25"
              height="25"
            />
          </div>
          <span class="option-text">Javascript</span>
        </li>
        <li id="accessibility" class="option subject">
          <div style="background: #e1fdef" class="icon-container">
            <img

              src="${accessibilityLogo}"
              alt="javascript Logo"
              width="25"
              height="25"
            />
          </div>
          <span class="option-text">Accessibility</span>
        </li>
        <li class="button-container" style="visibility:hidden">
          <button id="submit-button">Submit Answer</button>
        </li>
      </ul>
    </div>
  </section>
`;

setUpChecker();
// setUpPickSubject();
