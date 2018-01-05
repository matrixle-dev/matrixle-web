$(document).ready(function() {
    $("#login-btn").click(function() {
    	//fake it till you make it.
    	account_name = $("#account").val();
        password = $("#password").val();
        if (account_name == "mofanlai" && password == "mofan123") {
        	window.location = "portal.html"
        }
        else {
        	$("#account").value = "";
        	$("#password").value = "";
        	alert("Authentication Failed, check your user name / password.");
        }





    	///Cross region request ERROR

        // account_name = $("#account").val();
        // password = $("#password").val();

        // $.get("login").done(function (data) {console.log(data);});


        // $.ajax({
        //     url: "login",
        //     type: "POST",
        //     data: {
        //         usr: account_name,
        //         pswd: password
        //     },
        //     dataType: "json",
        //     contentType: "application/json",
        //     success: function(data) {
        //         console.log("Response " + data.accountSelected);
        //     },
        //     error: function( jqXhr, textStatus, errorThrown ){
        //     	// console.log( errorThrown );
        //     	alert(textStatus + errorThrown);
        //     }
        // });
    })
});