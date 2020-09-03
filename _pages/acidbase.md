---
title: Acid Base - Fencl-Stewart Approach
layout: single
permalink: /acidbase/

---
<style>
    label {
        float: left;
    }
    span {
        display: block;
        overflow: hidden;
        padding: 0 4px 0 6px;
    }
    input {
        width: 30%;
    }
    .input {
        display: flex;
    }
    .left {
        flex: 50%;
    }
    .right {
        flex: 50%;
    }
</style>

## Acid Base Interpretation: Fencl-Stewart Approach
The Fencl-Stewart Approach is a method of interpreting blood gases that allows you to identiffy the metabolic abnormalities occurring. For more information, you can read more about it in [this paper](https://pubmed.ncbi.nlm.nih.gov/14665553/).

<div id="input">
    <div id="left">
        <label for="sodium">Sodium (Na+)
        </label>
        <span><input type="number" id="sodium" class="acidbase" name="sodium" required></span><br>
        <label for="potassium">Potassium (K+)
        </label>
        <span><input type="number" id="potassium" class="acidbase" name="potassium" required></span><br>
        <label for="chloride:">Chloride (Cl-)
        </label>
    </div>
    <div id="right">
    <span><input type="number" id="chloride" class="acidbase" name="chloride" required></span><br>
    <label for="baseexcess">Base Excess
    </label>
    <span><input type="number" id="baseexcess" class="acidbase" name="baseexcess" required></span><br>
    <label for="lactate">Lactate
    </label>
    <span><input type="number" id="lactate" class="acidbase" name="lactate" required></span><br>
    <label for="albumin">Albumin
    </label>
    <span><input type="number" id="albumin" class="acidbase" name="albumin" required></span><br>
    <button onclick="getValues()">Submit</button>
    </div>
</div>
<br>
<div id="output">
    <div id="explanation"></div>
    <div id="summation"></div><br>
    <div id="summary"></div>
</div>
<script type="text/javascript" src="../scripts/fenclstewart.js"></script>