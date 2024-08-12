export default function decorate(block) {
  // Add classes to the elements
  block.classList.add('hero');
  const contentDiv = block.querySelector('div > div');
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('hero-image-container');
  const imgElement = block.querySelector('picture img');
  imageDiv.appendChild(imgElement);
  block.appendChild(imageDiv);
  contentDiv.classList.add('hero-content');
  const h1Element = block.querySelector('h1');
  h1Element.classList.add('hero-title');
  const pElements = block.querySelectorAll('p');
  pElements[0].classList.add('hero-description');
  pElements[1].classList.add('hero-subdescription');
  const links = block.querySelectorAll('a');
  links[0].classList.add('hero-button', 'hero-button-primary');
  links[1].classList.add('hero-button', 'hero-button-secondary');
}
