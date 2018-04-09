$(document).ready(function() {
    $("#login-btn").click(function() {
        account_name = $("#account").val();
        password = $("#password").val();

        //// fake it till you make it.
        if (account_name == "mofanlai" && password == "mofan123") {
            window.location = "./portal/portal.html"
        } else {
        }

        var myUrl = "https://matrixle.com/portal/login";
        $.ajax({
            url: myUrl,
            type: "GET",
            data: JSON.stringify({ user_name: account_name, passwd: password}),
            dataType: "json",
            contentType: "application/json",
            success: function(result) {
                console.log("Response " + JSON.stringify(result));
                if(JSON.stringify(result) == '{"result": true}'){
                    window.location = "./portal/portal.html"
                } else {
                    $("#account").value = "";
                    $("#password").value = "";
                    alert("Authentication Failed, check your user name / password.");
                }
            },
            error: function(request, textStatus, errorThrown) {
                alert('textStatus ' + textStatus);
                alert('errorThrown ' + errorThrown);
            }
        });
    })
});