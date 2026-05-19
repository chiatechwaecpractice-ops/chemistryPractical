// prt1qualitativeanalysis.js
// CHIATECH WAEC Chemistry Practical Portal — Qualitative Analysis Part 1

document.addEventListener("DOMContentLoaded", function () {
  document.title = "Part 1 Qualitative Analysis | CHIATECH WAEC Chemistry Practical Portal";

  document.body.innerHTML = `
<header>

<h1>QUALITATIVE ANALYSIS — PART 1</h1>

<p>
CHIATECH STEM Academy — WAEC Chemistry Practical Masterclass.
This portal introduces candidates to the real world of qualitative analysis exactly
as expected in WAEC, NECO and NABTEB practical examinations.
Students will learn how to observe, infer, identify gases, radicals, cations and anions
using laboratory reagents and real practical reasoning.
</p>

<div class="hero-note">
This class is designed like a real chemistry laboratory. Every reaction,
observation and explanation here follows actual laboratory behaviour and
WAEC marking scheme standards.
</div>

</header>

<nav>
<ul>
<li><a href="#intro">Introduction</a></li>
<li><a href="#apparatus">Apparatus</a></li>
<li><a href="#concept">Core Concepts</a></li>
<li><a href="#experiment1">Experiment 1</a></li>
<li><a href="#experiment2">Experiment 2</a></li>
<li><a href="#teacherlab">Enter Class</a></li>
<li><a href="#videos">Video Support</a></li>
</ul>
</nav>

<main>

<section id="intro">

<h2>Introduction to Qualitative Analysis</h2>

<p>
Qualitative analysis is the branch of chemistry practical that deals with the identification
of substances present in a sample. Unlike quantitative analysis which measures amount,
qualitative analysis focuses on:
</p>

<ul>
<li>Identifying gases produced during reactions</li>
<li>Identifying acids, bases and salts</li>
<li>Testing for cations and anions</li>
<li>Recognizing colours of precipitates</li>
<li>Interpreting observations correctly</li>
<li>Connecting laboratory evidence to chemical inference</li>
</ul>

<div class="highlight">
WAEC SECRET:
Observation is what you SEE. Inference is what the observation MEANS.
Most students lose marks because they confuse the two.
</div>

<div class="grid">

<div class="card">
<img src="../assets/diagrams/testtubes.PNG" alt="">
<h3>Test Tube Reactions</h3>
<p>
Most qualitative tests are carried out in test tubes using a few drops of reagents.
Students must observe colour changes, precipitates and gases carefully.
</p>
</div>

<div class="card">
<img src="../assets/diagrams/laboratoryreagents.PNG" alt="">
<h3>Chemical Reagents</h3>
<p>
Reagents such as NaOH, NH₃, AgNO₃, BaCl₂ and HNO₃ help identify unknown ions.
Each reagent has a unique role in analysis.
</p>
</div>

<div class="card">
<img src="../assets/diagrams/waecchemistrypractical.PNG" alt="">
<h3>WAEC Practical Style</h3>
<p>
WAEC practical questions are designed to test observation, explanation,
equations and interpretation of results.
</p>
</div>

</div>

</section>

<section id="apparatus">

<h2>Common Apparatus Used in Qualitative Analysis</h2>

<div class="grid">

<div class="card">
<img src="../assets/diagrams/testtubes.PNG" alt="">
<h3>Test Tube</h3>
<p>
Used for carrying out reactions involving small quantities of chemicals.
</p>
</div>

<div class="card">
<img src="../assets/diagrams/dropper.PNG" alt="">
<h3>Dropper</h3>
<p>
Used for adding reagents dropwise during tests.
</p>
</div>

<div class="card">
<img src="../assets/diagrams/bunsenburner.PNG" alt="">
<h3>Bunsen Burner</h3>
<p>
Provides heat during warming and gas tests.
</p>
</div>

<div class="card">
<img src="../assets/diagrams/filterfunnel.PNG" alt="">
<h3>Filtration Apparatus</h3>
<p>
Used to separate filtrate from residue.
</p>
</div>

</div>

<h3>Safety Rules in the Chemistry Laboratory</h3>

<ul>
<li>Never taste chemicals</li>
<li>Do not smell gases directly</li>
<li>Handle acids carefully</li>
<li>Use goggles where necessary</li>
<li>Wash hands after experiments</li>
<li>Point heated test tubes away from people</li>
</ul>

<div class="warning">
WARNING:
Never add water to concentrated acid.
Always add acid slowly to water.
</div>

</section>

<section id="concept">

<h2>Core Concepts Every WAEC Candidate Must Understand</h2>

<table>

<tr>
<th>Concept</th>
<th>Meaning</th>
<th>WAEC Importance</th>
</tr>

<tr>
<td>Effervescence</td>
<td>Rapid bubbling due to gas evolution</td>
<td>Usually indicates carbonate reacting with acid</td>
</tr>

<tr>
<td>Precipitate</td>
<td>Solid formed from solution reaction</td>
<td>Colour helps identify ions</td>
</tr>

<tr>
<td>Filtrate</td>
<td>Liquid passing through filter paper</td>
<td>Used for further tests</td>
</tr>

<tr>
<td>Residue</td>
<td>Solid remaining on filter paper</td>
<td>Often analyzed separately</td>
</tr>

<tr>
<td>Inference</td>
<td>Meaning of an observation</td>
<td>Must match observations correctly</td>
</tr>

</table>

</section>

<section id="experiment1">

<h2>Experiment 1 — Testing for Carbonate Using Acid</h2>

<div class="experiment-box">

<h3>Aim</h3>

<p>
To identify carbonate ion using dilute acid and lime water.
</p>

<h3>Apparatus/Reagents</h3>

<ul>
<li>Test tube</li>
<li>Lime water</li>
<li>Dilute HNO₃</li>
<li>Lead(II) carbonate mixture</li>
<li>Delivery tube</li>
</ul>

<h3>Procedure</h3>

<ol>
<li>Put a small quantity of sample into a test tube.</li>
<li>Add dilute HNO₃ carefully.</li>
<li>Observe effervescence.</li>
<li>Pass evolved gas into lime water.</li>
<li>Observe the change in lime water.</li>
</ol>

<div class="success">
Expected Observation:
Effervescence occurs and lime water turns milky.
</div>

<h3>Chemical Equations</h3>

<p>
PbCO₃(s) + 2HNO₃(aq) → Pb(NO₃)₂(aq) + CO₂(g) + H₂O(l)
</p>

<p>
CO₂(g) + Ca(OH)₂(aq) → CaCO₃(s) + H₂O(l)
</p>

<h3>Inference</h3>

<p>
Carbonate ion is present.
Carbon dioxide gas evolved.
</p>

</div>

<button onclick="toggleClass('teacherlab1')">
ENTER CLASS SESSION
</button>

<div class="classroom" id="teacherlab1">

<div class="teacher">
<h3>Teacher</h3>
<p>
Students, notice that the gas produced is colourless.
You must NEVER write only “gas evolved”.
WAEC expects FULL observations.
</p>
</div>

<div class="student">
<h3>Student</h3>
<p>
Sir, why does lime water turn milky?
</p>
</div>

<div class="teacher">
<h3>Teacher</h3>
<p>
Excellent question.
Carbon dioxide reacts with calcium hydroxide in lime water
to form insoluble calcium carbonate which appears milky.
</p>
</div>

<div class="teacher">
<h3>Teacher Practical Breakdown</h3>

<ul>
<li>Bubbles = gas formation</li>
<li>Gas + lime water → milky = CO₂ confirmed</li>
<li>Carbonates react with acids to release CO₂</li>
<li>This reaction is common in baking powder and antacid tablets</li>
</ul>

</div>

</div>

</section>

<section id="experiment2">

<h2>Experiment 2 — Testing for Starch Using Iodine</h2>

<div class="experiment-box">

<h3>Aim</h3>

<p>
To test for starch in a sample using iodine solution.
</p>

<h3>Procedure</h3>

<ol>
<li>Place a little quantity of sample on a watch glass.</li>
<li>Add 2 drops of iodine solution.</li>
<li>Observe colour change.</li>
</ol>

<div class="success">
Expected Observation:
Blue-black colouration appears.
</div>

<h3>Inference</h3>

<p>
Starch is present.
</p>

<h3>Theory</h3>

<p>
Iodine molecules fit into the spiral structure of starch
forming a blue-black complex.
</p>

</div>

<button onclick="toggleClass('teacherlab2')">
ENTER CLASS SESSION
</button>

<div class="classroom" id="teacherlab2">

<div class="teacher">
<h3>Teacher</h3>

<p>
This is one of the most famous food tests in chemistry.
WAEC likes using starch because the colour change is sharp and easy to observe.
</p>

</div>

<div class="student">
<h3>Student</h3>

<p>
Sir, can iodine test sugar?
</p>

</div>

<div class="teacher">
<h3>Teacher</h3>

<p>
No.
Iodine specifically tests starch.
Simple sugars like glucose do not produce blue-black colouration.
</p>

</div>

<div class="teacher">
<h3>Real-Life Application</h3>

<ul>
<li>Food industries test starch in products</li>
<li>Used in quality control</li>
<li>Used in biology food tests</li>
<li>Used in pharmaceutical industries</li>
</ul>

</div>

</div>

</section>

<section id="teacherlab">

<h2>MASTER WAEC CLASSROOM — HOW EXAMINERS MARK</h2>

<button onclick="toggleClass('bigclass')">
ENTER MASTER CLASS
</button>

<div class="classroom" id="bigclass">

<div class="teacher">

<h3>Teacher</h3>

<p>
Candidates fail practical chemistry mainly because they memorize instead of understanding.
WAEC examiners look for:
</p>

<ul>
<li>Correct observation</li>
<li>Correct inference</li>
<li>Correct equations</li>
<li>Neat recording</li>
<li>Accurate chemical language</li>
</ul>

</div>

<div class="teacher">

<h3>Golden WAEC Practical Secrets</h3>

<ul>
<li>Write observations BEFORE inference</li>
<li>Always mention precipitate colour</li>
<li>State whether precipitate dissolves or not</li>
<li>Use proper chemical names</li>
<li>Write equations correctly</li>
<li>Use proper state symbols where needed</li>
</ul>

</div>

<div class="teacher">

<h3>Common Mistakes Candidates Make</h3>

<ul>
<li>Writing “white colour” instead of “white precipitate”</li>
<li>Confusing NH₃ with NaOH reactions</li>
<li>Ignoring excess reagent behaviour</li>
<li>Writing equations without balancing</li>
<li>Failing to warm gently during gas tests</li>
</ul>

</div>

<div class="teacher">

<h3>Professional Chemistry Reasoning</h3>

<p>
A professional chemist thinks logically:
</p>

<ul>
<li>What was added?</li>
<li>What happened?</li>
<li>Why did it happen?</li>
<li>Which ion causes it?</li>
<li>What equation explains it?</li>
</ul>

</div>

</div>

</section>

<section id="videos">

<h2>Recommended Practical Video Lessons</h2>

<div class="video-links">

<a href="https://www.youtube.com/results?search_query=waec+qualitative+analysis+practical">
▶ WAEC Qualitative Analysis Practical
</a>

<a href="https://www.youtube.com/results?search_query=chemistry+gas+tests+practical">
▶ Chemistry Gas Tests Practical
</a>

<a href="https://www.youtube.com/results?search_query=starch+iodine+test+chemistry">
▶ Starch Iodine Test Demonstration
</a>

<a href="https://www.youtube.com/results?search_query=waec+chemistry+practical+class">
▶ Full WAEC Chemistry Practical Class
</a>

</div>

</section>

<section>

<h2>Preview of Part 2</h2>

<p>
In Part 2, students will learn:
</p>

<ul>
<li>Cation analysis using NaOH and NH₃</li>
<li>Identification of Pb²⁺, Zn²⁺, Al³⁺, Fe²⁺ and Cu²⁺</li>
<li>Behaviour of precipitates in excess reagents</li>
<li>Anion analysis using AgNO₃ and BaCl₂</li>
<li>Advanced WAEC practical interpretation</li>
<li>Real WAEC-style qualitative analysis tasks</li>
</ul>

</section>

</main>

<footer>

<h3>CHIATECH STEM Academy</h3>

<p>
WAEC Chemistry Practical Excellence Portal
</p>

<p>
Learn • Know • Do • Create SUCCESS
</p>

</footer>
  `;

  injectStyles();
});

