function registration()
	{

	
		var pwd= document.getElementById("t4").value;			
		var cpwd= document.getElementById("t5").value;
		
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(pwd=='')
		{
			alert('Please enter Password');
		}
		else if(cpwd=='')
		{
			alert('Enter Confirm Password');
		}
		else if(!pwd_expression.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(pwd != cpwd)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("t5").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("t5").value.length > 12)
		{
			alert ('Password max length is 12');
		}
		else
		{				                            
               alert('Password has been reset & You are Redirecting to Login Page');
			   window.location = "login.html"; 
		}
	}
	function clearFunc()
	{
	
		document.getElementById("t4").value="";
		document.getElementById("t5").value="";
	}