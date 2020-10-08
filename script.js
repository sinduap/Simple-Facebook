const user = [
  {
    name: "sindu",
    password: "test",
  },
  {
    name: "futi",
    password: "12345",
  },
];

const feeds = [
  {
    name: "futi",
    comment: "hari yang melelahkan",
  },
  {
    name: "helda",
    comment: "filmnya bagus",
  },
];

/*
const username = prompt("Masukkan nama");
const password = prompt("Masukkan password");
b
const login = (username, password) => {
  user.forEach((user) => {
    if (
      user.name === username.toLowerCase() &&
      user.password === password.toLowerCase()
    ) {
      //Jalankan feed
      displayFeeds();
      return;
    }
  });
  console.log("Username tidak terdaftar");
};
*/

const login = (name, pass) => {
  for (i = 0; i < user.length; i++) {
    if (
      user[i].name == name.toLowerCase() &&
      user[i].password == pass.toLowerCase()
    ) {
      displayFeeds();
      return;
    }
  }
  console.log("Wrong password");
};

const displayFeeds = () =>
  feeds.map((feed) =>
    console.log(`Nama: ${feed.name}\nComment: ${feed.comment}`)
  );

login(prompt("Masukkan nama"), prompt("Masukkan password"));

/*

const namePrompt = prompt("Masukkan nama");
const passPrompt = prompt("Masukkan password");

function isUserValid(name, pass) {
  for (i = 0; i < user.length; i++) {
    if (
      user[i].name == name.toLowerCase() &&
      user[i].password == pass.toLowerCase()
    ) {
      runFeeds();
      return;
    }
  }
  alert("Wrong password");
}

function runFeeds() {
  feeds.forEach(logFeeds);
}

function logFeeds(feed) {
  console.log("name: " + feed.name + "\ncomment: " + feed.comment);
}

isUserValid(namePrompt, passPrompt);

*/
