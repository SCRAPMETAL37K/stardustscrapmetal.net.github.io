// Function to remove the ".html" extension from the URL
function removeHtmlExtension() {
    // Get the current URL
    let currentUrl = window.location.href;

    // Check if the URL ends with ".html"
    if (currentUrl.endsWith('.html')) {
        // Create the new URL by removing the ".html" extension
        let newUrl = currentUrl.substring(0, currentUrl.length - 5);

        // Use the History API to update the URL without reloading the page
        window.history.pushState({}, '', newUrl);
    }
}

// Call the function to remove the ".html" extension
removeHtmlExtension();