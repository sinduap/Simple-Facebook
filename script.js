var user = [
  {
    name: "sindu",
    password: "test",
  },
  {
    name: "futi",
    password: "12345",
  },
];

var feed = [
  {
    name: "futi",
    comment: "hari yang melelahkan",
  },
  {
    name: "helda",
    comment: "filmnya bagus",
  },
];

var namePrompt = prompt("Masukkan nama");
var passPrompt = prompt("Masukkan password");

function isUserValid(name, pass) {
  let nameU = name.toLowerCase();
  let passU = pass.toLowerCase();
  for (i = 0; i < user.length; i++) {
    if (user[i].name == nameU && user[i].password == passU) {
      runFeed();
      return;
    }
  }
  alert("Wrong password");
}

function runFeed() {
  feed.forEach(logFeeds);
}

function logFeeds(feed) {
  console.log("name: " + feed.name + "\ncomment: " + feed.comment);
}

isUserValid(namePrompt, passPrompt);
