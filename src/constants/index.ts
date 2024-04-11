export const questionBank = [
  {
    category: "html",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyperlinks Text Markup Languages",
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlink Text Mark Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question:
          "What is the correct HTML element for inserting a line break?",
        options: ["&lt;br&gt", "&lt;break&gt", "&lt;lb&gt", "&lt;line&gt"],
        answer: "<br>",
      },
      {
        question: "What is the correct HTML for adding a background color?",
        options: [
          "&lt;background&gtyellow&lt;/background&gt",
          "&lt;body style='background-color:yellow;'&gt",
          "&lt;body bg='yellow'&gt",
          "&lt;bg color='yellow'&gt",
        ],
        answer: "<body style='background-color:yellow;'>",
      },
    ],
  },
  {
    category: "css",
    questions: [
      {
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Cascading Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question:
          "What is the correct HTML for referring to an external style sheet?",
        options: [
          "&lt;link rel='stylesheet' type='text/css' href='mystyle.css'&gt",
          "&lt;style src='mystyle.css'&gt",
          "&lt;stylesheet&gtmystyle.css&lt;/stylesheet&gt",
        ],
        answer:
          "&lt;link rel='stylesheet' type='text/css' href='mystyle.css'&gt",
      },
      {
        question:
          "Where in an HTML document is the correct place to refer to an external style sheet?",
        options: [
          "At the end of the document",
          "In the &lt;head&gt section",
          "In the &lt;body&gt section",
        ],
        answer: "In the &lt;head&gt section",
      },
    ],
  },
  {
    category: "javascript",
    questions: [
      {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["&lt;javascript&gt", "&lt;script&gt", "&lt;js&gt"],
        answer: "&lt;script&gt",
      },
      {
        question:
          'What is the correct syntax for referring to an external script called "xxx.js"?',
        options: [
          '&lt;script src="xxx.js"&gt',
          '&lt;script href="xxx.js"&gt',
          '&lt;script name="xxx.js"&gt',
        ],
        answer: '&lt;script src="xxx.js"&gt',
      },
      {
        question: 'How do you write "Hello World" in an alert box?',
        options: [
          'msg("Hello World")',
          'alertBox("Hello World")',
          'alert("Hello World")',
        ],
        answer: 'alert("Hello World")',
      },
    ],
  },
  {
    category: "accessibility",
    questions: [
      {
        question: "What is the purpose of the alt attribute for images?",
        options: [
          "To provide a description of the image",
          "To display the image as a thumbnail",
          "To link the image to a larger version",
        ],
        answer: "To provide a description of the image",
      },
      {
        question: "What is the purpose of the title attribute for anchor tags?",
        options: [
          "To provide a description of the link",
          "To display the link as a button",
          "To link the anchor to a larger version",
        ],
        answer: "To provide a description of the link",
      },
      {
        question: "What is the purpose of the tabindex attribute in HTML?",
        options: [
          "To specify the order of the tab key",
          "To specify the order of the tab key and make elements focusable",
          "To specify the order of the tab key and make elements clickable",
        ],
        answer:
          "To specify the order of the tab key and make elements focusable",
      },
    ],
  },
];
