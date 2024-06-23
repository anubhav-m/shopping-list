
const newItemButton = document.querySelector(".left div .add");
newItemButton.addEventListener("click", ()=>{
    const listItem = document.createElement("li");
    listItem.textContent = newItemButton.previousElementSibling.value;
    if (newItemButton.previousElementSibling.value != ""){
        newItemButton.previousElementSibling.value = "";
        const listItemContainer = document.querySelector(".left ul");
        listItemContainer.appendChild(listItem);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        listItem.appendChild(deleteButton);
        deleteButton.style.marginLeft="5px";
    }
})

const deleteButtonContainer = document.querySelector(".left ul");
deleteButtonContainer.addEventListener("click", (e) =>{
    if (e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
})

const saveListButton = document.querySelector(".left div .save");
saveListButton.addEventListener("click", (e)=> {
    const rightUl = document.querySelector(".right ul");
    rightUl.innerHTML = "";
    const listItem = document.querySelectorAll(".left ul li");
    for (let item of listItem){
        const rightItems = document.createElement("li");
        const temp=item.textContent;
        const temp2=temp.slice(0,temp.length-6);
        rightItems.textContent = temp2.toString();
        rightUl.appendChild(rightItems);
    }
})

const input = document.querySelector(".right input");
input.addEventListener("input", (e)=>{
    const query = input.value.toLowerCase();
    const rightItem = document.querySelectorAll(".right ul li");
    for (let item of rightItem){
        if (item.textContent.includes(query)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    }
})
