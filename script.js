
const newItemButton = document.querySelector("div button");
newItemButton.addEventListener("click", ()=>{
    const listItem = document.createElement("li");
    listItem.textContent = newItemButton.previousElementSibling.value;
    const listItemContainer = document.querySelector("ul");
    listItemContainer.appendChild(listItem);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    listItem.appendChild(deleteButton);
    deleteButton.style.marginLeft="5px";
})
const deleteButtonContainer = document.querySelector("ul");
deleteButtonContainer.addEventListener("click", (e) =>{
    e.target.parentElement.remove();
})
