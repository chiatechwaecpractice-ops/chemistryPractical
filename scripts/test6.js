// test6.js
// WAEC Chemistry Practical — Test 6
// Standalone renderer: link this file in your HTML with <script src="test6.js"></script>

document.addEventListener("DOMContentLoaded", function () {
  document.title = "WAEC Chemistry Practical Test 6";

  document.body.innerHTML = `
<header>
  <h1>WAEC Chemistry Practical — Test 6</h1>
  <p>
    Quantitative Analysis, Qualitative Analysis and Practical Knowledge based on
    realistic school laboratory simulation using H₂SO₄, NaOH, lead(II) carbonate and starch.
  </p>
</header>

<main>

<section>
  <h2>Candidate’s Instruction</h2>
  <p>
    Answer all questions. Record observations carefully. Where calculations are required,
    show all working clearly and give correct units.
  </p>

  <div class="note">
    <strong>Practice specimens/reagents:</strong><br>
    A = dilute tetraoxosulphate(VI) acid, H₂SO₄<br>
    B = sodium hydroxide solution, NaOH, containing 4.0 g dm⁻³<br>
    C = uniform mixture of lead(II) carbonate and starch
  </div>

  <div class="warn">
    <strong>Important:</strong> The titre values below are realistic simulated values.
    In an actual school laboratory, small variations may occur due to endpoint judgement,
    rinsing, meniscus reading and glassware accuracy.
  </div>
</section>

<section>
  <h2>Enter Class: Test 6 Question Paper</h2>
  <button onclick="toggleBlock('paper')">ENTER CLASS</button>

  <div id="paper" class="hidden">

    <h3>Question 1 — Quantitative Analysis / Titration</h3>

    <p>
      A is dilute tetraoxosulphate(VI) acid, H₂SO₄. B is sodium hydroxide solution
      containing 4.0 g of NaOH per dm³ of solution.
    </p>

    <p>
      Put A into the burette. Pipette 25.0 cm³ of B into a conical flask.
      Add 2–3 drops of phenolphthalein indicator and titrate with A until the pink
      colour just disappears. Repeat the titration to obtain concordant titre values.
    </p>

    <ol>
      <li>Tabulate your burette readings.</li>
      <li>Calculate the average volume of A used.</li>
      <li>Calculate the concentration of B in mol dm⁻³.</li>
      <li>Calculate the concentration of A in mol dm⁻³.</li>
      <li>Calculate the mass concentration of A in g dm⁻³.</li>
    </ol>

    <div class="formula">
      \\[
      H_2SO_4(aq) + 2NaOH(aq) \\rightarrow Na_2SO_4(aq) + 2H_2O(l)
      \\]
    </div>

    <p>[H = 1, O = 16, S = 32, Na = 23]</p>

    <div class="diagram">
      <img src="../assets/diagrams/titration-setup-labelled.PNG" alt="Labelled titration setup" style="width:100%;max-height:360px;object-fit:contain;background:white;border-radius:12px;margin-bottom:10px">
      <strong>Teacher guide:</strong> Burette containing A, pipette delivering B, conical flask, white tile and phenolphthalein endpoint.
    </div>

    <h3>Question 2 — Qualitative Analysis</h3>

    <p>
      C is a uniform mixture of lead(II) carbonate and starch. Carry out the following
      tests on C. Record your observations and state your inferences.
    </p>

    <ol>
      <li>Put a spatulaful of C into a test tube. Add about 5 cm³ of distilled water and shake.</li>
      <li>To a fresh portion of C, add iodine solution.</li>
      <li>To another portion of C, add dilute trioxonitrate(V) acid, HNO₃, and warm gently.</li>
      <li>Pass any gas evolved into lime water.</li>
      <li>Filter the acid mixture. To the filtrate, add NaOH(aq) in drops and then in excess.</li>
      <li>To another portion of the filtrate, add NH₃(aq) in drops and then in excess.</li>
      <li>To another portion of the filtrate, add dilute H₂SO₄(aq).</li>
    </ol>

    <h3>Question 3 — General Practical Knowledge</h3>

    <ol>
      <li>Why is phenolphthalein used in the titration between H₂SO₄ and NaOH?</li>
      <li>Why is the rough titre not used in calculating the average titre?</li>
      <li>State the confirmatory test for carbon dioxide.</li>
      <li>State the test for starch.</li>
      <li>Why should lead(II) compounds be handled carefully?</li>
      <li>Why must a burette be rinsed with the solution it will contain?</li>
      <li>Why is a white tile placed under the conical flask during titration?</li>
    </ol>

    <button class="blue" onclick="toggleBlock('solution')">VIEW BEST REPORT / MARKING SCHEME SOLUTION</button>
  </div>
</section>

<section id="solution" class="hidden">
  <h2>Best WAEC-Style Report and Marking Scheme Solution</h2>

  <h3>Question 1 — Quantitative Analysis Solution</h3>

  <table>
    <tr>
      <th>Titration</th>
      <th>Rough</th>
      <th>1st</th>
      <th>2nd</th>
      <th>3rd</th>
    </tr>
    <tr>
      <td>Final burette reading / cm³</td>
      <td>12.40</td>
      <td>12.15</td>
      <td>12.10</td>
      <td>12.15</td>
    </tr>
    <tr>
      <td>Initial burette reading / cm³</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>0.00</td>
    </tr>
    <tr>
      <td>Volume of A used / cm³</td>
      <td>12.40</td>
      <td>12.15</td>
      <td>12.10</td>
      <td>12.15</td>
    </tr>
  </table>

  <div class="formula">
    Concordant titres:
    \\[
    12.15cm^3,\\quad 12.10cm^3,\\quad 12.15cm^3
    \\]

    Average titre:
    \\[
    \\frac{12.15 + 12.10 + 12.15}{3}
    =
    12.13cm^3
    \\]
  </div>

  <h4>Step 1: Concentration of B</h4>

  <p>
    B contains 4.0 g dm⁻³ of NaOH.
  </p>

  <div class="formula">
    \\[
    Molar\\ mass\\ of\\ NaOH = 23 + 16 + 1 = 40g mol^{-1}
    \\]

    \\[
    C_B = \\frac{4.0}{40}
    =
    0.100mol\\,dm^{-3}
    \\]
  </div>

  <h4>Step 2: Mole ratio from the equation</h4>

  <div class="formula">
    \\[
    H_2SO_4 + 2NaOH \\rightarrow Na_2SO_4 + 2H_2O
    \\]

    \\[
    H_2SO_4 : NaOH = 1 : 2
    \\]
  </div>

  <h4>Step 3: Concentration of A</h4>

  <div class="formula">
    \\[
    \\frac{C_A V_A}{C_B V_B}
    =
    \\frac{1}{2}
    \\]

    \\[
    \\frac{C_A \\times 12.13}{0.100 \\times 25.0}
    =
    \\frac{1}{2}
    \\]

    \\[
    C_A =
    \\frac{0.100 \\times 25.0}{2 \\times 12.13}
    \\]

    \\[
    C_A = 0.103mol\\,dm^{-3}
    \\]
  </div>

  <h4>Step 4: Mass concentration of A</h4>

  <div class="formula">
    \\[
    Molar\\ mass\\ of\\ H_2SO_4 =
    2(1) + 32 + 4(16) = 98g mol^{-1}
    \\]

    \\[
    Mass\\ concentration = 0.103 \\times 98
    =
    10.1g\\,dm^{-3}
    \\]
  </div>

  <div class="note">
    This titre is chemically reasonable. B is 0.100 mol dm⁻³ NaOH. Since H₂SO₄ is dibasic,
    one mole of acid neutralizes two moles of NaOH. Therefore, only about half the acid
    volume is required when the acid concentration is close to 0.100 mol dm⁻³.
  </div>

  <h3>Question 2 — Qualitative Analysis Report</h3>

  <table>
    <tr>
      <th>Test</th>
      <th>Observation</th>
      <th>Inference</th>
    </tr>

    <tr>
      <td>C + distilled water and shake</td>
      <td>White suspension is formed. The solid does not dissolve completely. White residue remains.</td>
      <td>C contains insoluble substance(s).</td>
    </tr>

    <tr>
      <td>C + iodine solution</td>
      <td>Blue-black colouration is formed.</td>
      <td>Starch is present.</td>
    </tr>

    <tr>
      <td>C + dilute HNO₃ and warm gently</td>
      <td>Effervescence occurs. A colourless, odourless gas is evolved. Some starch residue may remain.</td>
      <td>Carbonate is present. The gas is suspected to be CO₂.</td>
    </tr>

    <tr>
      <td>Gas evolved + lime water</td>
      <td>Lime water turns milky.</td>
      <td>CO₂ confirmed. CO₃²⁻ is present.</td>
    </tr>

    <tr>
      <td>Acid filtrate + NaOH(aq) in drops</td>
      <td>White precipitate is formed.</td>
      <td>Pb²⁺, Zn²⁺ or Al³⁺ may be present.</td>
    </tr>

    <tr>
      <td>Then excess NaOH(aq)</td>
      <td>White precipitate dissolves in excess NaOH to form a colourless solution.</td>
      <td>Amphoteric ion present: Pb²⁺, Zn²⁺ or Al³⁺.</td>
    </tr>

    <tr>
      <td>Acid filtrate + NH₃(aq) in drops</td>
      <td>White precipitate is formed.</td>
      <td>Pb²⁺, Zn²⁺ or Al³⁺ may be present.</td>
    </tr>

    <tr>
      <td>Then excess NH₃(aq)</td>
      <td>White precipitate remains insoluble in excess NH₃.</td>
      <td>Pb²⁺ is indicated. Zn²⁺ is not confirmed.</td>
    </tr>

    <tr>
      <td>Acid filtrate + dilute H₂SO₄(aq)</td>
      <td>White precipitate is formed.</td>
      <td>Pb²⁺ confirmed as insoluble PbSO₄.</td>
    </tr>
  </table>

  <h3>Relevant Chemical Equations</h3>

  <div class="formula">
    Lead(II) carbonate with dilute trioxonitrate(V) acid:
    \\[
    PbCO_3(s) + 2HNO_3(aq)
    \\rightarrow
    Pb(NO_3)_2(aq) + CO_2(g) + H_2O(l)
    \\]
  </div>

  <div class="formula">
    Carbon dioxide with lime water:
    \\[
    CO_2(g) + Ca(OH)_2(aq)
    \\rightarrow
    CaCO_3(s) + H_2O(l)
    \\]
  </div>

  <div class="formula">
    Lead(II) ion with hydroxide ion:
    \\[
    Pb^{2+}(aq) + 2OH^-(aq)
    \\rightarrow
    Pb(OH)_2(s)
    \\]
  </div>

  <div class="formula">
    Lead(II) hydroxide dissolving in excess NaOH:
    \\[
    Pb(OH)_2(s) + 2OH^-(aq)
    \\rightarrow
    [Pb(OH)_4]^{2-}(aq)
    \\]
  </div>

  <div class="formula">
    Lead(II) ion with tetraoxosulphate(VI) ion:
    \\[
    Pb^{2+}(aq) + SO_4^{2-}(aq)
    \\rightarrow
    PbSO_4(s)
    \\]
  </div>

  <h3>Question 3 — General Practical Knowledge Solution</h3>

  <ol>
    <li>
      Phenolphthalein is used because the titration is between a strong acid and a strong alkali.
      It gives a sharp endpoint: pink in alkali and colourless in acid.
    </li>
    <li>
      The rough titre is not used because it is only a trial titre used to locate the approximate
      endpoint. Only concordant accurate titres are averaged.
    </li>
    <li>
      Carbon dioxide turns lime water milky.
    </li>
    <li>
      Iodine solution gives a blue-black colour with starch.
    </li>
    <li>
      Lead(II) compounds should be handled carefully because lead compounds are toxic.
    </li>
    <li>
      A burette is rinsed with the solution it will contain to prevent dilution by water droplets
      and to avoid contamination.
    </li>
    <li>
      A white tile is placed under the conical flask to make the endpoint colour change easier to observe.
    </li>
  </ol>

  <div class="note">
    <strong>Teacher’s WAEC guide:</strong> In qualitative analysis, write observations first.
    Do not jump straight to the ion. “Effervescence; colourless odourless gas turns lime water milky”
    scores better than only writing “CO₂”.
  </div>
</section>

<section>
  <h2>Quick Student Revision Summary</h2>

  <div class="grid">
    <div class="card">
      <h3>Titration Key Point</h3>
      <p>
        Burette readings must be recorded to two decimal places, such as 12.10 cm³.
      </p>
    </div>

    <div class="card">
      <h3>Endpoint</h3>
      <p>
        For phenolphthalein with NaOH in the flask, endpoint is pink to colourless.
      </p>
    </div>

    <div class="card">
      <h3>Carbonate Test</h3>
      <p>
        Carbonate + acid gives CO₂. CO₂ turns lime water milky.
      </p>
    </div>

    <div class="card">
      <h3>Starch Test</h3>
      <p>
        Iodine solution gives blue-black colour with starch.
      </p>
    </div>

    <div class="card">
      <h3>Lead(II) Confirmation</h3>
      <p>
        Pb²⁺ gives white PbSO₄ precipitate with dilute H₂SO₄.
      </p>
    </div>
  </div>
</section>

</main>

<footer>
  <p>CHIATECH WAEC Chemistry Practical Practice Portal</p>
  <p>Learn · Know · Do · Create SUCCESS</p>
</footer>
  `;

  injectStyles();
  loadMathJax();
});

