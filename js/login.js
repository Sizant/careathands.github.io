
function saveData(){
       let name,gender,email,phone,day,time,msg,id;
       name=document.getElementById("name").value
       gender=document.getElementById("gender").value
       email=document.getElementById("email").value
       phone=document.getElementById("phone").value
       day=document.getElementById("day").value
       time=document.getElementById("appt-time").value
       msg=document.getElementById("message").value
       id=document.getElementById("sid").value


       let user_record=new Array();
       user_record=JSON.parse(localStorage.getItem("appointment"))?JSON.parse(localStorage.getItem("appointment")):[]
       if(user_record.some((v)=>{return v.email==email}))
       {
           alert("Duplicate Data")
       }
       else{
        user_record.push({
       "name":name,
       "gender":gender,
       "email":email,
       "phone":phone,
       "day":day,
       "time":time,
       "msg":msg,
       "id":id
    
})

       localStorage.setItem("appointment",JSON.stringify(user_record));
    }
  }


  const ID = sessionStorage.getItem('ID');
  console.log(ID);


//   888888888888888888888888888888888888888888888888888888888888888888888888888888888


const btn = document.getElementById("btn")
btn.addEventListener('click',()=>{
    
    
    const data= localStorage.getItem('appointment');
    const users = JSON.parse(data);
    
    
    document.getElementById('table').innerHTML = `
    <div>
    ${createTable(users)}
    </div>
    `
})

const createTable = (users)=>{

    return ` <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Patient Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Email-ID</th>
        <th scope="col">Phone</th>
        <th scope="col">Day</th>
        <th scope="col">time</th>
        <th scope="col">message</th>
      </tr>
    </thead>
    <tbody>
      ${createTableData(users)} 
    </tbody>
  </table>
  `
}

const createTableData = (users) =>{
    let html = ''
    users.forEach(user => {
        if(user.id==ID){

        
        html += `
        <tr>
                <td>${user.name}</td>
                <td>${user.gender}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.day}</td>
                <td>${user.time}</td>
                <td>${user.msg}</td>
                
        </tr>
        
        `
        console.log(user.id)}
    })

    
    return html; 
}





// 888888888888888888888888888888888888888888888888888888888888888888888888888888888

