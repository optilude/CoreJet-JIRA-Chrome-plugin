var key = $("#key-val").text();
var title = $("#issue_header_summary a").text();
var criteria = "";

$("li.item .value.type-textarea .flooded").each(function() {
    if(criteria != "") {
        return;
    }
    
    var text = $(this).text().trim();
    if(text == "") {
        return;
    }
    
    if(text.match(/scenario:\s*\S+/gi) && 
       text.match(/given\s*\S+/gi) &&
       text.match(/when\s*\S+/gi) &&
       text.match(/then\s*\S+/gi)
    ) {
        criteria = text;
    }
});

chrome.extension.sendRequest({key: key, title: title, criteria: criteria});