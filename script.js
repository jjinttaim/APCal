const QUIZ = [
  {
    q: "$\\displaystyle \\lim_{x\\to 0}\\frac{\\sin(3x)}{x}$의 값은?",
    options: ["0", "1", "3", "존재하지 않음"],
    answer: 2,
    explain:
      "$\\lim_{x\\to 0}\\frac{\\sin(kx)}{x} = k$. 따라서 $k=3$이므로 답은 3.",
  },
  {
    q: "$f(x) = x^3 - 6x^2 + 9x + 2$의 극대값을 갖는 $x$는?",
    options: ["$x=0$", "$x=1$", "$x=2$", "$x=3$"],
    answer: 1,
    explain:
      "$f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$. $x=1$에서 부호가 +→−이므로 극대.",
  },
  {
    q: "$\\displaystyle \\frac{d}{dx}\\left[\\ln(\\cos x)\\right]$는?",
    options: ["$-\\tan x$", "$\\tan x$", "$-\\cot x$", "$\\sec x$"],
    answer: 0,
    explain:
      "연쇄법칙: $\\frac{1}{\\cos x}\\cdot(-\\sin x) = -\\tan x$.",
  },
  {
    q: "$\\displaystyle \\int_0^1 (3x^2 + 2x)\\,dx$의 값은?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explain:
      "$\\int_0^1 3x^2\\,dx + \\int_0^1 2x\\,dx = [x^3]_0^1 + [x^2]_0^1 = 1 + 1 = 2$.",
  },
  {
    q: "$y = e^{x^2}$의 도함수는?",
    options: ["$e^{x^2}$", "$2x\\,e^{x^2}$", "$x^2 e^{x^2-1}$", "$2e^{x}$"],
    answer: 1,
    explain: "연쇄법칙: $\\frac{d}{dx}e^{g(x)} = g'(x)e^{g(x)} = 2x\\,e^{x^2}$.",
  },
  {
    q: "곡선 $y = x^2$와 $y = 2x$로 둘러싸인 영역의 넓이는?",
    options: ["$\\dfrac{2}{3}$", "$\\dfrac{4}{3}$", "$2$", "$\\dfrac{8}{3}$"],
    answer: 1,
    explain:
      "교점 $x=0,2$에서 $\\int_0^2 (2x - x^2)\\,dx = [x^2 - x^3/3]_0^2 = 4 - 8/3 = 4/3$.",
  },
  {
    q: "$\\displaystyle \\sum_{n=0}^{\\infty}\\left(\\frac{1}{2}\\right)^n$의 값은? (BC)",
    options: ["$1$", "$\\dfrac{3}{2}$", "$2$", "발산"],
    answer: 2,
    explain:
      "기하급수 $\\sum r^n = \\dfrac{1}{1-r}$, $r=1/2$이므로 $\\dfrac{1}{1-1/2}=2$.",
  },
  {
    q: "$f(x) = \\sin x$의 $x=0$에서의 Maclaurin 급수 3차항까지는? (BC)",
    options: [
      "$x + \\dfrac{x^3}{6}$",
      "$x - \\dfrac{x^3}{6}$",
      "$1 - \\dfrac{x^2}{2}$",
      "$x - \\dfrac{x^2}{2}$",
    ],
    answer: 1,
    explain: "$\\sin x = x - \\dfrac{x^3}{3!} + \\cdots = x - \\dfrac{x^3}{6} + \\cdots$",
  },
];

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  QUIZ.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "quiz-item";
    div.innerHTML = `
      <div class="quiz-question">${i + 1}. ${item.q}</div>
      <div class="quiz-options">
        ${item.options
          .map(
            (opt, j) =>
              `<button class="quiz-option" data-q="${i}" data-o="${j}">${String.fromCharCode(
                65 + j
              )}. ${opt}</button>`
          )
          .join("")}
      </div>
      <div class="quiz-explain" id="explain-${i}" hidden></div>
    `;
    container.appendChild(div);
  });

  container.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", handleAnswer);
  });

  if (window.renderMathInElement) {
    window.renderMathInElement(container, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
    });
  }

  updateScore();
}

const answered = new Set();
let correct = 0;

function handleAnswer(e) {
  const btn = e.currentTarget;
  const qi = +btn.dataset.q;
  const oi = +btn.dataset.o;
  if (answered.has(qi)) return;
  answered.add(qi);

  const item = QUIZ[qi];
  const parent = btn.parentElement;
  parent.querySelectorAll(".quiz-option").forEach((b, idx) => {
    b.disabled = true;
    if (idx === item.answer) b.classList.add("correct");
    if (idx === oi && oi !== item.answer) b.classList.add("wrong");
  });

  if (oi === item.answer) correct++;

  const ex = document.getElementById(`explain-${qi}`);
  ex.hidden = false;
  ex.innerHTML = `<strong>해설:</strong> ${item.explain}`;
  if (window.renderMathInElement) {
    window.renderMathInElement(ex, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
    });
  }

  updateScore();
}

function updateScore() {
  const span = document.getElementById("score");
  if (!span) return;
  span.textContent = `점수: ${correct} / ${QUIZ.length} (푼 문항: ${answered.size})`;
}

function resetQuiz() {
  answered.clear();
  correct = 0;
  renderQuiz();
}

document.addEventListener("DOMContentLoaded", () => {
  const tryRender = () => {
    if (window.renderMathInElement) {
      renderQuiz();
    } else {
      setTimeout(tryRender, 80);
    }
  };
  tryRender();

  const reset = document.getElementById("reset-quiz");
  if (reset) reset.addEventListener("click", resetQuiz);
});
