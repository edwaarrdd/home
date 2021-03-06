---
title: Acid Base Interpreter
layout: single
permalink: /acidbase/

---
<style>
    label {
        float: left;
    }
    input {
        width: 60%;
        display: block;
        padding: 0 4px 0 6px;
    }    
    #textspace #chartspace{
        overflow: hidden;
        width: 100%;
    }
    #inputs {
        float: left;
        width: 50%;
    }
    #output {
        float: left;
        width: 50%;
    }
</style>
<script src='https://cdn.plot.ly/plotly-latest.min.js'></script>

## Acid Base Interpretation: Fencl-Stewart Approach
The Fencl-Stewart Approach is a method of interpreting blood gases that allows you to identify the various metabolic abnormalities occurring. For more information, check out [this paper](https://pubmed.ncbi.nlm.nih.gov/14665553/).

<div id="textspace">
    <div id="inputs">
        <label for="sodium">Sodium: </label>
        <span><input type="number" id="sodium" class="acidbase" name="sodium" required></span><br>
        <label for="potassium">Potassium: </label>
        <span><input type="number" id="potassium" class="acidbase" name="potassium" required></span><br>
        <label for="chloride:">Chloride: </label>
        <span><input type="number" id="chloride" class="acidbase" name="chloride" required></span><br>
        <label for="baseexcess">Base Excess: </label>
        <span><input type="number" id="baseexcess" class="acidbase" name="baseexcess" required></span><br>
        <label for="lactate">Lactate: </label>
        <span><input type="number" id="lactate" class="acidbase" name="lactate" required></span><br>
        <label for="albumin">Albumin: </label>
        <span><input type="number" id="albumin" class="acidbase" name="albumin" required></span><br>
        <button onclick="getValues()">Submit</button>
    </div>
    <div id="output">
        <div id="explanation"></div>
        <div id="summation"></div><br>
    </div>
</div>
<div id="summary"></div>
<div id="chart"></div>
<script type="text/javascript" src="../scripts/fenclstewart.js"></script>