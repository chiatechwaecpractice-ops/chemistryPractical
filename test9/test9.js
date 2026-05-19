// test9.js
// WAEC Chemistry Practical — Test 9

document.addEventListener("DOMContentLoaded", function () {
  document.title = "WAEC Chemistry Practical Test 9";

  document.body.innerHTML = `
<header>
  <h1>WAEC Chemistry Practical — Test 9</h1>
  <p>
    Full WAEC-style school practical using the supplied reagents and specifically capturing
    BaCl₂, AgNO₃, red/blue litmus papers and methyl orange indicator.
  </p>
</header>

<main>

<section>
  <h2>Candidate’s Instruction</h2>
  <p>
    Answer all questions. Record observations carefully and state the inferences drawn.
    Do not write inference before observation. Show all calculations clearly.
  </p>

  <div class="note">
    <strong>Specimens supplied:</strong><br>
    A = dilute tetraoxosulphate(VI) acid, H₂SO₄<br>
    B = sodium hydroxide solution containing 4.0 g dm⁻³ NaOH<br>
    C = 1:1 uniform mixture of lead(II) carbonate and starch
  </div>

  <div class="warn">
    <strong>Reagents to be used in this test:</strong><br>
    dilute NaOH, dilute HCl, dilute HNO₃, AgNO₃, BaCl₂, aqueous NH₃,
    lime water, red and blue litmus papers, dilute H₂SO₄, iodine solution,
    methyl orange and phenolphthalein.
  </div>
</section>

<section>
  <h2>Enter Class: Test 9 Question Paper</h2>
  <button onclick="toggleBlock('paper')">ENTER CLASS</button>

  <div id="paper" class="hidden">

    <h3>Question 1 — Quantitative Analysis</h3>

    <p>
      A is dilute H₂SO₄. B is NaOH solution containing 4.0 g of NaOH per dm³.
    </p>

    <p>
      Put A into the burette. Pipette 20.0 cm³ of B into a conical flask.
      Add 2 drops of methyl orange indicator and titrate with A until the yellow
      colour changes to orange/pink. Repeat to obtain concordant titres.
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
      H_2SO_4(aq)+2NaOH(aq)\\rightarrow Na_2SO_4(aq)+2H_2O(l)
      \\]
    </div>

    <p>[H = 1, O = 16, S = 32, Na = 23]</p>

    <h3>Question 2 — Qualitative Analysis</h3>

    <p>
      C is a uniform mixture of lead(II) carbonate and starch. Carry out the following
      tests on C. Record observations and state inferences.
    </p>

    <ol>
      <li>Put a spatulaful of C into a test tube. Add about 5 cm³ of distilled water and shake.</li>
      <li>Test the mixture or filtrate with red and blue litmus papers.</li>
      <li>Filter the mixture. Keep the residue and filtrate.</li>
      <li>Add iodine solution to a small portion of the residue.</li>
      <li>Add dilute HNO₃ to another portion of the residue and warm gently.</li>
      <li>Pass any gas evolved into lime water.</li>
      <li>Divide the acid solution obtained into six portions.</li>
      <li>To the first portion, add NaOH(aq) in drops and then in excess.</li>
      <li>To the second portion, add NH₃(aq) in drops and then in excess.</li>
      <li>To the third portion, add dilute H₂SO₄(aq).</li>
      <li>To the fourth portion, add dilute HCl(aq).</li>
      <li>To the fifth portion, add BaCl₂(aq), followed by excess dilute HNO₃.</li>
      <li>To the sixth portion, add AgNO₃(aq), followed by excess dilute HNO₃.</li>
    </ol>

    <h3>Question 3 — General Practical Knowledge</h3>

    <ol>
      <li>State the colour of methyl orange in acid and in alkali.</li>
      <li>Why can methyl orange be used for the titration between H₂SO₄ and NaOH?</li>
      <li>What is the effect of C or its water mixture on red and blue litmus papers?</li>
      <li>What observation confirms starch?</li>
      <li>What observation confirms carbon dioxide?</li>
      <li>What is the purpose of adding BaCl₂ followed by dilute HNO₃?</li>
      <li>What is the purpose of adding AgNO₃ followed by dilute HNO₃?</li>
      <li>Why is dilute HNO₃ preferred before precipitation tests with AgNO₃?</li>
      <li>State two confirmatory tests for Pb²⁺ using only the supplied reagents.</li>
    </ol>

    <button class="blue" onclick="toggleBlock('solution')">
      VIEW BEST REPORT / MARKING SCHEME SOLUTION
    </button>
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
      <td>10.20</td>
      <td>9.80</td>
      <td>9.75</td>
      <td>9.80</td>
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
      <td>10.20</td>
      <td>9.80</td>
      <td>9.75</td>
      <td>9.80</td>
    </tr>
  </table>

  <div class="formula">
    Concordant titres:
    \\[
    9.80,\\quad 9.75,\\quad 9.80cm^3
    \\]

    \\[
    Average\\ titre=
    \\frac{9.80+9.75+9.80}{3}
    =
    9.78cm^3
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
    \\frac{C_A\\times9.78}{0.100\\times20.0}=\\frac{1}{2}
    \\]

    \\[
    C_A=
    \\frac{0.100\\times20.0}{2\\times9.78}
    =
    0.102mol\\,dm^{-3}
    \\]
  </div>

  <h4>Mass concentration of A</h4>

  <div class="formula">
    \\[
    Molar\\ mass\\ of\\ H_2SO_4=2(1)+32+4(16)=98g mol^{-1}
    \\]

    \\[
    Mass\\ concentration=0.102\\times98=10.0g\\,dm^{-3}
    \\]
  </div>

  <div class="note">
    <strong>Teacher explanation:</strong> Methyl orange changes from yellow in alkali
    to orange/pink at the end point as acid neutralizes NaOH. The acid titre is about
    half the alkali volume because H₂SO₄ is dibasic.
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
      <td>White suspension formed. Solid does not dissolve completely.</td>
      <td>C contains insoluble substance(s).</td>
    </tr>

    <tr>
      <td>Mixture/filtrate + red and blue litmus papers</td>
      <td>No change on red or blue litmus paper.</td>
      <td>Mixture is neutral or nearly neutral in water.</td>
    </tr>

    <tr>
      <td>Filtration</td>
      <td>Colourless filtrate and white residue obtained.</td>
      <td>Insoluble component remains as residue.</td>
    </tr>

    <tr>
      <td>Residue + iodine solution</td>
      <td>Blue-black colouration formed.</td>
      <td>Starch is present.</td>
    </tr>

    <tr>
      <td>Residue + dilute HNO₃ and warm</td>
      <td>Effervescence occurs. Colourless, odourless gas evolved.</td>
      <td>Carbonate suspected; gas is CO₂.</td>
    </tr>

    <tr>
      <td>Gas evolved + lime water</td>
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
      <td>White precipitate dissolves to give a colourless solution.</td>
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

    <tr>
      <td>Acid solution + BaCl₂(aq), then excess dilute HNO₃</td>
      <td>No white precipitate formed.</td>
      <td>SO₄²⁻ is absent in the acid solution.</td>
    </tr>

    <tr>
      <td>Acid solution + AgNO₃(aq), then excess dilute HNO₃</td>
      <td>No white precipitate formed.</td>
      <td>Cl⁻ is absent in the acid solution.</td>
    </tr>
  </table>

  <div class="warn">
    <strong>Important:</strong> BaCl₂ and AgNO₃ are captured here as correct anion-test
    reagents. Since C is lead(II) carbonate and starch, the expected positive anion test is
    carbonate with acid and lime water, not sulphate or chloride.
  </div>

  <h3>Equations and Chemical Explanation</h3>

  <h4>1. Neutralization in titration</h4>
  <div class="formula">
    \\[
    H_2SO_4(aq)+2NaOH(aq)\\rightarrow Na_2SO_4(aq)+2H_2O(l)
    \\]
  </div>

  <h4>2. Lead(II) carbonate with dilute nitric acid</h4>
  <div class="formula">
    \\[
    PbCO_3(s)+2HNO_3(aq)\\rightarrow Pb(NO_3)_2(aq)+CO_2(g)+H_2O(l)
    \\]
  </div>

  <h4>3. Carbon dioxide with lime water</h4>
  <div class="formula">
    \\[
    CO_2(g)+Ca(OH)_2(aq)\\rightarrow CaCO_3(s)+H_2O(l)
    \\]
  </div>

  <h4>4. Lead(II) hydroxide</h4>
  <div class="formula">
    \\[
    Pb^{2+}(aq)+2OH^-(aq)\\rightarrow Pb(OH)_2(s)
    \\]
  </div>

  <h4>5. Lead(II) hydroxide in excess NaOH</h4>
  <div class="formula">
    \\[
    Pb(OH)_2(s)+2OH^-(aq)\\rightarrow [Pb(OH)_4]^{2-}(aq)
    \\]
  </div>

  <h4>6. Lead(II) sulphate</h4>
  <div class="formula">
    \\[
    Pb^{2+}(aq)+SO_4^{2-}(aq)\\rightarrow PbSO_4(s)
    \\]
  </div>

  <h4>7. Lead(II) chloride</h4>
  <div class="formula">
    \\[
    Pb^{2+}(aq)+2Cl^-(aq)\\rightarrow PbCl_2(s)
    \\]
  </div>

  <h4>8. BaCl₂ test for sulphate</h4>
  <div class="formula">
    \\[
    Ba^{2+}(aq)+SO_4^{2-}(aq)\\rightarrow BaSO_4(s)
    \\]
  </div>
  <p>
    A white precipitate insoluble in dilute HNO₃ confirms SO₄²⁻. Here, no precipitate
    is expected because the original anion in C is carbonate, not sulphate.
  </p>

  <h4>9. AgNO₃ test for chloride</h4>
  <div class="formula">
    \\[
    Ag^+(aq)+Cl^-(aq)\\rightarrow AgCl(s)
    \\]
  </div>
  <p>
    A white precipitate of AgCl would confirm Cl⁻. Here, no precipitate is expected
    because chloride is not part of the original specimen C.
  </p>

  <h4>10. Starch and iodine</h4>
  <p>
    Iodine gives a blue-black colour with starch due to formation of a starch-iodine complex.
  </p>

  <h3>Question 3 — Practical Knowledge Solution</h3>

  <ol>
    <li>
      Methyl orange is red in acid and yellow in alkali. At the end point, it appears orange.
    </li>
    <li>
      Methyl orange can be used because H₂SO₄ and NaOH give a strong acid–strong base titration.
    </li>
    <li>
      The water mixture of C gives no change with red or blue litmus because lead(II) carbonate
      and starch are largely insoluble and do not produce a strongly acidic or alkaline solution.
    </li>
    <li>
      Iodine solution gives blue-black colouration with starch.
    </li>
    <li>
      CO₂ turns lime water milky.
    </li>
    <li>
      BaCl₂ followed by dilute HNO₃ tests for SO₄²⁻. A white precipitate insoluble in acid
      confirms sulphate.
    </li>
    <li>
      AgNO₃ followed by dilute HNO₃ tests for Cl⁻. A white precipitate confirms chloride.
    </li>
    <li>
      Dilute HNO₃ is preferred because nitrate salts are generally soluble and it does not
      introduce Cl⁻ or SO₄²⁻ that may confuse AgNO₃ or BaCl₂ tests.
    </li>
    <li>
      Pb²⁺ may be confirmed by white PbSO₄ with dilute H₂SO₄ and white PbCl₂ with dilute HCl.
    </li>
  </ol>
</section>

<section>
  <h2>Exam-Ready Takeaway</h2>

  <div class="grid">
    <div class="card">
      <h3>Methyl Orange</h3>
      <p>Yellow in alkali, red in acid, orange at end point.</p>
    </div>

    <div class="card">
      <h3>Litmus</h3>
      <p>No change with neutral mixtures; red turns blue in alkali, blue turns red in acid.</p>
    </div>

    <div class="card">
      <h3>BaCl₂</h3>
      <p>Tests for SO₄²⁻: white BaSO₄ insoluble in dilute HNO₃.</p>
    </div>

    <div class="card">
      <h3>AgNO₃</h3>
      <p>Tests for Cl⁻: white AgCl precipitate.</p>
    </div>

    <div class="card">
      <h3>Carbonate</h3>
      <p>Acid gives CO₂; CO₂ turns lime water milky.</p>
    </div>

    <div class="card">
      <h3>WAEC Rule</h3>
      <p>Observation first, inference second.</p>
    </div>
  </div>
</section>

</main>

<footer>
  <p>CHIATECH WAEC Chemistry Practical Practice Portal</p>
  <p>Learn · Know · Do · Create SUCCESS</p>
</footer>
  `;

  injectTest9Styles();
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

function injectTest9Styles() {
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