$(document).ready(function() {
    $("#login-btn").click(function() {
        account_name = $("#account").val();
        password = $("#password").val();
    	
        //// fake it till you make it.
        if (account_name == "mofanlai" && password == "mofan123") {
        	window.location = "./portal/portal.html"
        }
        else {
        	$("#account").value = "";
        	$("#password").value = "";
        	alert("Authentication Failed, check your user name / password.");
        }





    	//Cross region request ERROR
        // $.get("login").done(function (data) {console.log(data);});


        $.ajax({
            url: "http://timzh.me:4444",
            type: "POST",
            data: {
                usr: account_name,
                pswd: password
            },
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                console.log("Response " + data.accountSelected);
            },
            error: function( jqXhr, textStatus, errorThrown ){
            	// console.log( errorThrown );
            	// alert(textStatus + errorThrown);
            }
        });
    })
});