function toggleClass(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Poppins',sans-serif;
background:#eef4ff;
color:#10233f;
line-height:1.8;
}

header{
background:
linear-gradient(rgba(0,0,0,.72),rgba(0,0,0,.72)),
url('../assets/diagrams/waecchemistrypractical.PNG');
background-size:cover;
background-position:center;
padding:90px 20px;
text-align:center;
color:white;
}

header h1{
font-size:clamp(2rem,5vw,4rem);
margin-bottom:20px;
font-weight:800;
}

header p{
max-width:1000px;
margin:auto;
font-size:1.1rem;
}

nav{
background:#0b1f3a;
padding:15px;
position:sticky;
top:0;
z-index:1000;
}

nav ul{
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:14px;
list-style:none;
}

nav a{
text-decoration:none;
color:white;
padding:10px 18px;
border-radius:10px;
font-weight:600;
transition:.3s;
}

nav a:hover{
background:#1f4fa3;
}

main{
max-width:1300px;
margin:auto;
padding:25px;
}

section{
background:white;
margin-bottom:28px;
padding:30px;
border-radius:20px;
box-shadow:0 8px 30px rgba(0,0,0,.08);
}

section h2{
color:#0b2d63;
margin-bottom:18px;
font-size:2rem;
}

section h3{
color:#174ea6;
margin:20px 0 10px;
}

