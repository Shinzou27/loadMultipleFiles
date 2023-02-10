loadAllAtOnce()
function loadOneByOne() {
    var flag = true;
    var doc = app.activeDocument;
    while (flag) {
        var file = app.openDialog()
        if (file[0]) {
            app.load(file[0])
            var newFile = app.activeDocument;
            if (newFile.name != doc.name){
                newFile.selection.selectAll();
                newFile.selection.copy();
                newFile.close(SaveOptions.DONOTSAVECHANGES);
                doc.paste();
            }
        }
        else {
            flag = false
        }
    }
}
function loadAllAtOnce() {
    var flag = true;
    var doc = app.activeDocument;
    var files = app.openDialog();
    for (var i = 0; i < files.length; i++) {
        app.load(files[i]);
        var newFile = app.activeDocument;
        if (newFile.name != doc.name){
            newFile.selection.selectAll();
            newFile.selection.copy();
            newFile.close(SaveOptions.DONOTSAVECHANGES);
            doc.paste();
        }
    }
}