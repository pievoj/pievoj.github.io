const audioElement = document.getElementById('audioElement');

// Define an array of elements and their associated data
const elements = [
  { element: document.querySelector('.sheep1'), url: 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/1', textContainerId: 'text-container-1' },
  { element: document.querySelector('.duck1'), url: 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/2', textContainerId: 'text-container-2' },
  { element: document.querySelector('.cow1'), url: 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/3', textContainerId: 'text-container-3' },
  { element: document.querySelector('.dragon'), url: 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/4', textContainerId: 'text-container-4' },
  { element: document.querySelector('.table'), url: 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/5', textContainerId: 'text-container-5' },
  { element: document.querySelector('.koja'), url: 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/6', textContainerId: 'text-container-6' },
  { element: document.querySelector('.taure'), url: 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/7', textContainerId: 'text-container-7' },
  { element: document.querySelector('.gyvate'), url: 'https://raw.githubusercontent.com/pievoj/pievoj.github.io/main/8', textContainerId: 'text-container-8' },
];

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
function toggleText(textContainerId, githubRawURL) {
  const textContainer = document.getElementById(textContainerId);

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

// Add click event listeners for elements
elements.forEach(({ element, url, textContainerId }) => {
  element.addEventListener('click', async () => {
    audioElement.play();
    if (await githubURLExists(url)) {
      toggleText(textContainerId, url);
    }
    element.classList.toggle('z-index-4');
  });
});

// Use a self-invoking async function to handle initial element visibility
elements.forEach(async ({ element, url, textContainerId }) => {
  if (!(await githubURLExists(url))) {
    element.style.display = 'none';
  }
});