function toggleBlock(id) {
  var el = document.getElementById(id);
  if (!el) return;

  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function injectStyles() {
  var style = document.createElement("style");
  style.textContent = `
    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: #f1f5f9;
      color: #0f172a;
      line-height: 1.7;
    }

    header {
      background: linear-gradient(135deg, #064e3b, #0f766e, #14b8a6);
      color: white;
      text-align: center;
      padding: 40px 18px;
    }

    header h1 {
      margin: 0;
      font-size: clamp(2rem, 5vw, 3.5rem);
      line-height: 1.15;
    }

    header p {
      max-width: 950px;
      margin: 16px auto 0;
      font-size: 1.05rem;
    }

    main {
      max-width: 1150px;
      margin: auto;
      padding: 24px 14px 70px;
    }

    section {
      background: white;
      margin: 22px 0;
      padding: 24px;
      border-radius: 20px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    h2 {
      color: #0f766e;
      margin-top: 0;
    }

    h3 {
      color: #1d4ed8;
      margin-top: 28px;
    }

    h4 {
      color: #0f172a;
      margin-bottom: 6px;
    }

    button {
      border: none;
      background: #0f766e;
      color: white;
      padding: 12px 18px;
      border-radius: 12px;
      font-weight: 800;
      cursor: pointer;
      margin: 8px 6px 8px 0;
    }

    button:hover {
      background: #115e59;
    }

    .blue {
      background: #1d4ed8;
    }

    .blue:hover {
      background: #1e40af;
    }

    .hidden {
      display: none;
    }

    .note {
      background: #ecfdf5;
      border-left: 5px solid #10b981;
      padding: 14px;
      border-radius: 12px;
      margin: 14px 0;
    }

    .warn {
      background: #fff7ed;
      border-left: 5px solid #f97316;
      padding: 14px;
      border-radius: 12px;
      margin: 14px 0;
    }

    .formula {
      background: #eff6ff;
      border-left: 5px solid #2563eb;
      padding: 14px;
      border-radius: 12px;
      margin: 14px 0;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      background: white;
    }

    th, td {
      border: 1px solid #cbd5e1;
      padding: 10px;
      vertical-align: top;
    }

    th {
      background: #0f766e;
      color: white;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }

    .card {
      background: #f8fafc;
      border: 1px solid #dbeafe;
      border-radius: 18px;
      padding: 18px;
    }

    .diagram {
      border: 2px dashed #94a3b8;
      background: #f8fafc;
      padding: 18px;
      border-radius: 16px;
      text-align: center;
      color: #475569;
      font-weight: 700;
      margin: 16px 0;
    }

    footer {
      background: #020617;
      color: white;
      padding: 25px;
      text-align: center;
    }

    @media print {
      button { display: none; }
      section { box-shadow: none; break-inside: avoid; }
      body { background: white; }
    }
  `;
  document.head.appendChild(style);
}

function loadMathJax() {
  window.MathJax = {
    tex: { inlineMath: [["\\\\(", "\\\\)"], ["$", "$"]] },
    svg: { fontCache: "global" }
  };

  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
  script.defer = true;
  document.head.appendChild(script);
}
