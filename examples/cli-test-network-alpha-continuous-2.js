// Importation
var DN2A = require("../built/dn2a");

// Instantiation
var neuralNetwork = new DN2A.NetworkAlpha({
    layerDimensions: [2, 4, 4, 1],
    learningMode: "continuous",
    learningRate: 0.3,
    momentumRate: 0.7,
    maximumError: 0.005,
    maximumEpoch: 20000,
    dataRepository: {},
    neuron: {
        generator: DN2A.Neuron
    },
    synapse: {
        generator: DN2A.Synapse
    },
    numbersPrecision: 32
});

// Training
//
// The object passed to the callback function contains information about the training process.
// The list of the properties is reported in the main README file.
var trainingPatterns = [
    {
        input: [0, 0],
        output: [0]
    },
    {
        input: [0, 1],
        output: [1]
    },
    {
        input: [1, 0],
        output: [1]
    },
    {
        input: [1, 1],
        output: [0]
    }
];
neuralNetwork.train(trainingPatterns, function(trainingStatus) {
    console.log("Epoch: " + trainingStatus.elapsedEpochCounter);
});

// Querying
//
// The object passed to the callback function contains information about the querying process.
var inputPatterns = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
];
neuralNetwork.query(inputPatterns, function(queryingStatus) {
    inputPatterns.forEach(function(inputPatten, inputPatternIndex) {
        console.log("[" + inputPatterns[inputPatternIndex].join(", ") + "] => [" + queryingStatus.outputPatterns[inputPatternIndex].join(", ") + "]");
    });
});
