let isButtonDisabled = false; // Flag variable to track the button's state

function copyToClipboard(button) {
  if (isButtonDisabled) {
    return; // Ignore clicks if the button is disabled
  }

  const codeElement = button.closest('.pre-container').querySelector('code');
  const code = codeElement.innerText;

  isButtonDisabled = true; // Disable the button
  button.classList.add('disabled');
  button.innerHTML = '<i class="fas fa-check"></i>'; // Assuming you're using FontAwesome for icons
  
  navigator.clipboard.writeText(code)
    .then(() => {
      // Reset the button after a delay (e.g., 2 seconds)
      setTimeout(() => {
        isButtonDisabled = false; // Enable the button
        button.classList.remove('disabled');
        button.innerHTML = '<i class="far fa-clipboard"></i>'; // Assuming you're using FontAwesome for icons
    }, 2000); // Change the delay time as needed
})
.catch((error) => {
        console.error('Failed to copy:', error);
        isButtonDisabled = false; // Enable the button in case of error
        button.innerHTML = '<i class="far fa-clipboard"></i>'; // Assuming you're using FontAwesome for icons
        button.classList.remove('disabled');
    });
}
