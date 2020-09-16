function myFunction() {
    var doc = DocumentApp.create("New Document");
    var body = doc.getBody();
    body.appendParagraph("Hello World!");
}
