const PLAN = [
  // Phase 1: Days 1-4
  {
    day: 1, phase: 1, tag: "warm-up",
    title: "극한 · 연속 · L'Hôpital",
    tasks: [
      "주요 극한 6개 암기 ($\\sin x/x$, $(1-\\cos x)/x^2$ 등)",
      "L'Hôpital 적용 조건 ($0/0$, $\\infty/\\infty$) 정확히 확인",
      "교과서 Unit 1 핵심 예제 5문제",
      "Khan / Princeton Review MCQ 10문제",
    ],
  },
  {
    day: 2, phase: 1, tag: "warm-up",
    title: "도함수 규칙 · 음함수 · 관련 변화율",
    tasks: [
      "곱·몫·연쇄법칙 즉답 가능하게",
      "역삼각함수·로그·지수 도함수 표 손으로 적기",
      "음함수 미분 3문제 + Related Rates 3문제",
      "오답 노트에 헷갈린 부분 기록",
    ],
  },
  {
    day: 3, phase: 1, tag: "heavy",
    title: "미분 응용 1 — 극값 · MVT · 곡선해석",
    tasks: [
      "1·2차 도함수 부호표 그리기 연습",
      "MVT, IVT, EVT 진술과 조건 정확히",
      "$f$, $f'$, $f''$ 그래프 관계 — 시험 단골",
      "최적화(optimization) 문제 3개",
    ],
  },
  {
    day: 4, phase: 1, tag: "heavy",
    title: "미분 응용 2 — 입자 운동 · 선형근사",
    tasks: [
      "위치-속도-가속도 부호 해석",
      "speed up/down 판단 ($v$와 $a$ 부호 비교)",
      "선형근사 $L(x)=f(a)+f'(a)(x-a)$",
      "미분 단원 종합 MCQ 15문제",
    ],
  },

  // Phase 2: Days 5-8
  {
    day: 5, phase: 2, tag: "warm-up",
    title: "적분 기초 · FTC · u-치환",
    tasks: [
      "기본 적분 표 암기 (삼각·지수·로그)",
      "FTC Part 1 / Part 2 차이 명확히",
      "u-치환 10문제 (정·부정적분 섞어서)",
      "리만합 ↔ 정적분 변환",
    ],
  },
  {
    day: 6, phase: 2, tag: "bc",
    title: "BC 적분 기법 — 부분적분 · 부분분수 · 비정상적분",
    tasks: [
      "$\\int u\\,dv = uv - \\int v\\,du$ — LIATE 순서",
      "부분분수 분해: 분모 인수분해 후 계수 비교",
      "improper integral의 수렴/발산 판정",
      "BC 전용 MCQ 10문제",
    ],
  },
  {
    day: 7, phase: 2, tag: "heavy",
    title: "적분 응용 — 면적 · 부피",
    tasks: [
      "두 곡선 사이 면적 (위−아래)",
      "회전체 부피: 원판/와셔 vs 원통",
      "단면적 부피 (정사각형, 반원, 정삼각형)",
      "FRQ 면적·부피 유형 1문제 풀어보기",
    ],
  },
  {
    day: 8, phase: 2, tag: "bc",
    title: "BC 적분 응용 — 호의 길이 · 누적 변화율",
    tasks: [
      "호의 길이 $\\int\\sqrt{1+(f')^2}\\,dx$",
      "Rate-in / Rate-out 누적량 문제",
      "FTC로 $f(b)=f(a)+\\int_a^b f'$ 활용",
      "주간 종합 복습: 1–8일 핵심 한 번씩",
    ],
  },

  // Phase 3: Days 9-12
  {
    day: 9, phase: 3, tag: "bc",
    title: "미분방정식 — 변수분리 · slope field",
    tasks: [
      "변수분리: $\\frac{dy}{dx}=g(x)h(y)$ 형태로 정리",
      "slope field 그리기 & 해석",
      "초기조건 적용해서 특수해 구하기",
      "공개 FRQ 미분방정식 1문제",
    ],
  },
  {
    day: 10, phase: 3, tag: "bc",
    title: "BC DE — Euler · Logistic",
    tasks: [
      "Euler's method 표 만들어 풀기",
      "logistic $\\frac{dP}{dt}=kP(1-P/L)$, 변곡점 $P=L/2$",
      "carrying capacity와 long-term behavior",
      "DE 단원 MCQ 10문제",
    ],
  },
  {
    day: 11, phase: 3, tag: "bc",
    title: "급수 — 수렴 판정법 총정리",
    tasks: [
      "n-th term, 기하, p-급수, 적분, 비교, 극한비교",
      "비율 판정법 / 근 판정법 / 교대급수",
      "절대수렴 vs 조건수렴 차이",
      "판정법 흐름도 직접 그리기",
    ],
  },
  {
    day: 12, phase: 3, tag: "bc",
    title: "Taylor / Maclaurin 급수 · 오차",
    tasks: [
      "Maclaurin 5종 ($e^x,\\sin,\\cos,1/(1-x),\\ln(1+x)$) 암기",
      "수렴반경·구간 ($x=R$ 끝점 따로 검사)",
      "Lagrange 오차 한계 적용 연습",
      "Taylor FRQ 2문제 풀어보기",
    ],
  },

  // Phase 4: Days 13-16
  {
    day: 13, phase: 4, tag: "test",
    title: "Mock — MCQ 풀세트 (45문제 / 105분)",
    tasks: [
      "Part A (계산기 ×, 30문제 / 60분)",
      "Part B (계산기 ○, 15문제 / 45분)",
      "채점 후 틀린 문제 단원 표기",
      "약점 단원 3개 선정",
    ],
  },
  {
    day: 14, phase: 4, tag: "test",
    title: "Mock — FRQ 풀세트 (6문제 / 90분)",
    tasks: [
      "Part A 계산기 (2문제 / 30분)",
      "Part B 비계산기 (4문제 / 60분)",
      "Scoring guideline으로 자기 채점",
      "부분점수 놓친 곳 표시",
    ],
  },
  {
    day: 15, phase: 4, tag: "heavy",
    title: "약점 보강 · 오답 재풀이",
    tasks: [
      "13–14일 모의 오답 전부 다시 풀기",
      "헷갈린 공식 손으로 5번 쓰기",
      "Maclaurin 5개·도함수표·적분표 백지에 재현",
      "최근 2년 BC FRQ 1세트 추가",
    ],
  },
  {
    day: 16, phase: 4, tag: "test",
    title: "마무리 · 컨디션 조절",
    tasks: [
      "새 문제 X — 익숙한 것만 가볍게 훑기",
      "준비물 챙기기 (계산기·연필·신분증·수험표)",
      "계산기 배터리 확인, 시계 준비",
      "11시 전 취침 — 7시간 이상 수면",
    ],
  },
];

