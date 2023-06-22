# SoundStack

## A Classic "iTunes" Experience

This website makes use of the [SpotifyAPI](https://developer.spotify.com/) to search your favorite songs and create custom playlists to upload to Spotify! This project is my first React application and serves as a way to get my feet wet understanding some core concepts around handling API data as well as the overall workflow for a SPA in React without major libraries.

![soundStackDemo](https://github.com/Ocn-W/SoundStack/assets/112736754/83d804d9-5af7-4867-86f7-57ccfca17143)

## User Guide

To demo this website you **do not** need to authorize your Spotify account. You may can mess around searching songs and populating playlist and playlist pages with specified information. If you wish to upload your custom playlist then feel free to authorize your account with the Log in button on the homepage!

## Known Issues/Contributions

With this being my first React project I am completely open to any changes and fixes. Over time I hope to be able to write cleaner more concise code that can make use of a wider array of tips and tricks. Here are some immediate changes I'm looking for help on: 

> The "Upload to Spotify" button **MUST** be pressed three times for it to properly create and upload the playlist with specified songs. I know it has to do with how I'm handling API data in the PlaylistPage component but am not entirely sure how I should refactor my promises. Any help here would be greatley appreciated!!

> Cleaning and condensing the slurry of states in App.js.. they all serve a purpose but in hindsight are there too many? The majority of these states are being passed via context and distributed all over the app so I am not sure. More clarity on best practices when it comes to this would be amazing.

>As it stands the playlistData does not persist between reloads of the webpage. I have a shotty useEffect attempting to do it but got lost trying to figure out how to populate the data back from the local storage into my app. To be fair, I considered persisting data well into development as I wasn't initially aware that I would even need to do that and the conveniences it brings. Any help fleshing out proper localStorage integration would be greately appreciated as well!! 

>The website is missing out some simple accessibilty conveniences (i.e pressing enter to submit input value instead of clicking the button) and any responsiveness issues of course feel free to let me know!

## Major Takeaways

Here are major concepts and things I learned while working on this App:

>Using *dotenv* to practice importance of "hiding" your API keys on the client side.

>Using GitBash to remove commit history when accidently committing a Client Secret to the main directory.. as well as rotating sed Secret.

>Fetching data from multiple endpoints in an API without a library.

>Using *React-Context* to handle complex state management to pass props up and down the component tree. I specifically chose this over *Redux* as it felt easier to implement while maining the overall idea for it's capabilities. I do intend to test out an application with Redux as well to compare.

>Understanding *Netlify* configuration (using "_redirects" and netlify.toml) for accessing API's not just on the local development server. 

## Final Notes

This is my very first project in React so any feedback is greatly appreciated. I am always looking for opportunies and collaborations with other developers or artist at any level so please reach out and [lets work](mailto:ocean.wrng@gmail.com) on some stuff!
