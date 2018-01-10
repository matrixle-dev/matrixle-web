$(document).ready(function() {
    $("#work-space").load("http://timzh.me/portal/dashboard.html");
    $("#menu-dashboard").bind("click", () => {
        $("#work-space").load("http://timzh.me/portal/dashboard.html"); //http://timzh.me/portal/
    });
    $("#menu-students").bind("click", () => {
            console.log("");
            var myUrl = "search/";

            $.ajax({
                url: myUrl,
                type: "POST",
                data: "{message="hello"} ,
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
        }
    });
    $("#menu-database").bind("click", () => {});
    $("#menu-checklist").bind("click", () => {});
    $("#menu-memo").bind("click", () => {});
    $("#menu-settings").bind("click", () => {});
    $("#menu-support").bind("click", () => {});

});