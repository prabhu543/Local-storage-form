let saveBtn = document.getElementById("btn");
let info = document.querySelector('.info');


saveBtn.addEventListener("click" , (event)=>{
    event.preventDefault();//  not to reload || load the page

    let name = document.getElementById('name').value; // name taken from form
    let email = document.getElementById('email').value; // email taken from form

    let userData = JSON.parse(localStorage.getItem("details")) || [];
    let flag =0;

    for (let element of userData) {
        if(element.userEmail === email)
        {
            flag =1;
            break;
        }
    }
    // console.log(flag)

    if(flag == 1)
    {
        alert("chutiya ho kya ?");
    }
    else
    {
        // data is pushed to array 
        userData.push({ 
            'userName' : name, 
            'userEmail' : email 
        });
    
        localStorage.setItem("details" , JSON.stringify(userData));

        document.getElementById('name').value = ""; // reset name
        document.getElementById('email').value = ""; // reset email 
        // don't touch these
    }
    display();

});

let display = ()=>{
    let div = '';
    let user  = JSON.parse(localStorage.getItem("details")) || [];
    user.forEach((element,index) => {
        div += `
        <div class="item">
            <span onclick = "removeData(${index})">&times;</span>
            <h3> name : ${element.userName}</h3>
            <h3>email : ${element.userEmail}</h3>
        </div>
        `;
    });
    info.innerHTML = div;
};

display();

function removeData(index){
    let user  = JSON.parse(localStorage.getItem('details')) || [];
    user.splice(index ,1);
    localStorage.setItem("details", JSON.stringify(user));
    display();
}

let clearAll = document.getElementById('cAll');
clearAll.addEventListener('click',()=>{
    localStorage.clear();
    display();
});