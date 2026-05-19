// prt2quantitativeanalysis.js

document.addEventListener("DOMContentLoaded", function () {
  document.title = "Part 2 Quantitative Analysis | WAEC Chemistry Practical";

  document.body.innerHTML = `
<header>
<h1>QUANTITATIVE ANALYSIS — PART 2</h1>
<p>
Advanced WAEC titration masterclass: mole calculations, dilution, mass concentration,
percentage purity, water of crystallization, error control and full examiner-style problem solving.
</p>
<div class="note">
Part 2 moves beyond basic titration table work into the deeper calculations WAEC may ask after the titre has been obtained.
</div>
</header>

<nav>
<ul>
<li><a href="#overview">Overview</a></li>
<li><a href="#formulae">Formulae</a></li>
<li><a href="#dilution">Dilution</a></li>
<li><a href="#purity">Purity</a></li>
<li><a href="#water">Water of Crystallization</a></li>
<li><a href="#waectask">WAEC Task</a></li>
<li><a href="#errors">Errors</a></li>
<li><a href="#summary">Summary</a></li>
</ul>
</nav>

<main>

<section id="overview">
<h2>1. What Makes Quantitative Analysis Advanced?</h2>

<p>
In Part 1, you learnt how to prepare the titration table, obtain concordant titres and calculate concentration.
In Part 2, you will learn how WAEC extends the same titration data into deeper questions.
</p>

<div class="grid">
<div class="card">
<img src="../assets/diagrams/advanced-calculation.png" alt="">
<h3>Calculation Extension</h3>
<p>WAEC may ask for concentration in mol dm⁻³, g dm⁻³, mass in a given volume, or moles of ions.</p>
</div>

<div class="card">
<img src="../assets/diagrams/dilution-flask.PNG" alt="">
<h3>Dilution</h3>
<p>You may be asked to prepare a weaker solution from a stronger one using \\(C_1V_1=C_2V_2\\).</p>
</div>

<div class="card">
<img src="../assets/diagrams/percentage-purity.PNG" alt="">
<h3>Purity</h3>
<p>You may be asked to determine percentage purity of an impure acid, alkali or carbonate sample.</p>
</div>
</div>

<div class="warning">
WAEC WARNING: Do not jump into substitution. First write the balanced equation and identify the mole ratio.
</div>
</section>

<section id="formulae">
<h2>2. Formula Bank for WAEC Quantitative Analysis</h2>

<table>
<tr><th>Formula</th><th>Meaning</th><th>Use</th></tr>
<tr><td>\\(n=CV\\)</td><td>Moles = concentration × volume in dm³</td><td>Finding amount of reacting substance</td></tr>
<tr><td>\\(C=\\frac{n}{V}\\)</td><td>Concentration = moles ÷ volume</td><td>Finding mol dm⁻³</td></tr>
<tr><td>\\(C=\\frac{mass\\ concentration}{molar\\ mass}\\)</td><td>Convert g dm⁻³ to mol dm⁻³</td><td>When solution strength is given in g dm⁻³</td></tr>
<tr><td>\\(C_1V_1=C_2V_2\\)</td><td>Dilution formula</td><td>Preparing diluted solution</td></tr>
<tr><td>\\(\\%\\ purity=\\frac{pure\\ mass}{impure\\ mass}\\times100\\)</td><td>Percentage purity</td><td>Impure sample questions</td></tr>
<tr><td>\\(mass=n \\times molar\\ mass\\)</td><td>Mass from moles</td><td>Mass calculation</td></tr>
</table>

<div class="formula">
\\[
H_2SO_4(aq)+2NaOH(aq)\\rightarrow Na_2SO_4(aq)+2H_2O(l)
\\]
\\[
H_2SO_4:NaOH=1:2
\\]
</div>

<button onclick="toggleClass('formulaclass')">ENTER FORMULA CLASS</button>

<div class="classroom" id="formulaclass">
<div class="teacher">
<h3>Teacher</h3>
<p>
Students, the formula is not the beginning. The equation is the beginning. The formula only works correctly when the mole ratio is correctly taken from the balanced equation.
</p>
</div>

<div class="student">
<h3>Student</h3>
<p>Sir, must I convert cm³ to dm³?</p>
</div>

<div class="teacher">
<h3>Teacher</h3>
<p>
Yes, when using \\(n=CV\\), volume must be in dm³. Since \\(1000cm^3=1dm^3\\), divide cm³ by 1000.
</p>
</div>
</div>
</section>

<section id="dilution">
<h2>3. Dilution Calculations</h2>

<div class="lab">
<h3>Example</h3>
<p>
Calculate the volume of \\(2.00mol\\,dm^{-3}\\) HCl required to prepare \\(500cm^3\\) of \\(0.200mol\\,dm^{-3}\\) HCl.
</p>

<div class="formula">
\\[
C_1V_1=C_2V_2
\\]
\\[
2.00\\times V_1=0.200\\times500
\\]
\\[
V_1=\\frac{0.200\\times500}{2.00}=50.0cm^3
\\]
</div>

<div class="success">
Volume of concentrated acid required = \\(50.0cm^3\\).  
Volume of water needed = \\(500-50=450cm^3\\).
</div>
</div>

<button onclick="toggleClass('dilutionclass')">ENTER DILUTION CLASS</button>

<div class="classroom" id="dilutionclass">
<div class="teacher">
<h3>Teacher</h3>
<p>
In the laboratory, you measure 50.0 cm³ of the stronger acid and make it up to 500 cm³ in a volumetric flask. You do not simply add 450 cm³ carelessly in any container if precision is required.
</p>
</div>

<div class="teacher">
<h3>Diagram Guide</h3>
<div class="diagram">
<img src="../assets/diagrams/dilution-volumetric-flask.png" alt="Dilution using a volumetric flask" style="width:100%;max-height:420px;object-fit:contain;background:white;border-radius:12px;margin-bottom:12px">
<strong>Teacher guide:</strong> Label the pipette or measuring cylinder, concentrated solution, volumetric flask, calibration mark and distilled water. The final volume must be made exactly to the mark.
</div>
</div>
</div>
</section>

<section id="purity">
<h2>4. Percentage Purity from Titration</h2>

<div class="lab">
<h3>WAEC-Style Example</h3>
<p>
An impure sample of sodium carbonate was dissolved and made up to \\(250cm^3\\). \\(25.0cm^3\\) of the solution required \\(24.80cm^3\\) of \\(0.100mol\\,dm^{-3}\\) HCl. Calculate the mass of pure sodium carbonate in the \\(250cm^3\\) solution and the percentage purity if the original impure sample weighed \\(1.50g\\).
</p>

<div class="formula">
\\[
Na_2CO_3+2HCl\\rightarrow2NaCl+H_2O+CO_2
\\]
\\[
n(HCl)=\\frac{0.100\\times24.80}{1000}=0.00248mol
\\]
\\[
n(Na_2CO_3)=\\frac{0.00248}{2}=0.00124mol
\\]
\\[
Mass\\ in\\ 25.0cm^3=0.00124\\times106=0.13144g
\\]
\\[
Mass\\ in\\ 250cm^3=0.13144\\times10=1.3144g
\\]
\\[
\\%\\ purity=\\frac{1.3144}{1.50}\\times100=87.6\\%
\\]
</div>
</div>

<button onclick="toggleClass('purityclass')">ENTER PURITY CLASS</button>

<div class="classroom" id="purityclass">
<div class="teacher">
<h3>Teacher</h3>
<p>
The most common mistake here is forgetting that only 25.0 cm³ was titrated, while the whole solution is 250 cm³. Since \\(250/25=10\\), multiply the mass in the aliquot by 10.
</p>
</div>

<div class="student">
<h3>Student</h3>
<p>Sir, why did we divide HCl moles by 2?</p>
</div>

<div class="teacher">
<h3>Teacher</h3>
<p>
Because the equation shows that 2 moles of HCl react with 1 mole of sodium carbonate. The carbonate moles are half the HCl moles.
</p>
</div>
</div>
</section>

<section id="water">
<h2>5. Water of Crystallization</h2>

<div class="lab">
<h3>Concept</h3>
<p>
Some salts contain water molecules in their crystal structure. WAEC may ask you to determine \\(x\\) in a formula such as \\(Na_2CO_3\\cdot xH_2O\\).
</p>

<h3>Example</h3>
<p>
A hydrated sodium carbonate sample has molar mass \\(286g\\,mol^{-1}\\). Find \\(x\\) in \\(Na_2CO_3\\cdot xH_2O\\).
</p>

<div class="formula">
\\[
Molar\\ mass\\ of\\ Na_2CO_3=106
\\]
\\[
Mass\\ of\\ water=286-106=180
\\]
\\[
x=\\frac{180}{18}=10
\\]
\\[
Formula=Na_2CO_3\\cdot10H_2O
\\]
</div>
</div>

<button onclick="toggleClass('waterclass')">ENTER WATER OF CRYSTALLIZATION CLASS</button>

<div class="classroom" id="waterclass">
<div class="teacher">
<h3>Teacher</h3>
<p>
Water of crystallization questions are easy when you separate the salt mass from the water mass. The water part is always divided by 18 because \\(H_2O=18\\).
</p>
</div>
</div>
</section>

<section id="waectask">
<h2>6. Full WAEC-Style Quantitative Analysis Task</h2>

<div class="lab">
<h3>Question</h3>
<p>
A is dilute \\(H_2SO_4\\). B is NaOH solution containing \\(4.0g\\,dm^{-3}\\). \\(25.0cm^3\\) of B required the following volumes of A:
</p>

<table>
<tr><th>Titration</th><th>Rough</th><th>1st</th><th>2nd</th><th>3rd</th></tr>
<tr><td>Final reading / cm³</td><td>12.40</td><td>12.15</td><td>12.10</td><td>12.15</td></tr>
<tr><td>Initial reading / cm³</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr>
<tr><td>Titre / cm³</td><td>12.40</td><td>12.15</td><td>12.10</td><td>12.15</td></tr>
</table>

<ol>
<li>Calculate the average titre.</li>
<li>Calculate concentration of B in \\(mol\\,dm^{-3}\\).</li>
<li>Calculate concentration of A in \\(mol\\,dm^{-3}\\).</li>
<li>Calculate mass concentration of A in \\(g\\,dm^{-3}\\).</li>
<li>Calculate moles of \\(H^+\\) in the average titre.</li>
<li>Calculate volume of A needed for \\(20.0cm^3\\) of B.</li>
</ol>

<button onclick="toggleClass('waecsolution')">ENTER FULL SOLUTION CLASS</button>

<div class="classroom" id="waecsolution">
<div class="teacher">
<h3>WAEC Solution</h3>

<div class="formula">
\\[
Average=\\frac{12.15+12.10+12.15}{3}=12.13cm^3
\\]
\\[
C_B=\\frac{4.0}{40}=0.100mol\\,dm^{-3}
\\]
\\[
\\frac{C_A\\times12.13}{0.100\\times25.0}=\\frac{1}{2}
\\]
\\[
C_A=\\frac{0.100\\times25.0}{2\\times12.13}=0.103mol\\,dm^{-3}
\\]
\\[
Mass\\ concentration=0.103\\times98=10.1g\\,dm^{-3}
\\]
\\[
n(H_2SO_4)=\\frac{0.103\\times12.13}{1000}=1.25\\times10^{-3}mol
\\]
\\[
n(H^+)=2.50\\times10^{-3}mol
\\]
\\[
V_A=\\frac{0.100\\times20.0}{2\\times0.103}=9.71cm^3
\\]
</div>
</div>
</div>
</div>
</section>

<section id="errors">
<h2>7. Accuracy, Error Control and WAEC Marking</h2>

<table>
<tr><th>Problem</th><th>Result</th><th>How to Avoid It</th></tr>
<tr><td>Using rough titre in average</td><td>Wrong average</td><td>Use only concordant titres</td></tr>
<tr><td>Wrong mole ratio</td><td>Wrong concentration</td><td>Write balanced equation first</td></tr>
<tr><td>Not converting cm³ to dm³</td><td>Wrong moles</td><td>Divide volume by 1000</td></tr>
<tr><td>Endpoint overshot</td><td>Titre too high</td><td>Add solution dropwise near endpoint</td></tr>
<tr><td>Endpoint stopped too early</td><td>Titre too low</td><td>Swirl well and wait for permanent colour change</td></tr>
<tr><td>No unit</td><td>Loss of mark</td><td>Attach \\(mol\\,dm^{-3}\\), \\(g\\,dm^{-3}\\), cm³ or mol</td></tr>
</table>

<div class="warning">
WAEC STRATEGY: Your calculation must be readable. Arrange work in steps: equation, mole ratio, given data, substitution, answer and unit.
</div>
</section>

<section id="summary">
<h2>8. Part 2 Exam-Ready Summary</h2>

<div class="grid">
<div class="card">
<h3>Dilution</h3>
<p>Use \\(C_1V_1=C_2V_2\\).</p>
</div>

<div class="card">
<h3>Purity</h3>
<p>\\(\\% purity=\\frac{pure\\ mass}{impure\\ mass}\\times100\\).</p>
</div>

<div class="card">
<h3>Hydrated Salt</h3>
<p>Subtract anhydrous mass from hydrated mass, then divide water mass by 18.</p>
</div>

<div class="card">
<h3>Titration</h3>
<p>Always begin with the balanced equation and mole ratio.</p>
</div>

<div class="card">
<h3>Average Titre</h3>
<p>Average only concordant titres. Ignore rough titre.</p>
</div>

<div class="card">
<h3>Final Answer</h3>
<p>Always include units and suitable significant figures.</p>
</div>
</div>

<div class="success">
You are ready for Quantitative Analysis Part 3: complete WAEC practical model papers and independent calculation mastery.
</div>
</section>

</main>

<footer>
<h3>CHIATECH STEM Academy</h3>
<p>WAEC Chemistry Practical Quantitative Analysis Portal</p>
<p>Learn • Know • Do • Create SUCCESS</p>
</footer>
  `;

  injectStyles();
  loadMathJax();
});

