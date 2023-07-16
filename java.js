const title=document.getElementById("title");
const discription=document.getElementById("discription");
const form=document.querySelector("form");
const container=document.querySelector(".container");
const tasks=localStorage.getItem("tasks")
   ? JSON.parse(localStorage.getItem("tasks"))
   : [];
   showalltasks();

function showalltasks(){
    tasks.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");
        const innerDiv=document.createElement("div");
        div.append(innerDiv);

        const p=document.createElement("p");
        p.innerText=value.title;
        p.setAttribute("class","paras");
        innerDiv.append(p);
        const p1 =document.createElement("p");
        p1.innerText=value.discription;
        p1.setAttribute("class","paras1");
        innerDiv.append(p1);
        

        const btn=document.createElement("button");
        btn.setAttribute("class","delebtn");
        btn.innerText="-";
        btn.addEventListener("click",()=>{
           removeTasks();
           tasks.splice(index,1);
           localStorage.setItem("tasks",JSON.stringify(tasks));
           showalltasks();
        });
        div.append(btn);
        container.append(div);
    });
}

function removeTasks(){
    tasks.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();
    });
}


form.addEventListener("submit",(e)=>{
   e.preventDefault();
   removeTasks();
   tasks.push({
      title: title.value,
      discription:discription.value,
   });
   localStorage.setItem("tasks",JSON.stringify(tasks));
   showalltasks();
});