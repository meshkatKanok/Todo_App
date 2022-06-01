const frm=document.querySelector('#frm-part');
const textInput=document.querySelector('#inputAll');
const showtodo=document.querySelector('#todoText');
const submit=document.querySelector('#todoSubmit');
const messagePass=document.querySelector(".message-pass");


frm.addEventListener('submit',addtodo);


function addtodo(event){
    event.preventDefault();
    const inputValue=textInput.value;
    // console.log(inputValue)
    const uniqId=Date.now().toString();
     creatTodo(inputValue,uniqId);
     showmessage("Todo is added","sucess");
       
}
 const creatTodo = (inputValue,uniqId) => {
       const creatEle=document.createElement("li");
       creatEle.id=uniqId;
       creatEle.classList.add("li-style")
       creatEle.innerHTML=`<span>${inputValue}</span> 
       <span><button class="btn-js id="delete"><i class="fa-solid fa-trash"></i></button></span> `;
        showtodo.appendChild(creatEle);
        // textInput.value="";
 
}
 
const showmessage=(text,status)=>{
    messagePass.textContent=text;
    messagePass.classList.add( `bg-${status}`);

    setTimeout(() => {
        messagePass.textContent="";
        messagePass.classList.remove(`bg-${status}`)
    },1000);
}
 