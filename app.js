const notifyDenderConfig = { serverId: 4719, active: true };

function calculateSMS(payload) {
    let result = payload * 26;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module notifyDender loaded successfully.");