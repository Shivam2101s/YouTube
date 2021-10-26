let cont = document.getElementById("videos");
let cont1 = document.getElementById("main");

async function main() {
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=AIzaSyC7eS8XT8JPxjU8HASLVDqx3rBU9RfiM-M&maxResults=40&part=snippet`
  );

  let data = await res.json();
  console.log("Data: ", data);
  appendMain(data.items);
}
main();

function appendMain(e) {
  e.forEach(({ id, snippet: { title } }) => {
    let box = document.createElement("div");
    let div = document.createElement("div");
    div.innerHTML = `<iframe width="100%" height="170px" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    let name = document.createElement("p");
    name.style.color = "white";
    name.innerHTML = title;
    box.append(div, name);
    cont1.append(box);
  });
}

async function searchVideos() {
  let name = document.getElementById("video").value;

  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${name}&type=video&key=AIzaSyC7eS8XT8JPxjU8HASLVDqx3rBU9RfiM-M&maxResults=40&part=snippet`
  );

  let data = await res.json();
  console.log("Data: ", data);

  appendVideos(data.items);
}

function appendVideos(video_data) {
  cont.innerHTML = null;
  cont1.innerHTML = null;
  video_data.forEach(({ id: { videoId } }) => {
    let div = document.createElement("div");
    div.innerHTML = `<iframe width="100%" height="170px" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    cont.append(div);
  });
}
let openMenu = document.querySelector("#show-menu");
let hideMenuIcon = document.querySelector("#hide-menu");
let sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function () {
  sideMenu.classList.add("active");
});

hideMenuIcon.addEventListener("click", function () {
  sideMenu.classList.remove("active");
});

function signUp() {
  window.location.assign("./signUp.html");
}
