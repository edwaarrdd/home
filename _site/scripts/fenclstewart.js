
function getValues() {
    var sodium = parseInt(document.getElementById("sodium").value);
    var potassium = parseInt(document.getElementById("potassium").value);
    var chloride = parseInt(document.getElementById("chloride").value);
    var baseexcess = parseInt(document.getElementById("baseexcess").value);
    var lactate = parseInt(document.getElementById("lactate").value);
    var albumin = parseInt(document.getElementById("albumin").value);
    
    explanation_processes = [];
    summary_processes = [];
    summation_processes = [];

    summary.innerHTML = summary_processes;
    summation.innerHTML = summation_processes;
    explanation.innerHTML = explanation_processes;

    (albumin >= 42) ? albumin_effect = 0 : albumin_effect = parseInt(0.25 * (42-albumin));
    (lactate < 1) ? lactate_effect = 0 : lactate_effect = lactate-1;

    sodiumDerangement(sodium);
    potassiumDerangement(potassium);
    baseDerangement(baseexcess);
    calculateSid(sodium, potassium, chloride);
    lactateDerangement(lactate_effect);
    albuminDerangement(albumin_effect);
    calculateUnmeasured(sodium, potassium, chloride, baseexcess, lactate_effect, albumin_effect);
    outputSummary();
    
    chartGraph();
};

function sodiumDerangement(sodium) {
    if (sodium > 145) {
        explanation_processes.push("There is a hypernatraemia");
    }
    else if (sodium < 120) {
        explanation_processes.push("There is a severe hyponatraemia");
    }
    else if (sodium < 125) {
        explanation_processes.push("There is a moderate hyponatraemia");
    }
    else if (sodium < 135) {
        explanation_processes.push("There is a mild hyponatraemia");
    }
    else { 
        explanation_processes.push("There is a normal sodium");
    };
};

function potassiumDerangement(potassium) {
    if (potassium > 7) {
        explanation_processes.push(" and severe hyperkalaemia");
    }
    else if (potassium > 6) {
        explanation_processes.push(" and moderate hyperkalaemia");
    }
    else if (potassium > 5) {
        explanation_processes.push(" and mild hyperkalaemia");
    }
    else if (potassium < 2.5) {
        explanation_processes.push(" and severe hypokalaemia");
    }
    else if (potassium < 3) {
        explanation_processes.push(" and moderate hypokalaemia");
    }
    else if (potassium < 3.5) {
        explanation_processes.push(" and mild hypokalaemia");
    }
    else { 
        explanation_processes.push(" and normal potassium");
    };
};

function baseDerangement(baseexcess) {
    if (baseexcess > 3) {
        summation_processes.push(`Positive BE: indicates a metabolic alkalosis <br>`);
    }
    else if (baseexcess < -3) {
        summation_processes.push(`Negative BE: indicates a metabolic acidosis <br>`);
    }
    
    (baseexcess >= 0) ? summation_processes.push(`Measured base excess: +${baseexcess}`): summation_processes.push(`Measured base excess: ${baseexcess}`) ;
};

function lactateDerangement(lactate_excess) {
    summation_processes.push(`Lactate Effect: ${(lactate_excess)*-1}`);
    if (lactate_excess > 4) {
        summary_processes.push("There is a severe lactic metabolic acidosis");
    }
    else if (lactate_excess > 1) {
        summary_processes.push("There is a mild lactic metabolic acidosis");
    }   
};

function albuminDerangement(albumin_excess) {
    if (albumin_excess > 0) {
        summation_processes.push(`Albumin Effect: +${albumin_excess}`);
        summary_processes.push("There is a metabolic alkalosis from albumin");
    }
    else {
        summation_processes.push("Albumin Effect: 0");
    }
};


function calculateUnmeasured(sodium, potassium, chloride, baseexcess, lactate_effect, albumin_effect) {
    chloride_effect = (sodium + potassium - chloride) - 42;

    var sum_effect = chloride_effect - lactate_effect + albumin_effect;
    var unmeasured = baseexcess - sum_effect;
    summation_processes.push(`Sum Effect: ${sum_effect}`);
    if (unmeasured <= 3 && unmeasured >= -3) {
        summation_processes.push("This matches the base excess");
        
    }
    else if (unmeasured < 0) {
        summation_processes.push(`<br> As Measured Base Effect: ${baseexcess}, and Sum Effect: ${sum_effect}, ${unmeasured} is unaccounted for.`)
        summation_processes.push("Therefore, another metabolic acidosis is occurring - likely explained by unmeasured ions.");
        summary_processes.push("There is a metabolic acidosis likely from ketones, toxic alcohol, etc")
    }
    else {
        summation_processes.push(`<br> As Measured Base Effect: ${baseexcess}, and Sum Effect: ${sum_effect}, ${unmeasured} is unaccounted for.`)
        summation_processes.push("Therefore, another metabolic alkalosis is occurring - likely an independent excess of bicarbonate (rare).");
        summary_processes.push("There is a metabolic alkalosis likely from independent excess of bicarbonate")
    }
};

function calculateSid(sodium, potassium, chloride) {
    sid = sodium + potassium - chloride;
    summation_processes.push(`Chloride Effect: ${sid-42}`);
    if (sid < 42) {
        summary_processes.push("There is a hyperchloraemic metabolic acidosis");
    }
    else if (sid > 42) {
        summary_processes.push("There is a hypochloraemic metabolic alkalosis");
    }
};


function outputSummary() {
    explanation.innerHTML = explanation_processes;

    if (summary_processes.length == 1) {
        summary.innerHTML = `In summary, there is ${summary_processes.length} acid-base process going on:`;
    }
    else {
        summary.innerHTML = `In summary, there are ${summary_processes.length} acid-base processes going on:`;
    }   
    
    for (var i = 0; i<summation_processes.length; i++) {
        summation.innerHTML += `<br>${summation_processes[i]}`;
    }

    for (var i = 0; i<summary_processes.length; i++) {
        summary.innerHTML += `<br>${i+1}. ${summary_processes[i]}`;
    }

}

function chartGraph() {
    var gd = document.getElementById('chart');
    var data = [
        {
            name: "Summative Approach",
            type: "waterfall",
            orientation: "h",
            measure: [
                "relative",
                "relative",
                "relative",
                "relative",
                "total"
            ],
            y: [
                "Measured BE",
                "Chloride",
                "Lactate",
                "Albumin",
                "Unaccounted"
            ],
            x: [
                baseexcess.value,
                (chloride_effect*-1),
                lactate_effect,
                (albumin_effect*-1),
                null
            ],
            connector: {
                mode: "between",
                line: {
                    width: 4,
                    color: "rgb(0, 0, 0)",
                    dash: 0
                }
            }
        }
    ];
    var layout = {title: {
                text: "Fencl Stewart Approach - Visualisation of Summative Approach"
            },
            yaxis: {
                type: "category",
                autorange: "reversed"
            },
            xaxis: {
                type: "linear"
            },
            margin: { l: 150 },
            showlegend: true
        }
    Plotly.newPlot('chart', data, layout, {displayModeBar: false});
}

const summary = document.querySelector("#summary");
const summation = document.querySelector("#summation");
const explanation = document.querySelector("#explanation");

var explanation_processes = [];
var summary_processes = [];
var summation_processes = [];