const STORAGE_KEY = "ap-bc-plan-progress-v1";

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}
function saveState(s) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

let state = loadState();

function tagLabel(tag) {
  return {
    "warm-up": "복습",
    heavy: "핵심",
    bc: "BC 전용",
    test: "실전",
  }[tag] || "";
}

function render() {
  [1, 2, 3, 4].forEach((phase) => {
    const grid = document.getElementById(`day-grid-${phase}`);
    if (!grid) return;
    grid.innerHTML = "";
    PLAN.filter((d) => d.phase === phase).forEach((d) => {
      const dayState = state[`d${d.day}`] || {};
      const allDone =
        d.tasks.length > 0 && d.tasks.every((_, i) => dayState[i]);

      const card = document.createElement("div");
      card.className = "day-card" + (allDone ? " done" : "");
      card.innerHTML = `
        <div class="day-head">
          <span class="day-num">Day ${d.day}</span>
          <span class="day-tag ${d.tag}">${tagLabel(d.tag)}</span>
        </div>
        <p class="day-title">${d.title}</p>
        <ul class="day-tasks">
          ${d.tasks
            .map((t, i) => {
              const checked = dayState[i] ? "checked" : "";
              const cls = dayState[i] ? "checked" : "";
              return `
              <li class="${cls}">
                <input type="checkbox" id="d${d.day}-t${i}" data-day="${d.day}" data-task="${i}" ${checked}>
                <label for="d${d.day}-t${i}">${t}</label>
              </li>`;
            })
            .join("")}
        </ul>
      `;
      grid.appendChild(card);
    });
  });

  document.querySelectorAll('.day-tasks input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", onToggle);
  });

  if (window.renderMathInElement) {
    window.renderMathInElement(document.querySelector("main"), {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
    });
  }

  updateProgress();
}

function onToggle(e) {
  const day = e.target.dataset.day;
  const task = e.target.dataset.task;
  const key = `d${day}`;
  state[key] = state[key] || {};
  state[key][task] = e.target.checked;
  saveState(state);

  e.target.closest("li").classList.toggle("checked", e.target.checked);

  // Update card "done" status
  const dayPlan = PLAN.find((d) => d.day === +day);
  const allDone = dayPlan.tasks.every((_, i) => state[key][i]);
  e.target.closest(".day-card").classList.toggle("done", allDone);

  updateProgress();
}

function updateProgress() {
  let total = 0;
  let done = 0;
  PLAN.forEach((d) => {
    const ds = state[`d${d.day}`] || {};
    d.tasks.forEach((_, i) => {
      total++;
      if (ds[i]) done++;
    });
  });
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  const fill = document.getElementById("progress-fill");
  const text = document.getElementById("progress-text");
  if (fill) fill.style.width = pct + "%";
  if (text) text.textContent = `${done} / ${total} (${pct}%)`;
}

function resetPlan() {
  if (!confirm("진행도를 모두 초기화할까요?")) return;
  state = {};
  saveState(state);
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  const tryRender = () => {
    if (window.renderMathInElement || document.readyState === "complete") {
      render();
    } else {
      setTimeout(tryRender, 80);
    }
  };
  tryRender();

  const reset = document.getElementById("reset-plan");
  if (reset) reset.addEventListener("click", resetPlan);
});