.hero-note{
background:#dbeafe;
padding:18px;
border-left:8px solid #2563eb;
border-radius:12px;
margin-top:20px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:20px;
margin-top:20px;
}

.card{
background:#f8fbff;
border:1px solid #d6e4ff;
padding:22px;
border-radius:16px;
}

.card img{
width:100%;
height:230px;
object-fit:cover;
border-radius:12px;
margin-bottom:12px;
}

.highlight{
background:#fff7cc;
padding:14px;
border-radius:10px;
margin:12px 0;
font-weight:600;
}

table{
width:100%;
border-collapse:collapse;
margin-top:20px;
overflow:auto;
}

table th{
background:#0b2d63;
color:white;
padding:14px;
font-size:1rem;
}

table td{
border:1px solid #cbd5e1;
padding:12px;
vertical-align:top;
}

ul li{
margin-left:22px;
margin-bottom:10px;
}

button{
background:#0b2d63;
color:white;
border:none;
padding:14px 24px;
border-radius:12px;
font-size:1rem;
font-weight:700;
cursor:pointer;
margin-top:20px;
transition:.3s;
}

button:hover{
background:#2563eb;
transform:translateY(-2px);
}

.classroom{
display:none;
margin-top:25px;
background:#f1f7ff;
padding:30px;
border-radius:18px;
border:2px dashed #2563eb;
}

