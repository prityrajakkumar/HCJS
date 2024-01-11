let getUserdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUserdata);

function Signup(){
   let username = document.getElementById("naam").value;

   let mobile = document.getElementById("phone").value;

   let password = document.getElementById("pass").value;

   if(mobile.length==0)
   {
    alert("Enter mobile number");
   }
   else if(mobile.length !== 10)
    {
        alert("mobile number should have 10 digits");
    }
    else {
        let userData = {
            username:username,
            mobile:mobile,
            password:password
           }

           let users = [...getUserdata,userData];
           users.push(userData);
           
           localStorage.setItem("usersdata", JSON.stringify(users));


           alert("Signup Successful");
           window.location.href = "signin.html"
    }
  
   
}