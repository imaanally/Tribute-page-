const div1 = document.getElementById("div1");
const div2 = document.querySelector("#div1");
console.log(div1);
console.log(div2);

const listItems = document.getElementsByClassName("list-items");
const queryListOfItems = document.querySelector(".list-items");
const queryListOfAllItems = document.querySelectorAll(".list-items");
console.log(listItems);
console.log(queryListOfItems);
console.log(queryListOfAllItems);



for (let i = 0; i<queryListOfAllItems.length; i++){
    console.log(queryListOfAllItems[i]);
}

const otherBooks = ["1984", "pride and prejudice", "the hobbit"];
const originalDiv = document.getElementById("div1").innerHTML;

function original (){
    console.log("original clicked");
    document.getElementById("div1").innerHTML = originalDiv
}

function replace() {
  console.log("replace clicked");
      const newHtml = `
        <h3>list of books</h3>
    <ul>
        <li class="list-items">Quran</li>
        <li class="list-item">Letters to Morrris</li>
        <li class="list-item">Schooled</li>
    </ul>
    document.querySelector("#div1").innerHTML = newHtml;
      `;
}

function updateBooks() {
  console.log("update books clicked");
  // Select all list items
  const books = document.querySelectorAll(".list-item");

  // Replace only the text using innerText
  for (let i = 0; i < books.length; i++) {
    books[i].innerText = otherbooks[i];
  }
}

