document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "bd70608744ec467c9a363928230309"; // Replace with your WeatherAPI API key
    const locationTimezone = document.querySelector(".location-timezone");
    const icon = document.querySelector(".icon");
    const temperatureDegree = document.querySelector(".temperature-degree");
    const temperatureUnit = document.querySelector(".temperature-unit");
    const temperatureDescription = document.querySelector(".temperature-description");

    // Function to fetch weather data
    function fetchWeather(location) {
        fetch(`http://api.weatherapi.com/v1/current.json?key=d064d755e8ec4e7d92c82925230309&q=London&aqi=no
        `)
            .then(response => response.json())
            .then(data => {
                const { location, current } = data;
                const temperature = current.temp_c;
                const description = current.condition.text;
                const iconURL = current.condition.icon;
                const timezone = location.tz_id;

                locationTimezone.textContent = `Timezone: ${timezone}`;
                icon.innerHTML = `<img src="${iconURL}" alt="Weather Icon">`;
                temperatureDegree.textContent = `${temperature}°C`;
                temperatureUnit.textContent = "°C"; // Change to "°F" if you prefer Fahrenheit
                temperatureDescription.textContent = `Condition: ${description}`;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                alert("An error occurred. Please try again.");
            });
    }

    // Initial fetch with a default location (e.g., "New York")
    fetchWeather("New York");

    // Event listener for user input
    const locationInput = prompt("Enter a location (e.g., 'New York'):");
    if (locationInput) {
        fetchWeather(locationInput);
    }
});
