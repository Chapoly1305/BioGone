// content.js
console.log("Content script loaded");

function findLearnOeBody() {
  const element = document.getElementById('learn-oe-body');
  if (element) {
    console.log("Element #learn-oe-body found");
    
    // Find class lb-wrapper and remove it
    const wrapperElement = document.querySelector('.lb-wrapper');
    if (wrapperElement) {
      console.log("Removing .lb-wrapper element");
      wrapperElement.remove();
    }
    
    // Find class lb-overlay and remove it
    const overlayElement = document.querySelector('.lb-overlay');
    if (overlayElement) {
      console.log("Removing .lb-overlay element");
      overlayElement.remove();
    }
    
    console.log("Removal operations completed");
  }
}

// Run the function immediately in case we're already in the right frame
findLearnOeBody();

// Also set up a MutationObserver in case the element is added dynamically
const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    if (mutation.type === 'childList') {
      findLearnOeBody();
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });

console.log("Observer set up");