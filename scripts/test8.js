// test8.js
// Corrected version: uses only the reagents listed in the supplied instruction.

document.addEventListener("DOMContentLoaded", function () {
  document.title = "WAEC Chemistry Practical Test 8";

  document.body.innerHTML = `
<header>
  <h1>WAEC Chemistry Practical — Test 8</h1>
  <p>
    Corrected school-practice practical using only the supplied reagents:
    H₂SO₄, NaOH, lead(II) carbonate, starch, iodine solution, HCl, HNO₃,
    AgNO₃, BaCl₂, NH₃, lime water, litmus papers, methyl orange and phenolphthalein.
  </p>
</header>

<main>

<section>
  <h2>Candidate’s Instruction</h2>
  <p>
    Answer all questions. Record observations carefully. In qualitative analysis,
    write what is seen, smelt or tested before giving the inference. Show all calculations clearly.
  </p>

  <div class="note">
    <strong>Specimens supplied:</strong><br>
    A = dilute tetraoxosulphate(VI) acid, H₂SO₄<br>
    B = sodium hydroxide solution containing 4.0 g dm⁻³ NaOH<br>
    C = 1:1 uniform mixture of lead(II) carbonate and starch
  </div>

  <div class="warn">
    <strong>Only available reagents for this test:</strong><br>
    dilute sodium hydroxide solution, dilute hydrochloric acid, dilute trioxonitrate(V) acid,
    silver trioxonitrate(V) solution, aqueous barium chloride, aqueous ammonia,
    lime water, red and blue litmus papers, dilute tetraoxosulphate(VI) acid,
    iodine solution, methyl orange and phenolphthalein.
  </div>
</section>

<section>
  <h2>Enter Class: Test 8 Question Paper</h2>
  <button onclick="toggleBlock('paper')">ENTER CLASS</button>

  <div id="paper" class="hidden">

    <h3>Question 1 — Quantitative Analysis</h3>

    <p>
      A is dilute H₂SO₄. B is NaOH solution containing 4.0 g of NaOH per dm³.
    </p>

    <p>
      Put A into the burette. Pipette 25.0 cm³ of B into a conical flask.
      Add 2 drops of phenolphthalein indicator. Titrate with A until the pink colour
      just disappears. Repeat the titration to obtain concordant titre values.
    </p>

    <ol>
      <li>Tabulate your readings.</li>
      <li>Calculate the average volume of A used.</li>
      <li>Calculate the concentration of B in mol dm⁻³.</li>
      <li>Calculate the concentration of A in mol dm⁻³.</li>
      <li>Calculate the mass concentration of A in g dm⁻³.</li>
      <li>Calculate the number of moles of H⁺ ions in the average titre of A.</li>
    </ol>

    <div class="formula">
      \\[
      H_2SO_4(aq)+2NaOH(aq)\\rightarrow Na_2SO_4(aq)+2H_2O(l)
      \\]
    </div>

    <p>[H = 1, O = 16, S = 32, Na = 23]</p>

    <h3>Question 2 — Qualitative Analysis</h3>

    <p>
      C is a uniform mixture of lead(II) carbonate and starch. Carry out the following
      tests on C. Record your observations and state the inferences.
    </p>

    <ol>
      <li>Put a spatulaful of C in a test tube. Add about 5 cm³ distilled water and shake.</li>
      <li>Filter the mixture. Keep both the filtrate and residue.</li>
      <li>Add iodine solution to a small portion of C or the residue.</li>
      <li>Add dilute HNO₃ to another portion of C and warm gently.</li>
      <li>Pass any gas evolved into lime water.</li>
      <li>Divide the acid solution obtained into four portions.</li>
      <li>To the first portion, add NaOH(aq) in drops and then in excess.</li>
      <li>To the second portion, add NH₃(aq) in drops and then in excess.</li>
      <li>To the third portion, add dilute H₂SO₄(aq).</li>
      <li>To the fourth portion, add HCl(aq) in drops.</li>
    </ol>

    <h3>Question 3 — General Practical Knowledge</h3>

    <ol>
      <li>Why is phenolphthalein suitable for the titration in Question 1?</li>
      <li>Why must the burette be rinsed with A before filling it?</li>
      <li>Why is a white tile placed under the conical flask?</li>
      <li>State the test and observation for starch.</li>
      <li>State the confirmatory test for carbon dioxide.</li>
      <li>State two tests for Pb²⁺ using only the reagents supplied.</li>
      <li>Why should lead(II) salts be handled carefully?</li>
      <li>Why is dilute HNO₃ preferred for dissolving lead(II) carbonate before cation tests?</li>
      <li>Why is AgNO₃ not useful for confirming lead(II) ion in this practical?</li>
    </ol>

    <button class="blue" onclick="toggleBlock('solution')">VIEW BEST REPORT / MARKING SCHEME SOLUTION</button>
  </div>
</section>

<section id="solution" class="hidden">
  <h2>Best WAEC-Style Marking Scheme Solution</h2>

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
      <td>12.35</td>
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
      <td>12.35</td>
      <td>12.15</td>
      <td>12.10</td>
      <td>12.15</td>
    </tr>
  </table>

  <div class="formula">
    Concordant titres:
    \\[
    12.15,\\quad 12.10,\\quad 12.15cm^3
    \\]

    \\[
    Average\\ titre=
    \\frac{12.15+12.10+12.15}{3}
    =
    12.13cm^3
    \\]
  </div>

  <h4>Concentration of B</h4>

  <div class="formula">
    \\[
    Molar\\ mass\\ of\\ NaOH=23+16+1=40g mol^{-1}
    \\]

    \\[
    C_B=\\frac{4.0}{40}=0.100mol\\,dm^{-3}
    \\]
  </div>

  <h4>Concentration of A</h4>

  <div class="formula">
    \\[
    H_2SO_4:NaOH=1:2
    \\]

    \\[
    \\frac{C_A V_A}{C_B V_B}=\\frac{1}{2}
    \\]

    \\[
    \\frac{C_A\\times12.13}{0.100\\times25.0}=\\frac{1}{2}
    \\]

    \\[
    C_A=\\frac{0.100\\times25.0}{2\\times12.13}
    =
    0.103mol\\,dm^{-3}
    \\]
  </div>

  <h4>Mass concentration of A</h4>

  <div class="formula">
    \\[
    Molar\\ mass\\ of\\ H_2SO_4=2(1)+32+4(16)=98g mol^{-1}
    \\]

    \\[
    Mass\\ concentration=0.103\\times98=10.1g\\,dm^{-3}
    \\]
  </div>

  <h4>Number of moles of H⁺ ions in the average titre</h4>

  <div class="formula">
    \\[
    n(H_2SO_4)=\\frac{0.103\\times12.13}{1000}
    =
    1.25\\times10^{-3}mol
    \\]

    \\[
    H_2SO_4\\rightarrow2H^+ + SO_4^{2-}
    \\]

    \\[
    n(H^+)=2\\times1.25\\times10^{-3}
    =
    2.50\\times10^{-3}mol
    \\]
  </div>

  <div class="note">
    <strong>Teacher explanation:</strong> H₂SO₄ is dibasic. Therefore, 1 mole of H₂SO₄
    neutralizes 2 moles of NaOH. Since B is 0.100 mol dm⁻³ NaOH, about 12.13 cm³
    of approximately 0.103 mol dm⁻³ H₂SO₄ is needed for 25.0 cm³ of B.
  </div>

  <h3>Question 2 — Qualitative Analysis Report</h3>

  <table>
    <tr>
      <th>Test</th>
      <th>Observation</th>
      <th>Inference</th>
    </tr>

    <tr>
      <td>C + distilled water, shake</td>
      <td>White suspension formed. Solid does not dissolve completely.</td>
      <td>C contains insoluble substance(s).</td>
    </tr>

    <tr>
      <td>Filtration</td>
      <td>Colourless filtrate and white residue obtained.</td>
      <td>Insoluble component remains as residue.</td>
    </tr>

    <tr>
      <td>C/residue + iodine solution</td>
      <td>Blue-black colouration formed.</td>
      <td>Starch is present.</td>
    </tr>

    <tr>
      <td>C + dilute HNO₃ and warm</td>
      <td>Effervescence occurs. Colourless, odourless gas evolved. Some starch residue may remain.</td>
      <td>Carbonate suspected; gas is CO₂.</td>
    </tr>

    <tr>
      <td>Gas + lime water</td>
      <td>Lime water turns milky.</td>
      <td>CO₂ confirmed; CO₃²⁻ present.</td>
    </tr>

    <tr>
      <td>Acid solution + NaOH(aq) in drops</td>
      <td>White precipitate formed.</td>
      <td>Pb²⁺, Al³⁺ or Zn²⁺ may be present.</td>
    </tr>

    <tr>
      <td>Then excess NaOH(aq)</td>
      <td>White precipitate dissolves to form a colourless solution.</td>
      <td>Amphoteric ion present.</td>
    </tr>

    <tr>
      <td>Acid solution + NH₃(aq) in drops</td>
      <td>White precipitate formed.</td>
      <td>Pb²⁺, Al³⁺ or Zn²⁺ may be present.</td>
    </tr>

    <tr>
      <td>Then excess NH₃(aq)</td>
      <td>White precipitate remains insoluble.</td>
      <td>Pb²⁺ indicated.</td>
    </tr>

    <tr>
      <td>Acid solution + dilute H₂SO₄(aq)</td>
      <td>White precipitate formed.</td>
      <td>Pb²⁺ confirmed as PbSO₄.</td>
    </tr>

    <tr>
      <td>Acid solution + dilute HCl(aq)</td>
      <td>White precipitate formed.</td>
      <td>Pb²⁺ confirmed as PbCl₂.</td>
    </tr>
  </table>

  <h3>Equations and Chemical Facts Behind the Reactions</h3>

  <h4>1. Lead(II) carbonate reacts with dilute nitric acid</h4>
  <div class="formula">
    \\[
    PbCO_3(s)+2HNO_3(aq)\\rightarrow Pb(NO_3)_2(aq)+CO_2(g)+H_2O(l)
    \\]
  </div>
  <p>
    Lead(II) carbonate is insoluble in water but reacts with dilute acid.
    The carbonate ion is converted to carbon dioxide gas, producing effervescence.
  </p>

  <h4>2. Carbon dioxide test</h4>
  <div class="formula">
    \\[
    CO_2(g)+Ca(OH)_2(aq)\\rightarrow CaCO_3(s)+H_2O(l)
    \\]
  </div>
  <p>
    Lime water turns milky because insoluble calcium carbonate is formed.
  </p>

  <h4>3. Lead(II) hydroxide formation</h4>
  <div class="formula">
    \\[
    Pb^{2+}(aq)+2OH^-(aq)\\rightarrow Pb(OH)_2(s)
    \\]
  </div>

  <h4>4. Lead(II) hydroxide dissolves in excess NaOH</h4>
  <div class="formula">
    \\[
    Pb(OH)_2(s)+2OH^-(aq)\\rightarrow [Pb(OH)_4]^{2-}(aq)
    \\]
  </div>
  <p>
    Pb(OH)₂ is amphoteric. It dissolves in excess strong alkali but not in excess ammonia.
  </p>

  <h4>5. Lead(II) sulphate confirmation</h4>
  <div class="formula">
    \\[
    Pb^{2+}(aq)+SO_4^{2-}(aq)\\rightarrow PbSO_4(s)
    \\]
  </div>

  <h4>6. Lead(II) chloride confirmation</h4>
  <div class="formula">
    \\[
    Pb^{2+}(aq)+2Cl^-(aq)\\rightarrow PbCl_2(s)
    \\]
  </div>
  <p>
    PbCl₂ is a white precipitate. It is more soluble in hot water, but with the supplied
    reagents, formation of a white precipitate with dilute HCl supports Pb²⁺.
  </p>

  <h4>7. Starch and iodine</h4>
  <p>
    Iodine gives a blue-black colour with starch because iodine molecules form a coloured
    complex inside the helical structure of starch.
  </p>

  <div class="danger">
    <strong>Correction made:</strong> KI(aq) has been removed because it is not among the supplied reagents.
    Pb²⁺ is now confirmed using only dilute H₂SO₄ and dilute HCl, which are listed.
  </div>

  <h3>Question 3 — Practical Knowledge Solution</h3>

  <ol>
    <li>
      Phenolphthalein is suitable because H₂SO₄ and NaOH give a strong acid–strong alkali
      titration with a sharp end point. It changes from pink in alkali to colourless in acid.
    </li>
    <li>
      The burette is rinsed with A to prevent dilution by water droplets and to avoid contamination.
    </li>
    <li>
      A white tile makes the faint end-point colour change easier to see.
    </li>
    <li>
      Add iodine solution. Blue-black colouration confirms starch.
    </li>
    <li>
      Pass the gas into lime water. Lime water turns milky if CO₂ is present.
    </li>
    <li>
      Pb²⁺ may be confirmed by white PbSO₄ with dilute H₂SO₄ or white PbCl₂ with dilute HCl.
    </li>
    <li>
      Lead(II) salts are toxic and can poison humans and pollute soil and water.
    </li>
    <li>
      Dilute HNO₃ dissolves PbCO₃ to give Pb²⁺ solution without introducing Cl⁻ or SO₄²⁻
      that would interfere before the confirmatory tests.
    </li>
    <li>
      AgNO₃ is mainly used to test for halide ions such as Cl⁻. It does not directly confirm Pb²⁺
      in this practical.
    </li>
  </ol>
</section>

<section>
  <h2>Exam-Ready Takeaway</h2>

  <div class="grid">
    <div class="card">
      <h3>Titration</h3>
      <p>For H₂SO₄ vs NaOH, always remember the mole ratio 1 : 2.</p>
    </div>

    <div class="card">
      <h3>CO₃²⁻</h3>
      <p>Carbonate + acid gives CO₂, which turns lime water milky.</p>
    </div>

    <div class="card">
      <h3>Pb²⁺</h3>
      <p>White precipitate with NaOH; dissolves in excess NaOH but not excess NH₃.</p>
    </div>

    <div class="card">
      <h3>Starch</h3>
      <p>Iodine solution gives blue-black colouration.</p>
    </div>

    <div class="card">
      <h3>Pb²⁺ Confirmation</h3>
      <p>White PbSO₄ with dilute H₂SO₄ or white PbCl₂ with dilute HCl.</p>
    </div>

    <div class="card">
      <h3>WAEC Rule</h3>
      <p>Observation first, inference second. Never replace observation with theory.</p>
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
  const el = document.getElementById(id);
  if (!el) return;

  el.style.display = el.style.display === "block" ? "none" : "block";

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
*{box-sizing:border-box}
body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#f1f5f9;color:#0f172a;line-height:1.75}
header{background:linear-gradient(135deg,#022c22,#0f766e,#14b8a6);color:white;text-align:center;padding:44px 18px}
header h1{margin:0;font-size:clamp(2rem,5vw,3.6rem)}
header p{max-width:980px;margin:14px auto 0}
main{max-width:1180px;margin:auto;padding:24px 14px 70px}
section{background:white;margin:22px 0;padding:24px;border-radius:20px;box-shadow:0 12px 30px rgba(15,23,42,.08)}
h2{color:#0f766e;margin-top:0}
h3{color:#1d4ed8;margin-top:28px}
h4{margin-bottom:6px;color:#0f172a}
button{border:0;background:#0f766e;color:white;padding:12px 18px;border-radius:12px;font-weight:800;cursor:pointer;margin:8px 6px 8px 0}
button:hover{background:#115e59}
.blue{background:#1d4ed8}
.blue:hover{background:#1e40af}
.hidden{display:none}
.note{background:#ecfdf5;border-left:5px solid #10b981;padding:14px;border-radius:12px;margin:14px 0}
.warn{background:#fff7ed;border-left:5px solid #f97316;padding:14px;border-radius:12px;margin:14px 0}
.danger{background:#fef2f2;border-left:5px solid #dc2626;padding:14px;border-radius:12px;margin:14px 0}
.formula{background:#eff6ff;border-left:5px solid #2563eb;padding:14px;border-radius:12px;margin:14px 0;overflow-x:auto}
table{width:100%;border-collapse:collapse;margin:16px 0;background:white}
th,td{border:1px solid #cbd5e1;padding:10px;vertical-align:top}
th{background:#0f766e;color:white}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
.card{background:#f8fafc;border:1px solid #dbeafe;border-radius:18px;padding:18px}
footer{background:#020617;color:white;padding:25px;text-align:center}
@media print{button{display:none}section{box-shadow:none;break-inside:avoid}body{background:white}}
  `;
  document.head.appendChild(style);
}

function loadMathJax() {
  window.MathJax = {
    tex: { inlineMath: [["\\\\(", "\\\\)"], ["$", "$"]] },
    svg: { fontCache: "global" }
  };

  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
  script.defer = true;
  document.head.appendChild(script);
}