var a=0; 
var hide=1;



function show_hide()
    {
        
            document.getElementById('redirect').style.display='inline';
            document.getElementById('log').style.display='inline';
            hide=0;
        
    }
    


function doc(){
    document.getElementById("redirect").style.display='none';
    document.getElementById("btn").style.display='inline';
    if(ID==1){
        document.getElementById("lol").innerHTML="Hello Doctor Rahul";
        document.getElementById("details").style.display='inline';
        

    }
    else if(ID==2){
        document.getElementById("lol").innerHTML="Hello Doctor Rohit";
        document.getElementById("doc2").style.display='inline';
    }
    else if(ID==3){
        document.getElementById("lol").innerHTML="Hello Doctor Sunaina";
        document.getElementById("doc3").style.display='inline';
    }
    else if(ID==4){
        document.getElementById("lol").innerHTML="Hello Doctor Anjali";
        document.getElementById("doc4").style.display='inline';
    }

}   


function myUpdate(){
    
}

function redirect(){
    window.open("Dland.html",'_self');
}

var dataBase = 
    [
        {"userName": "rahul","passWord":"12345","id":"1"},{"userName":"rohit","passWord":"123456","id":"2"},
        {"userName":"sunaina","passWord":"12345","id":"3"},{"userName":"anjali","passWord":"12345","id":"4"}
    ]



function validate() {
   
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
    
    for(y in dataBase)
{
    if(username===dataBase[y].userName &&  password === dataBase[y].passWord)
    {
        if(dataBase[y].id==="1")
        {
            alert('Login Successful')
            console.log(`Welcome back ${dataBase[y].userName}`)
            var a=1;
            sessionStorage.setItem("ID", a);
            const ID = sessionStorage.getItem('ID');
            console.log(ID);

            
        
        }
        else if(dataBase[y].id==="2")
        {   
            alert('Login Successful')
            console.log(`Welcome back ${dataBase[y].userName}`)
            var a=2;
            sessionStorage.setItem("ID", a);
            const ID = sessionStorage.getItem('ID');
            console.log(ID);
            
            
        
        }
        else if(dataBase[y].id==="3")
        {   
            alert('Login Successful')
            console.log(`Welcome back ${dataBase[y].userName}`)
            var a=3;
            sessionStorage.setItem("ID", a);
            const ID = sessionStorage.getItem('ID');
            console.log(ID);
            
            
        
        }
        else if(dataBase[y].id==="4")
        {   
            alert('Login Successful')
            console.log(`Welcome back ${dataBase[y].userName}`)
            var a=4;
            sessionStorage.setItem("ID", a);
            const ID = sessionStorage.getItem('ID');
            console.log(ID);
            
            
        
        }
        document.getElementById('redirect').style.display='inline';
            document.getElementById('log').style.display='none';
            hide=0;
    }
    
 
  }    
    




    }





    
    










