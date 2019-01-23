module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var documents = context.bindings.documents;
    var totalDocuments = documents.length;

    context.log('Found '+ totalDocuments +' documents');

    
    if(totalDocuments == 0 ){
        context.res = {
            // status: 404 */
            status: 404,
            body: "No documents found"
        };
    }else{
        context.res = {
            body: documents
        };
    }
 
};