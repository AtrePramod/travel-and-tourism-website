function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
 
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
function register(){
  if(ValidateEmail(email)==true)
  {
    if(phonenumber(mono)==true)
    {
      window.close("index1.html","","")
       window.alert( "Data registered ");
      window.open("index3.html","","")
   
    }
  }
  else{
     
  }
  
}
  
function phonenumber(mono)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((mono.value.match(phoneno)))
  {
    
    return true;
  }
      else
        {
        alert("Please enter a correct phone number!");
        
        }
}
  

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user =document.getElementById(fname);
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
 //sildeshow1
arr=new Array('image/Jagdamba-Temple-Tahakari-akolein.jpg',"image/WhatsApp Image 2021-12-28 at 2.13.26 PM - Copy.jpeg"
,'image/WhatsApp Image 2021-12-28 at 2.13.26 PM (1) - Copy.jpeg',"image/WhatsApp Image 2021-12-28 at 2.21.51 PM.jpeg",'image/WhatsApp Image 2021-12-28 at 2.13.26 PM (2) - Copy.jpeg','image/WhatsApp Image 2021-12-28 at 4.10.26 PM (1) - Copy.jpeg',"image/WhatsApp Image 2021-12-28 at 4.54.56 PM.jpeg","image/WhatsApp Image 2021-12-28 at 5.11.34 PM.jpeg","image/tourismakole-20211128-0047.jpg");
pos=0;
function display()
{
    if(document.images)
    {
        pos++;
        if(pos==arr.length)
        {
            pos=0;
        }
        document.images1.src=arr[pos];
        setTimeout("display()",2000)
    }
}
 