function toggleClass(id) {
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
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Arial,Helvetica,sans-serif;background:#eef4ff;color:#10233f;line-height:1.8}
header{background:linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url('../assets/diagrams/advanced-calculation.png');background-size:cover;background-position:center;color:white;text-align:center;padding:90px 20px}
header h1{font-size:clamp(2rem,5vw,4rem);margin-bottom:18px}
header p{max-width:1120px;margin:auto;font-size:1.08rem}
nav{background:#061225;padding:14px;position:sticky;top:0;z-index:1000}
nav ul{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;list-style:none}
nav a{color:white;text-decoration:none;font-weight:700;padding:10px 16px;border-radius:10px}
nav a:hover{background:#2563eb}
main{max-width:1320px;margin:auto;padding:25px}
section{background:white;margin-bottom:28px;padding:30px;border-radius:20px;box-shadow:0 8px 30px rgba(0,0,0,.08)}
h2{color:#0b2d63;margin-bottom:16px;font-size:2rem}
h3{color:#174ea6;margin:22px 0 10px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:18px}
.card{background:#f8fbff;border:1px solid #d6e4ff;border-radius:16px;padding:22px}
.card img{width:100%;height:220px;object-fit:cover;border-radius:12px;margin-bottom:12px}
.note{background:#dbeafe;border-left:8px solid #2563eb;padding:16px;border-radius:12px;margin:18px 0}
.success{background:#dcfce7;border-left:8px solid #16a34a;padding:16px;border-radius:12px;margin:18px 0}
.warning{background:#fee2e2;border-left:8px solid #dc2626;padding:16px;border-radius:12px;margin:18px 0}
.gold{background:#fff7cc;border-left:8px solid #f59e0b;padding:16px;border-radius:12px;margin:18px 0}
.lab{background:#f8fafc;border:1px solid #dbeafe;border-radius:18px;padding:24px;margin-top:18px}
.formula{background:#eff6ff;border-left:6px solid #2563eb;border-radius:12px;padding:15px;margin:16px 0;overflow-x:auto}
table{width:100%;border-collapse:collapse;margin-top:18px}
th{background:#0b2d63;color:white;padding:13px}
td{border:1px solid #cbd5e1;padding:12px;vertical-align:top}
button{background:#0b2d63;color:white;border:none;padding:14px 24px;border-radius:12px;font-size:1rem;font-weight:800;cursor:pointer;margin-top:18px}
button:hover{background:#2563eb}
.classroom{display:none;background:#f1f7ff;border:2px dashed #2563eb;padding:26px;border-radius:18px;margin-top:22px}
.teacher{background:white;border-left:7px solid #2563eb;border-radius:10px;padding:18px;margin-bottom:16px}
.student{background:#fffdf4;border-left:7px solid #f59e0b;border-radius:10px;padding:18px;margin-bottom:16px}
.diagram{border:2px dashed #94a3b8;background:#f8fafc;border-radius:16px;padding:18px;text-align:center;font-weight:700;color:#475569;margin:16px 0}
ul,ol{margin-left:22px}
li{margin-bottom:9px}
footer{background:#061225;color:white;text-align:center;padding:40px 20px;margin-top:40px}
@media(max-width:768px){section{padding:20px}header{padding:70px 15px}}
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
