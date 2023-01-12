const getTask = async () => {
  const url = "http://localhost:5000/todos";

  const res = await fetch(url);

  if (!res.ok) {
    const message = "data not received";
    throw new Error(message);
  }

  const data = await res.json();
  return data;
};

const display = (data) => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].title);
    const task = document.createElement("h3");
    task.innerText = data[i].title;
    task.style.backgroundColor = "white";
    task.style.width = "200px";
    task.style.marginLeft = "100px";

    const con = document.querySelector(".small-container");
    con.append(task);
  }
};

getTask()
  .then((data) => display(data))
  .catch((err) => console.error(err));
