// Use this presets array inside your presetHandler
const presets = require('./presets');

getPreset = (index) => {
    return presets[index] || null;
};

createOrUpdatePresets = (index, array) => {
    if(!presets[index]){
        return;
    }
    presets[index] = array;
    return presets[index];
}

// Complete this function:
const presetHandler = (method, presetsIndex, newPresetArray) => {
    if(method === 'GET'){
        const preset = getPreset(presetsIndex);
        if(preset){
            return [200, preset];
        } else {
            return [404];
        }
    } else if(method === 'PUT'){
        const newPreset = createOrUpdatePresets(presetsIndex, newPresetArray);
        if(newPreset){
            return [200, newPreset];
        } else {
            return [404];
        }
    } else {
        return [400];
    }

};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;

