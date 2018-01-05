$(document).ready(function() {
    $("#login-btn").click(function() {
        account_name = $("#account").val();
        password = $("#password").val();

        $.ajax({
            url: "login",
            type: "POST",
            data: {
                usr: account_name,
                pswd: password
            },
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                console.log("Response " + data.accountSelected);
            }
        });
    })
});