// test10.js
// WAEC Chemistry Practical — Test 10

document.addEventListener("DOMContentLoaded", function () {
  document.title = "WAEC Chemistry Practical Test 10";

  document.body.innerHTML = `
<header>
  <h1>WAEC Chemistry Practical — Test 10</h1>
  <p>
    Extended master practice in the WAEC three-question pattern:
    titration, qualitative analysis, and practical knowledge with diagram questions.
  </p>
</header>

<main>

<section>
  <h2>Specimens and Reagents for This Practice</h2>

  <div class="grid">
    <div class="card">
      <h3>A</h3>
      <p>Dilute tetraoxosulphate(VI) acid, \\(H_2SO_4\\).</p>
    </div>

    <div class="card">
      <h3>B</h3>
      <p>Sodium hydroxide solution containing \\(4.0g\\,dm^{-3}\\) of NaOH.</p>
    </div>

    <div class="card">
      <h3>C</h3>
      <p>Uniform 1:1 mixture of lead(II) carbonate and starch.</p>
    </div>
  </div>

  <div class="warn">
    <strong>Only reagents captured:</strong> dilute NaOH, dilute HCl, dilute HNO₃,
    AgNO₃, BaCl₂, aqueous NH₃, lime water, red and blue litmus papers,
    dilute H₂SO₄, iodine solution, methyl orange and phenolphthalein.
  </div>
</section>

<section>
  <h2>Teacher–Student Class Before the Test</h2>
  <button onclick="toggleBlock('classroom')">ENTER CLASS</button>

  <div id="classroom" class="hidden">

    <div class="talk">
      <strong>Teacher:</strong> Today, we are not just memorising observations. We are going to
      understand why each observation appears. WAEC rewards accurate observation first,
      then correct inference.
    </div>

    <div class="talk">
      <strong>Student:</strong> Sir, why is the acid titre around half of the NaOH volume?
    </div>

    <div class="talk">
      <strong>Teacher:</strong> Excellent question. \\(H_2SO_4\\) is dibasic. One mole of it releases
      two moles of \\(H^+\\). Therefore, one mole of \\(H_2SO_4\\) neutralizes two moles of NaOH.
    </div>

    <div class="formula">
      \\[
      H_2SO_4 + 2NaOH \\rightarrow Na_2SO_4 + 2H_2O
      \\]
    </div>

    <div class="talk">
      <strong>Teacher:</strong> In qualitative analysis, C contains lead(II) carbonate and starch.
      Lead(II) carbonate is insoluble in water, so it remains as a white residue. Starch gives
      blue-black colour with iodine.
    </div>

    <div class="talk">
      <strong>Student:</strong> Why do we add dilute nitric acid to C?
    </div>

    <div class="talk">
      <strong>Teacher:</strong> Dilute \\(HNO_3\\) reacts with carbonate to release carbon dioxide
      and forms soluble lead(II) nitrate, which gives \\(Pb^{2+}\\) for cation tests.
    </div>

    <div class="formula">
      \\[
      PbCO_3(s)+2HNO_3(aq)\\rightarrow Pb(NO_3)_2(aq)+CO_2(g)+H_2O(l)
      \\]
    </div>

    <div class="talk">
      <strong>Teacher:</strong> For anion tests, BaCl₂ checks for sulphate and AgNO₃ checks for
      chloride. But because C is lead(II) carbonate and starch, the positive anion evidence
      should be carbonate: effervescence with acid and lime water turning milky.
    </div>

    <div class="diagram">
      Draw diagram: complete titration setup showing burette, retort stand, pipette,
      conical flask, white tile and indicator.
    </div>

    <div class="diagram">
      Draw diagram: delivery tube passing CO₂ into lime water.
    </div>

    <div class="diagram">
      Draw diagram: filtration setup showing filter funnel, filter paper, residue and filtrate.
    </div>
  </div>
</section>

<section>
  <h2>Enter Test 10 Question Paper</h2>
  <button class="gold" onclick="toggleBlock('paper')">OPEN TEST 10</button>

  <div id="paper" class="hidden">

    <h3>Question 1 — Quantitative Analysis</h3>

    <p>
      A is dilute \\(H_2SO_4\\). B is NaOH solution containing \\(4.0g\\) of NaOH per \\(dm^3\\).
    </p>

    <p>
      Put A into the burette. Pipette \\(25.0cm^3\\) of B into a conical flask.
      Add 2 drops of phenolphthalein and titrate with A until the pink colour just disappears.
      Repeat the titration to obtain concordant titres.
    </p>

    <ol>
      <li>Tabulate your readings.</li>
      <li>Calculate the average volume of A used.</li>
      <li>Calculate the concentration of B in \\(mol\\,dm^{-3}\\).</li>
      <li>Calculate the concentration of A in \\(mol\\,dm^{-3}\\).</li>
      <li>Calculate the mass concentration of A in \\(g\\,dm^{-3}\\).</li>
      <li>Calculate the number of moles of \\(H^+\\) in the average titre of A.</li>
      <li>Calculate the volume of A that would neutralize \\(20.0cm^3\\) of B.</li>
      <li>State the colour change at the endpoint.</li>
    </ol>

    <div class="formula">
      \\[
      H_2SO_4(aq)+2NaOH(aq)\\rightarrow Na_2SO_4(aq)+2H_2O(l)
      \\]
    </div>

    <p>[H = 1, O = 16, S = 32, Na = 23]</p>

    <h3>Question 2 — Qualitative Analysis</h3>

    <p>
      C is a mixture of lead(II) carbonate and starch. Carry out the following tests.
      Record observations and inferences.
    </p>

    <ol>
      <li>Add distilled water to C and shake.</li>
      <li>Test the water mixture with red and blue litmus papers.</li>
      <li>Filter the mixture. Keep the residue and filtrate.</li>
      <li>Add iodine solution to a portion of the residue.</li>
      <li>Add dilute \\(HNO_3\\) to another portion of the residue and warm gently.</li>
      <li>Pass any gas evolved into lime water.</li>
      <li>Divide the acid solution into six portions.</li>
      <li>Add NaOH(aq) in drops and then in excess to the first portion.</li>
      <li>Add NH₃(aq) in drops and then in excess to the second portion.</li>
      <li>Add dilute H₂SO₄ to the third portion.</li>
      <li>Add dilute HCl to the fourth portion.</li>
      <li>Add BaCl₂(aq), followed by excess dilute HNO₃, to the fifth portion.</li>
      <li>Add AgNO₃(aq), followed by excess dilute HNO₃, to the sixth portion.</li>
    </ol>

    <h3>Question 3 — Practical Knowledge and Diagram Questions</h3>

    <ol>
      <li>Draw and label a complete titration setup.</li>
      <li>Draw and label a filtration setup.</li>
      <li>Draw and label an apparatus for testing CO₂ with lime water.</li>
      <li>Draw a burette scale showing a correct meniscus reading of \\(12.15cm^3\\).</li>
      <li>State two precautions in reading a burette.</li>
      <li>Why is a white tile placed under the conical flask?</li>
      <li>Why is the pipette rinsed with B before use?</li>
      <li>Why is the burette rinsed with A before use?</li>
      <li>State the colour of phenolphthalein in acid and alkali.</li>
      <li>State the colour of methyl orange in acid and alkali.</li>
      <li>State the test for starch.</li>
      <li>State the confirmatory test for carbon dioxide.</li>
      <li>What is the purpose of BaCl₂ in qualitative analysis?</li>
      <li>What is the purpose of AgNO₃ in qualitative analysis?</li>
      <li>Why is dilute HNO₃ preferred before AgNO₃ test?</li>
      <li>Give two tests that support the presence of \\(Pb^{2+}\\).</li>
      <li>Why must lead(II) compounds be handled carefully?</li>
      <li>Differentiate observation from inference using one example from this practical.</li>
    </ol>

    <button class="blue" onclick="toggleBlock('solution')">VIEW FULL WAEC MARKING SCHEME</button>
  </div>
</section>

<section id="solution" class="hidden">
  <h2>Full WAEC-Style Marking Scheme and Teacher Explanation</h2>

  <h3>Question 1 Solution</h3>

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
    Molar\\ mass\\ of\\ NaOH=23+16+1=40g\\,mol^{-1}
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
    Molar\\ mass\\ of\\ H_2SO_4=98g\\,mol^{-1}
    \\]

    \\[
    Mass\\ concentration=0.103\\times98=10.1g\\,dm^{-3}
    \\]
  </div>

  <h4>Moles of \\(H^+\\) in average titre</h4>

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
    n(H^+)=2(1.25\\times10^{-3})
    =
    2.50\\times10^{-3}mol
    \\]
  </div>

  <h4>Volume of A required for \\(20.0cm^3\\) of B</h4>

  <div class="formula">
    \\[
    \\frac{C_A V_A}{C_B V_B}=\\frac{1}{2}
    \\]

    \\[
    V_A=\\frac{0.100\\times20.0}{2\\times0.103}
    =
    9.71cm^3
    \\]
  </div>

  <div class="note">
    Endpoint with phenolphthalein: pink to colourless.
  </div>

  <h3>Question 2 Solution</h3>

  <table>
    <tr>
      <th>Test</th>
      <th>Observation</th>
      <th>Inference</th>
    </tr>

    <tr>
      <td>C + distilled water and shake</td>
      <td>White suspension formed; solid does not dissolve completely.</td>
      <td>C contains insoluble substances.</td>
    </tr>

    <tr>
      <td>Mixture + red and blue litmus</td>
      <td>No change on red or blue litmus paper.</td>
      <td>The mixture is neutral or nearly neutral in water.</td>
    </tr>

    <tr>
      <td>Filtration</td>
      <td>Colourless filtrate and white residue obtained.</td>
      <td>Insoluble residue retained.</td>
    </tr>

    <tr>
      <td>Residue + iodine solution</td>
      <td>Blue-black colouration formed.</td>
      <td>Starch is present.</td>
    </tr>

    <tr>
      <td>Residue + dilute HNO₃ and warm</td>
      <td>Effervescence; colourless odourless gas evolved.</td>
      <td>Carbonate suspected; gas is CO₂.</td>
    </tr>

    <tr>
      <td>Gas + lime water</td>
      <td>Lime water turns milky.</td>
      <td>CO₂ confirmed; CO₃²⁻ present.</td>
    </tr>

    <tr>
      <td>Acid solution + NaOH in drops</td>
      <td>White precipitate formed.</td>
      <td>Pb²⁺, Al³⁺ or Zn²⁺ may be present.</td>
    </tr>

    <tr>
      <td>Then excess NaOH</td>
      <td>White precipitate dissolves to give colourless solution.</td>
      <td>Amphoteric ion present.</td>
    </tr>

    <tr>
      <td>Acid solution + NH₃ in drops</td>
      <td>White precipitate formed.</td>
      <td>Pb²⁺, Al³⁺ or Zn²⁺ may be present.</td>
    </tr>

    <tr>
      <td>Then excess NH₃</td>
      <td>White precipitate remains insoluble.</td>
      <td>Pb²⁺ indicated.</td>
    </tr>

    <tr>
      <td>Acid solution + dilute H₂SO₄</td>
      <td>White precipitate formed.</td>
      <td>Pb²⁺ confirmed as PbSO₄.</td>
    </tr>

    <tr>
      <td>Acid solution + dilute HCl</td>
      <td>White precipitate formed.</td>
      <td>Pb²⁺ confirmed as PbCl₂.</td>
    </tr>

    <tr>
      <td>Acid solution + BaCl₂, then dilute HNO₃</td>
      <td>No white precipitate formed.</td>
      <td>SO₄²⁻ absent in the original specimen.</td>
    </tr>

    <tr>
      <td>Acid solution + AgNO₃, then dilute HNO₃</td>
      <td>No white precipitate formed.</td>
      <td>Cl⁻ absent in the original specimen.</td>
    </tr>
  </table>

  <h3>Equations and Chemical Facts</h3>

  <div class="formula">
    \\[
    PbCO_3(s)+2HNO_3(aq)\\rightarrow Pb(NO_3)_2(aq)+CO_2(g)+H_2O(l)
    \\]
  </div>

  <div class="formula">
    \\[
    CO_2(g)+Ca(OH)_2(aq)\\rightarrow CaCO_3(s)+H_2O(l)
    \\]
  </div>

  <div class="formula">
    \\[
    Pb^{2+}(aq)+2OH^-(aq)\\rightarrow Pb(OH)_2(s)
    \\]
  </div>

  <div class="formula">
    \\[
    Pb(OH)_2(s)+2OH^-(aq)\\rightarrow [Pb(OH)_4]^{2-}(aq)
    \\]
  </div>

  <div class="formula">
    \\[
    Pb^{2+}(aq)+SO_4^{2-}(aq)\\rightarrow PbSO_4(s)
    \\]
  </div>

  <div class="formula">
    \\[
    Pb^{2+}(aq)+2Cl^-(aq)\\rightarrow PbCl_2(s)
    \\]
  </div>

  <div class="formula">
    \\[
    Ba^{2+}(aq)+SO_4^{2-}(aq)\\rightarrow BaSO_4(s)
    \\]
  </div>

  <div class="formula">
    \\[
    Ag^+(aq)+Cl^-(aq)\\rightarrow AgCl(s)
    \\]
  </div>

  <h3>Question 3 Solution: Diagram and Practical Knowledge</h3>

  <table>
    <tr>
      <th>Diagram Question</th>
      <th>Expected Features</th>
    </tr>
    <tr>
      <td>Complete titration setup</td>
      <td>Burette, retort stand, clamp, conical flask, white tile, pipette, indicator drops, labelled acid in burette and alkali in flask.</td>
    </tr>
    <tr>
      <td>Filtration setup</td>
      <td>Filter funnel, filter paper, beaker/conical flask, residue on paper, filtrate below.</td>
    </tr>
    <tr>
      <td>CO₂ test setup</td>
      <td>Test tube with carbonate + acid, delivery tube, lime water in another tube, bubbles entering lime water.</td>
    </tr>
    <tr>
      <td>Burette reading diagram</td>
      <td>Eye level, bottom of meniscus, reading at 12.15 cm³, avoid parallax error.</td>
    </tr>
  </table>

  <ol>
    <li>Read burette at eye level and record to two decimal places.</li>
    <li>White tile helps to see the end-point colour change clearly.</li>
    <li>Pipette is rinsed with B to avoid dilution of B.</li>
    <li>Burette is rinsed with A to avoid dilution of A.</li>
    <li>Phenolphthalein: colourless in acid, pink in alkali.</li>
    <li>Methyl orange: red in acid, yellow in alkali, orange at end point.</li>
    <li>Starch test: iodine gives blue-black colour.</li>
    <li>CO₂ test: turns lime water milky.</li>
    <li>BaCl₂ tests for sulphate; white BaSO₄ insoluble in dilute HNO₃ confirms sulphate.</li>
    <li>AgNO₃ tests for chloride; white AgCl confirms chloride.</li>
    <li>Dilute HNO₃ is preferred because it does not introduce chloride or sulphate ions.</li>
    <li>Pb²⁺: white precipitate with NaOH soluble in excess; white PbSO₄ with dilute H₂SO₄; white PbCl₂ with dilute HCl.</li>
    <li>Lead(II) compounds are toxic and must be handled carefully.</li>
    <li>Observation: “lime water turns milky.” Inference: “CO₂ is present.”</li>
  </ol>

  <div class="danger">
    <strong>WAEC marking trap:</strong> Do not write only “CO₂ present” under observation.
    Observation must be what is seen: effervescence, colourless odourless gas, lime water turns milky.
  </div>
</section>

<section>
  <h2>Final Exam-Ready Master Summary</h2>

  <div class="grid">
    <div class="card">
      <h3>Titration</h3>
      <p>\\(H_2SO_4:NaOH = 1:2\\). Endpoint with phenolphthalein is pink to colourless.</p>
    </div>

    <div class="card">
      <h3>Carbonate</h3>
      <p>Acid gives CO₂; CO₂ turns lime water milky.</p>
    </div>

    <div class="card">
      <h3>Starch</h3>
      <p>Iodine solution gives blue-black colouration.</p>
    </div>

    <div class="card">
      <h3>Lead(II)</h3>
      <p>White precipitate with NaOH; soluble in excess NaOH; insoluble in excess NH₃.</p>
    </div>

    <div class="card">
      <h3>BaCl₂</h3>
      <p>Tests for sulphate: white BaSO₄ insoluble in dilute HNO₃.</p>
    </div>

    <div class="card">
      <h3>AgNO₃</h3>
      <p>Tests for chloride: white AgCl precipitate.</p>
    </div>
  </div>
</section>

</main>

<footer>
  <p>CHIATECH WAEC Chemistry Practical Practice Portal</p>
  <p>Learn · Know · Do · Create SUCCESS</p>
</footer>
  `;

  injectTest10Styles();
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

function injectTest10Styles() {
  const style = document.createElement("style");
  style.textContent = `
*{box-sizing:border-box}
body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#f1f5f9;color:#0f172a;line-height:1.75}
header{background:linear-gradient(135deg,#022c22,#0f766e,#14b8a6);color:white;text-align:center;padding:46px 18px}
header h1{margin:0;font-size:clamp(2rem,5vw,3.7rem)}
header p{max-width:1050px;margin:14px auto 0}
main{max-width:1220px;margin:auto;padding:24px 14px 80px}
section{background:white;margin:22px 0;padding:24px;border-radius:22px;box-shadow:0 12px 30px rgba(15,23,42,.08)}
h2{color:#0f766e;margin-top:0}
h3{color:#1d4ed8;margin-top:28px}
h4{color:#0f172a;margin-bottom:6px}
button{border:0;background:#0f766e;color:white;padding:12px 18px;border-radius:12px;font-weight:800;cursor:pointer;margin:8px 6px 8px 0}
button:hover{background:#115e59}
.blue{background:#1d4ed8}
.blue:hover{background:#1e40af}
.gold{background:#b45309}
.gold:hover{background:#92400e}
.hidden{display:none}
.note{background:#ecfdf5;border-left:5px solid #10b981;padding:14px;border-radius:12px;margin:14px 0}
.warn{background:#fff7ed;border-left:5px solid #f97316;padding:14px;border-radius:12px;margin:14px 0}
.danger{background:#fef2f2;border-left:5px solid #dc2626;padding:14px;border-radius:12px;margin:14px 0}
.talk{background:#f8fafc;border-left:5px solid #6366f1;padding:14px;border-radius:12px;margin:14px 0}
.formula{background:#eff6ff;border-left:5px solid #2563eb;padding:14px;border-radius:12px;margin:14px 0;overflow-x:auto}
table{width:100%;border-collapse:collapse;margin:16px 0;background:white}
th,td{border:1px solid #cbd5e1;padding:10px;vertical-align:top}
th{background:#0f766e;color:white}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px}
.card{background:#f8fafc;border:1px solid #dbeafe;border-radius:18px;padding:18px}
.diagram{border:2px dashed #94a3b8;background:#f8fafc;padding:18px;border-radius:16px;text-align:center;color:#475569;font-weight:700;margin:16px 0}
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