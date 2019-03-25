module.exports = function (context, IoTHubMessages) {
    context.log(`JavaScript eventhub trigger function called for message array: ${IoTHubMessages}`);
    
    context.bindings.outputDocument = IoTHubMessages;

    context.done(); 
};