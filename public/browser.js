console.log("FrontEnd JS activated");

function itemTemplate(item) {
  return `<li
  class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
>
<span class="item-text">${item.reja}</span>
  <div>
    <button
      data-id="${item._id}"
      class="edit-me btn btn-secondary btn-sm mr-1"
    >
      O'zgartirish
    </button>
    <button
      data-id="${item._id}"
      class="delete-me btn btn-danger btn-sm"
    >
      O'chirish
    </button>
  </div>
</li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please try again!", err);
    });
});

document.addEventListener("click", (e) => {
  // delete operation

  if (e.target.classList.contains("delete-me")) {
    if (confirm("Do you really want to delete the item?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Error occured in deletion");
        });
    }
  }
  // edit operation
  if (e.target.classList.contains("edit-me")) {
    const oldInfo = Number(
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );

    let userInput = Number(
      prompt(
        "Make your change",
        (e.target.parentElement.parentElement.querySelector(
          ".item-text"
        ).innerHTML = "")
      )
    );
    if (userInput) {
      userInput += oldInfo;
      console.log(userInput);
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Error occured in making changes");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", () => {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});
