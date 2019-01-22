module.exports = function (context, IoTHubMessages) {
    context.log(`JavaScript eventhub trigger function called for message array: ${IoTHubMessages}`);
    
    var count = 0;
    var totalTemperature = 0.0;
    var totalHumidity = 0.0;
    var clientId = "";

    IoTHubMessages.forEach(message => {
        context.log(`Processed message: ${message}`);
        count++;
        totalTemperature += message.temperature;
        totalHumidity += message.humidity;
        clientId = message.clientId;
        
    });

    var output = {
        "clientId": clientId,
        "measurementsCount": count,
        "averageTemperature": totalTemperature/count,
        "averageHumidity": totalHumidity/count
    };

    context.log(`Output content: ${output}`);
    context.bindings.outputDocument = output;

    context.done();
};