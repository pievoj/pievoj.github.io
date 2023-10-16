const sheep1 = document.querySelector('.sheep1');
const audioElement = document.getElementById('audioElement');
const textDiv = document.querySelector('.text1');
const duck1 = document.querySelector('.duck1');
const text2Div = document.querySelector('.text2');
const cow1 = document.querySelector('.cow1');
const text3Div = document.querySelector('.text3');
const dragon = document.querySelector('.dragon');
const text4Div = document.querySelector('.text4');
const table = document.querySelector('.table');
const text5Div = document.querySelector('.text5');
const koja = document.querySelector('.koja');
const tex65Div = document.querySelector('.text6');
const taure = document.querySelector('.taure');
const tex7Div = document.querySelector('.text7');
const gyvate = document.querySelector('.gyvate');
const tex8Div = document.querySelector('.text8');
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
  toggleText('text-container-1', 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/1');
  sheep1.classList.toggle('z-index-4');
});

duck1.addEventListener('click', function() {
  audioElement.play();
  toggleText('text-container-2', 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/2');
  duck1.classList.toggle('z-index-4');
});

// Add a function to handle the click event for cow1
async function cow1ClickHandler() {
  audioElement.play();
  const githubRawURL = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/3';
  const textContainerId = 'text-container-3';

  if (await githubURLExists(githubRawURL)) {
    toggleText(textContainerId, githubRawURL);
  }

  cow1.classList.toggle('z-index-4');
}

// Use a self-invoking async function for the initial cow element visibility check
(async () => {
  const githubRawURLForCow = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/3';
  if (!(await githubURLExists(githubRawURLForCow))) {
    cow1.style.display = 'none';
  }
})();
 
// Add a click event listener for cow
cow1.addEventListener('click', cow1ClickHandler);



// Add a function to handle the click event for dragon
async function dragonClickHandler() {
  audioElement.play();
  const githubRawURL = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/4';
  const textContainerId = 'text-container-4';

  if (await githubURLExists(githubRawURL)) {
    toggleText(textContainerId, githubRawURL);
  }

  dragon.classList.toggle('z-index-4');
}

// Use a self-invoking async function for the initial dragon element visibility check
(async () => {
  const githubRawURLForDragon = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/4';
  if (!(await githubURLExists(githubRawURLForDragon))) {
    dragon.style.display = 'none';
  }
})();

// Add a click event listener for dragon
dragon.addEventListener('click', dragonClickHandler);


// Add a function to handle the click event for dragon
async function tableClickHandler() {
  audioElement.play();
  const githubRawURL = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/5';
  const textContainerId = 'text-container-5';

  if (await githubURLExists(githubRawURL)) {
    toggleText(textContainerId, githubRawURL);
  }

  table.classList.toggle('z-index-4');
}

// Use a self-invoking async function for the initial dragon element visibility check
(async () => {
  const githubRawURLForTable = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/5';
  if (!(await githubURLExists(githubRawURLForTable))) {
    table.style.display = 'none';
  }
})();

// Add a click event listener for dragon
table.addEventListener('click', tableClickHandler);



// Add a function to handle the click event for dragon
async function kojaClickHandler() {
  audioElement.play();
  const githubRawURL = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/6';
  const textContainerId = 'text-container-6';

  if (await githubURLExists(githubRawURL)) {
    toggleText(textContainerId, githubRawURL);
  }

  koja.classList.toggle('z-index-4');
}

// Use a self-invoking async function for the initial dragon element visibility check
(async () => {
  const githubRawURLForKoja = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/6';
  if (!(await githubURLExists(githubRawURLForKoja))) {
    koja.style.display = 'none';
  }
})();

// Add a click event listener for dragon
koja.addEventListener('click', kojaClickHandler);

// Add a function to handle the click event for dragon
async function taureClickHandler() {
  audioElement.play();
  const githubRawURL = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/7';
  const textContainerId = 'text-container-7';

  if (await githubURLExists(githubRawURL)) {
    toggleText(textContainerId, githubRawURL);
  }

  taure.classList.toggle('z-index-4');
}

// Use a self-invoking async function for the initial dragon element visibility check
(async () => {
  const githubRawURLForTaure = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/7';
  if (!(await githubURLExists(githubRawURLForTaure))) {
    taure.style.display = 'none';
  }
})();

// Add a click event listener for dragon
taure.addEventListener('click', taureClickHandler);

// Add a function to handle the click event for dragon
async function gyvateClickHandler() {
  audioElement.play();
  const githubRawURL = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/8';
  const textContainerId = 'text-container-8';

  if (await githubURLExists(githubRawURL)) {
    toggleText(textContainerId, githubRawURL);
  }

  gyvate.classList.toggle('z-index-4');
}

// Use a self-invoking async function for the initial dragon element visibility check
(async () => {
  const githubRawURLForGyvate = 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/8';
  if (!(await githubURLExists(githubRawURLForGyvate))) {
    gyvate.style.display = 'none';
  }
})();

// Add a click event listener for dragon
gyvate.addEventListener('click', gyvateClickHandler);
