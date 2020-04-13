const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let i = 0

function newTodo() {
//  alert('New TODO button clicked!')

  i = ++i
  console.log(list)
  console.log(itemCountSpan)
  console.log(uncheckedCountSpan)

  //checkbox area
  var liNode = document.createElement("li")

  var checkboxNode = document.createElement("input");
  checkboxNode.type = "checkbox"
  checkboxNode.id = "cbox" + i
  checkboxNode.name = "cbox"
  checkboxNode.className = "Checkbox"
  checkboxNode.onclick = ()=> countCheckboxes()

  liNode.appendChild(checkboxNode)
  list.appendChild(liNode);

  var itemCount = i
  //item Count
  itemCountSpan.textContent = itemCount
  
  function uncheckedBoxes() {
    const y = document.querySelectorAll('input[name=cbox]:checked').length;
    console.log("Checked count= " + y)
    console.log("item Count= " + itemCountSpan.textContent)
    const z = itemCountSpan.textContent - y
    console.log("Unchecked count = " + z)
    uncheckedCountSpan.textContent = z
  }

  function countCheckboxes() {
    uncheckedBoxes()
  }
}
