function loadHomeContent() {
  // Fetch API call for Home content
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => displayContent(data, 'home'));
}

function loadAboutContent() {
  // Fetch API call for About Us content
  fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(response => response.json())
    .then(data => displayContent(data, 'about'));
}

function submitForm() {
  // Dummy function for form submission
  alert('Form submitted!');
}

function displayContent(data, section) {
  const contentContainer = document.querySelector(`.${section} .content`);
  contentContainer.innerHTML = '';

  if (data.title && data.body) {
    contentContainer.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.body}</p>
    `;
  } else {
    contentContainer.innerHTML = `<p>No content available.</p>`;
  }
}
