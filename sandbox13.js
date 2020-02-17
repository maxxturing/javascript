// logical operators - OR || and AND &&

const password = "p@ssword1234";

if (password.length >= 12 && password.includes("@")) {
  console.log("Password is very strong.");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length >= 5)
) {
  // || means or
  console.log("Password is strong enough.");
} else {
  console.log("Password is not strong enough.");
}
