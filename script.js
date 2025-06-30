//your JS code here. If required.
// Select DOM elements
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Function to return a promise that resolves after a delay
function delayPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

// Event listener for the button
button.addEventListener("click", () => {
  // Clear previous output
  output.innerText = "";

  // Get input value and convert to number
  const num = Number(input.value);

  // Check if input is a valid number
  if (isNaN(num)) {
    output.innerText = "Please enter a valid number.";
    return;
  }

  // Start chaining promises
  delayPromise(num, 2000) // Initial delay of 2s
    .then((res1) => {
      output.innerText = `Result: ${res1}`;
      return delayPromise(res1 * 2, 1000); // Multiply by 2 after 1s
    })
    .then((res2) => {
      output.innerText = `Result: ${res2}`;
      return delayPromise(res2 - 3, 1000); // Subtract 3 after 1s
    })
    .then((res3) => {
      output.innerText = `Result: ${res3}`;
      return delayPromise(res3 / 2, 1000); // Divide by 2 after 1s
    })
    .then((res4) => {
      output.innerText = `Result: ${res4}`;
      return delayPromise(res4 + 10, 1000); // Add 10 after 1s
    })
    .then((finalRes) => {
      output.innerText = `Final Result: ${finalRes}`;
    });
});
