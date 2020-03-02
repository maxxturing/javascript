// object literals

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "Berlin",
  blogs: [
    { title: "why mac & cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 50 }
  ],
  login: function() {
    console.log("the user logged in");
  },
  logout: function() {
    console.log("the user logged out");
  },
  logBlogs() {
    // regular function short-hand notation
    // can't use arrow function as `this` won't work
    console.log("this user has wrtten the following blogs:");
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    }); // this is a context object, represents context of this user object (where the current code is executed)
  }
};

user.login();

console.log(user);
console.log(user.name); // use dot notation to get one value

user.age = 35; // override a value
console.log(user.age);

const key = "location"; // set a key
console.log(user[key]); // use square brackets to grab it

console.log(user["email"]); // you can also use square bracket notation
user["name"] = "chun-li";
console.log(user["name"]);

console.log(typeof user);

user.logBlogs();
console.log(this);
