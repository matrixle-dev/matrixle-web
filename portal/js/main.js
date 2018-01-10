$(document).ready(function() {
    $("#work-space").load("http://timzh.me/portal/dashboard.html");
    $("#menu-dashboard").bind("click", () => {
        $("#work-space").load("http://timzh.me/portal/dashboard.html"); //http://timzh.me/portal/
    });
    $("#menu-students").bind("click", () => {
        var myUrl = "search/";

        $.ajax({
            url: myUrl,
            type: "POST",
            data: "{message=10000}",
            dataType: "json",
            contentType: "application/json",
            success: function(result) {
                console.log("Response " + JSON.stringify(result));
            },
            error: function(request, textStatus, errorThrown) {
                alert('textStatus ' + textStatus);
                alert('errorThrown ' + errorThrown);
            }
        });
    });
    $("#menu-database").bind("click", () => {
        var myUrl = "search/";

        $.ajax({
            url: myUrl,
            type: "GET",
            data: "{message=10000}",
            dataType: "json",
            contentType: "application/json",
            success: function(result) {
                console.log("Response " + JSON.stringify(result));
            },
            error: function(request, textStatus, errorThrown) {
                alert('textStatus ' + textStatus);
                alert('errorThrown ' + errorThrown);
            }
        });
    });
    $("#menu-checklist").bind("click", () => {
        var myUrl = "http://timzh.me:4444";

        $.ajax({
            url: myUrl,
            type: "POST",
            data: "{message=10000}",
            dataType: "json",
            contentType: "application/json",
            success: function(result) {
                console.log("Response " + JSON.stringify(result));
            },
            error: function(request, textStatus, errorThrown) {
                alert('textStatus ' + textStatus);
                alert('errorThrown ' + errorThrown);
            }
        });
    });
    $("#menu-memo").bind("click", () => {
        var myUrl = "http://timzh.me:4444";

        $.ajax({
            url: myUrl,
            type: "GET",
            data: "{message=10000}",
            dataType: "json",
            contentType: "application/json",
            success: function(result) {
                console.log("Response " + JSON.stringify(result));
            },
            error: function(request, textStatus, errorThrown) {
                alert('textStatus ' + textStatus);
                alert('errorThrown ' + errorThrown);
            }
        });
    });
    $("#menu-settings").bind("click", () => {});
    $("#menu-support").bind("click", () => {});

});