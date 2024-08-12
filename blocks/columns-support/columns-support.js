export default function decorate(block) {
  // Apply the main class to the block
  block.classList.add('columns-support');

  // Get all direct child divs of the block
  const sections = block.querySelectorAll(':scope > div > div');

  // Apply section class to each child div
  sections.forEach((section) => {
    section.classList.add('columns-support-section');
  });

  // Apply a class to each h3 heading
  const headings = block.querySelectorAll('h3');
  headings.forEach((heading) => {
    heading.classList.add('columns-support-heading');
  });

  // Apply a class to each ul
  const lists = block.querySelectorAll('ul');
  lists.forEach((list) => {
    list.classList.add('columns-support-list');
  });

  // Apply a class to each li
  const listItems = block.querySelectorAll('li');
  listItems.forEach((listItem) => {
    listItem.classList.add('columns-support-list-item');
  });

  // Apply a class to each a
  const links = block.querySelectorAll('a');
  links.forEach((link) => {
    link.classList.add('columns-support-link');
  });

  // Apply a class to each p
  const paragraphs = block.querySelectorAll('p');
  paragraphs.forEach((paragraph) => {
    paragraph.classList.add('columns-support-paragraph');
  });
}
