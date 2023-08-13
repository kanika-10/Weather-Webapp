# Weather WebApp

Introducing our WeatherWeb App - Your Personalized Weather Companion:

Discover the ultimate weather tracking experience with our WeatherWeb App, an innovative solution that brings you real-time weather updates from across the globe.

Key Features:

Visible Features:

1. User Authentication: Our WeatherWeb App employs a hosted REST-API, responsive to your AJAX requests, to ensure robust user authentication.Moreover, we've established a private route that contains all the weather app features mentioned below accessible exclusively to authorized users.

2. Current Location Data: Stay informed about the weather in your current location with just a click. Our app automatically detects your location and delivers up-to-the-minute weather updates tailored to your whereabouts.

3. Global Weather Exploration: Intrigued by weather conditions in far-off lands? Utilize our dynamic search bar connected to the REST-API, allowing you to fetch weather information for any region worldwide. Just provide the location name, and watch accurate weather reports pour in.

4. Curate Your Top 5 Favorites: Streamline the locations you care about most by adding them to your favorites list. Whether it's your hometown, a travel destination, or a place of significance, our app empowers you to mark up to five locations as favorites.Changing your preferences is hassle-free too – just as simple as removing a location from your list.

Non-Visible Features:

1. Centralized State Management: We've ingeniously introduced a "Centralized Store", streamlining state management across all components. This eradicates the need for prop drilling, ensuring smoother data flow and a more efficient user experience.

2. Fortified Private Route: Experience heightened security with our private route implementation. Only authorized users gain access to the full spectrum of Weather App features, ensuring data confidentiality and user exclusivity.

3. Seamless Notifications with React Toastify: Delve into a seamless journey with React Toastify. Our app uses this smart tool to elegantly display error and success notifications, keeping you informed without disruption.

4. Elevated UI with Material UI: Witness a visually refined experience as we leverage the power of Material UI. This ensures that data presentation is not only functional but also aesthetically captivating, enhancing your overall interaction.

Steps to Run the Project :

1. yarn install
2. yarn run dev
3. It will get hosted on http://127.0.0.1:5173/
4. For user Authorization
   Credentials: eve.holt@reqres.in (Note: Email should be exactly the same)
   Password : cityslicka (Note: any password will work here , Reason : Issue with the used hosted REST API )
