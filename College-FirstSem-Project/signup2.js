 function myfun()
  {
    var n=document.forms["form1"]["firstname"].value;
    var m=document.forms["form1"]["lastname"].value;
    var o=document.forms["form1"]["email"].value;
    var p=document.forms["form1"]["password"].value;
    var q=document.forms["form1"]["email-confirm"].value;
    var r=document.forms["form1"]["password-confirm"].value;
    if (n=="")
    {
      window.alert("please fill your firstname");
      return false;
    }
    if (m=="")
    {
      window.alert("please fill your lastname");
      return false;
    }
    if (o=="")
    {
      window.alert("please enter the email");
      return false;
    }
    if (p=="")
    {
      window.alert("please enter the pasword");
      return false;
    }
    if (q=="")
    {
      window.alert("please repeat your email");
      return false;
    }
    if (r=="")
    {
      window.alert("please repeat your password");
      return false;
    }
    if (o!=q)
    {
      window.alert("Email doesn`t Match");
      return false;
    }
    if (p!=r)
    {
      window.alert("Password doesn`t Match");
      return false;
    }
    if(p.length< 8)
    {
      window,alert("password must be atleast 8 characters")
    }

    }


