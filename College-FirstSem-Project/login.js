function fun()
{
    var n=document.forms["form1"]["username/email"].value;
    var m=document.forms["form1"]["password"].value;
    if(n=="")
    {
        window.alert("Please enter username/password");
        return false;
    }
    if(m=="")
    {
        window.alert("Please enter password");
        return false;
    }
}