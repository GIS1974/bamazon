# bamazon

## Overview
This program contacts product inventory database and displays the results including unique product ID, product name and product price. Afterwards the user is prompted to either display inventory, buy product selected by ID, or quit.
The program was created in javascript using node.js, mysql and inquirer packages. Database was set up in MySQL Workbench.

## How it works
To start the program open command line or Git Bash and enter command <node bamazonCustomer.js>.
![Initial view](/assets/images/screen1.PNG)

User can use arrow buttons to chose on of three options:
1. **Display inventory** 
If the user chooses display inventory, inventory is displayed as shown in the image below, and user is asked the same question "What would you like to do?".
![Display inventory](/assets/images/screen2.PNG)

1. **Buy product** 
If the user chooses buy product option, user is prompted for a unique product id to be entered as shown below.
![Buy product](/assets/images/screen3.PNG)

If the user enters valid product id, the user is then asked to enter product quantity as shown below.
![Select product by ID](/assets/images/screen4.PNG)

Afterwards, total product cost is displayed, database is updated, and user is again asked to either display inventory, buy product, or quit as shown below.
![Display total cost](/assets/images/screen5.PNG)









LIRI uses these commands to retrieve data from APIs:
 1. **'concert-this' <artist/band name>** -- search the Bands in Town API and render the following information about each event to the terminal:
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

![Liri-concerts](/assets/images/liri-concerts.PNG)
*<p align="center">Example of using concerts search command</p>*

 2. **'spotify-this-song' <song (and artist) name>** -- search the Spotify API and render the following information about the song to the terminal:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

![Liri-song](/assets/images/liri-song.PNG)
*<p align="center">Example of using song search command</p>*

 3. **'movie-this' <movie name>** -- search the OMDB API and render the following information about the movie to the terminal:
* Title of the movie
* Year the movie came out
* IMDB Rating of the movie
* Rotten Tomatoes Rating of the movie
* Country where the movie was produced
* Language of the movie
* Plot of the movie
* Actors in the movie

![Liri-movie](/assets/images/liri-movie.PNG)
*<p align="center">Example of using movie search command</p>*

 4. **'do-what-it-says'** -- LIRI takes the text inside of random.txt and then use it to call one of LIRI's commands:

 ![Liri-diit](/assets/images/liri-doit.PNG)
*<p align="center">Example of using 'do-what-it-says' command</p>*

If no command provided user sees the following message:
 ![Liri-1](/assets/images/liri-1.PNG)