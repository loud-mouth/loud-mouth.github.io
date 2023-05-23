function copyToClipboard(button) {
    let isButtonDisabled = false; // Flag variable to track the button's state
  
    function disableButton() {
      isButtonDisabled = true;
      button.classList.add('disabled');
      button.innerHTML = '<i class="fas fa-check"></i>';
    }
  
    function enableButton() {
      isButtonDisabled = false;
      button.classList.remove('disabled');
      button.innerHTML = '<i class="far fa-clipboard"></i>';
    }
  
    const codeElement = button.closest('.pre-container').querySelector('code');
    const code = codeElement.innerText;
  
    if (isButtonDisabled) {
      return; // Ignore clicks if the button is disabled
    }
  
    disableButton();
  
    navigator.clipboard.writeText(code)
      .then(() => {
        setTimeout(enableButton, 2000); // Reset the button after a delay (e.g., 2 seconds)
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
        enableButton(); // Enable the button in case of error
      });
  }