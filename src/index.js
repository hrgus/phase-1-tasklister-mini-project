document.addEventListener("DOMContentLoaded", () => {
   let form = document.querySelector('form')
   form.addEventListener('submit', (e) => {
     e.preventDefault(); 
     form.appendChild(selectEl);
     buildToDo(e.target.new_task_description.value);
    form.reset();
   });

   let selectEl = document.createElement('select', '#select_options');
   let selectParent = document.querySelector('form')
   selectParent.appendChild(selectEl);
   let optionEl = document.createElement('OPTION');
   let optionEl2 = document.createElement('OPTION');
   let optionEl3 = document.createElement('OPTION');
   selectEl.appendChild(optionEl);
   selectEl.appendChild(optionEl2);
   selectEl.appendChild(optionEl3);

   optionEl.textContent = "High Priority";
   optionEl2.textContent = "Medium Priority";
   optionEl3.textContent = "Low Priority";

   optionEl.style.color = "red"
   optionEl2.style.color = "yellow"
   optionEl3.style.color = "green"

   selectEl.addEventListener('keyup', (e) => {

    buildDropDown(e.target.selectEl);
    
   });
  
});

function buildToDo(toDo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.textContent = "x";
  btn.addEventListener('click', handleDelete);
  p.textContent = `${toDo} `;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove();
}

// buildDropDown(DropDown) {
  
// }