const sheep1 = document.querySelector('.sheep1');
const audioElement = document.getElementById('audioElement');
const textDiv = document.querySelector('.text1');
const duck1 = document.querySelector('.duck1');
const text2Div = document.querySelector('.text2');
const cow1 = document.querySelector('.cow1');
const text3Div = document.querySelector('.text3');

// Function to check if a GitHub URL exists and is not empty
async function githubURLExists(githubRawURL) {
  try {
    const response = await fetch(githubRawURL);
    if (response.status === 200) {
      const data = await response.text();
      return data.trim() !== '';
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

// Function to toggle the display of text
function toggleText(containerId, githubRawURL) {
  const textContainer = document.getElementById(containerId);

  if (textContainer.style.display === 'block') {
    textContainer.style.display = 'none';
  } else {
    fetch(githubRawURL)
      .then((response) => response.text())
      .then((data) => {
        textContainer.innerHTML = `<p>${data}</p>`;
        textContainer.style.display = 'block';
      })
      .catch((error) => console.error(error));
  }
}

// Add click event listeners for your elements
sheep1.addEventListener('click', function() {
  audioElement.play();
  toggleText('text-container-1', 'https://raw.githubusercontent.com/rutaviz/texttest/main/1');
  sheep1.classList.toggle('z-index-4');
});

duck1.addEventListener('click', function() {
  audioElement.play();
  toggleText('text-container-2', 'https://raw.githubusercontent.com/rutaviz/texttest/main/2');
  duck1.classList.toggle('z-index-4');
});

// Add a function to handle the click event for cow1
async function cow1ClickHandler() {
  audioElement.play();
  const githubRawURL = 'https://raw.githubusercontent.com/rutaviz/texttest/main/3';
  const textContainerId = 'text-container-3';

  if (await githubURLExists(githubRawURL)) {
    toggleText(textContainerId, githubRawURL);
  }

  cow1.classList.toggle('z-index-4');
}

// Use a self-invoking async function for the initial cow element visibility check
(async () => {
  const githubRawURLForCow = 'https://raw.githubusercontent.com/rutaviz/texttest/main/3';
  if (!(await githubURLExists(githubRawURLForCow))) {
    cow1.style.display = 'none';
  }
})();

// Add a click event listener for cow1
cow1.addEventListener('click', cow1ClickHandler);
