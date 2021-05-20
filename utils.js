
function runModel(data, target) {
    const keys = Object.keys(data[0]);

    if (target === 'index' || !keys.find(key => key === target)) {
        throw new Error(`Invalid target: ${target} selected for model`);
    }

    const predictions = data.map(item => ({ index: item.index, prediction: item[target] *  (Math.random() + 0.5) }));
    return {
        modelSummary: {
            algoType: "linear.OLS",
            nRetrain: 0,
            nTrainingGap: 0,
            nTrainingWarmup: 0,
            nWindowSize: -1,
            scaling: "no_scaling",
            trainingMode: "offline",
            weightDecay: 0.0,
        },
        predictions,
        scoring_metrics: {
            pearsonR: Math.random(),
            spearmanRho: Math.random(),
            meanAbsError: Math.random() * 2,
            medianAbsError: Math.random() * 2,
            percentageAbsError: Math.random() * 100,
            signMatch: Math.random(),
        },
    };
}

module.exports = { runModel }
