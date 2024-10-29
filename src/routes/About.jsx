import React from 'react';

function About() {
return (
    <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
        <h1>About</h1>
        <p>Welcome to the About page of Weather Dash by Andry Arthur!</p>
        <p> Weather Dash is your go-to platform for exploring fascinating astronomical data. On the Home page, you will find a variety of data visualizations that provide insights into celestial events, star formations, and planetary movements.</p>
        <p>Our goal is to make complex weather data accessible and engaging for everyone. Whether you're a seasoned astronomer or just starting your journey into the cosmos, AstroDash has something for you.</p>
        <p>Stay tuned for more updates and features as we continue to expand our data offerings and improve your stargazing experience!</p>
        <h4>Graph 1: Avg Temperature</h4>
        <p>
        The first graph shows the daily average temperature over a two-week period, with noticeable fluctuations in temperature. Around October 30 and November 8, 
        there are peaks reaching nearly 20°C, suggesting warmer days, possibly due to a high-pressure system or clear weather. 
        In contrast, significant drops to around 0°C on November 6 and 9 indicate cooler periods that might result from cold fronts or cloudy, overcast conditions. 
        This trend illustrates a cyclical temperature pattern, 
        which could be influenced by daily atmospheric shifts or season transitions typical of the time period.
        </p>
        <h4>Graph 2: Max Temp, Min Temp, and Moon Phase</h4>
        <p>
        The second graph displays the maximum and minimum temperatures alongside the moon phase for each day.
        The second graph presents maximum and minimum daily temperatures, alongside the moon phase as a purple line ranging from 0 (new moon) to 1 (full moon). 
        There’s an observable correlation between the temperature fluctuations and the lunar cycle; for instance, temperatures appear to dip around the new moon phase, then gradually increase as the moon moves towards full. 
        The maximum temperature line follows a sinusoidal pattern, indicating warm peaks on certain days, while the minimum temperatures stay generally low, sometimes even dropping below freezing. 
        This suggests that nighttime cooling is substantial, likely influenced by seasonal or atmospheric factors, with the lunar phase potentially playing a role in nocturnal cloud cover or atmospheric pressure changes.
        </p>
        <h4>Thank you for using Weather Dash.</h4>
    </div>
);
}

export default About;