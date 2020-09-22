document.addEventListener("DOMContentLoaded", () => {
    // Get all 7 (day) rows from the hours table
    const hours = document.getElementsByTagName('tbody')[0].children;

    // Get current day name
    const dayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    // Find the current day, and make it's text BOLD
    for (let i = 0; i < hours.length; i++) {
        if (hours[i].children[0].textContent == dayName) {
            hours[i].classList.add('has-text-weight-bold')
        }
    }
});