.teacher{
background:white;
padding:18px;
margin-bottom:18px;
border-left:7px solid #2563eb;
border-radius:10px;
}

.student{
background:#fffdf4;
padding:18px;
margin-bottom:18px;
border-left:7px solid #f59e0b;
border-radius:10px;
}

.experiment-box{
background:#f8fafc;
padding:25px;
border-radius:16px;
margin-top:20px;
border:1px solid #dbeafe;
}

.warning{
background:#fee2e2;
border-left:7px solid #dc2626;
padding:18px;
border-radius:10px;
margin:20px 0;
}

.success{
background:#dcfce7;
border-left:7px solid #16a34a;
padding:18px;
border-radius:10px;
margin:20px 0;
}

footer{
background:#061225;
color:white;
padding:45px 20px;
text-align:center;
margin-top:50px;
}

footer h3{
margin-bottom:10px;
}

svg{
width:100%;
max-width:550px;
display:block;
margin:auto;
}

.video-links a{
display:block;
margin-bottom:12px;
font-weight:600;
color:#174ea6;
text-decoration:none;
}

.video-links a:hover{
text-decoration:underline;
}

@media(max-width:768px){

section{
padding:20px;
}

header{
padding:70px 15px;
}

}
  `;
  document.head.appendChild(style);
}