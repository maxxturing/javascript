// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue; // ignore the rest of the code within the block for this loop
  }

  console.log("Your score:", scores[i], "points");

  if (scores[i] === 100) {
    console.log("Congratulations! You achieved the top score!");
    break; // breaks out of the loop
  }
}
