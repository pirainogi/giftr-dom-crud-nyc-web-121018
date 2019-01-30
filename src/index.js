document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)

  const giftList = document.querySelector(".gift-list")
  let row = document.querySelectorAll(".row")
  row = row[row.length -1]

  function loadGifts(){
    for (let el of gifts){
      let div = document.createElement("div");
      let ul = document.createElement("ul");
      let giftLi = document.createElement("li");
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete"
      deleteButton.type = "submit"
      deleteButton.name = "delete"
      let editButton = document.createElement("button");
      editButton.innerText = "Edit"
      editButton.type = "submit"
      editButton.name = "edit"

      div.class = "ui raised very padded text container segment";
      div.style.background = `url(${el["image"]})`;
      giftLi.innerText = el["name"];
      row.appendChild(div)
      div.appendChild(ul)
      ul.appendChild(giftLi)
      div.appendChild(deleteButton)
      div.appendChild(editButton)


    }
  }
  loadGifts();

    const input = document.querySelector("#filter-input");
    input.addEventListener("input", function(event){
      let search = event.target.value
        let items = row.querySelectorAll("li")
        for (let item of items) {
          if (item.innerText.includes(`${search}`)) {
            console.log(item.innerText)
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        };
    })

  const giftForm = document.querySelector("#gift-form");

  giftForm.addEventListener('submit', function(submit) {
    submit.preventDefault()

    let div = document.createElement("div");
    let ul = document.createElement("ul");
    let giftLi = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete"
    deleteButton.type = "submit"
    deleteButton.name = "delete"
    let editButton = document.createElement("button");
    editButton.innerText = "Edit"
    editButton.type = "submit"
    editButton.name = "edit"

    div.class = "ui raised very padded text container segment";
    div.style.background = `url(${submit.target.image.value})`;
    giftLi.innerText = submit.target.name.value;
    row.appendChild(div)
    div.appendChild(ul)
    ul.appendChild(giftLi)
    div.appendChild(deleteButton)
    div.appendChild(editButton)
  })

  row.addEventListener('submit', function(deleteBtn) {
    deleteBtn.preventDefault()
    console.log("deleteBtn");

  })




}) // end of DOMContentLoaded
