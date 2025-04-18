# Clone.GG

Front-end for a full-stack PERN app designed to mimic some of the functionality of https://op.gg using mock player data as a project for a Codecademy course.

The back-end can be found at https://github.com/xerocb/clone-gg-api.

The application is hosted at https://clone-gg.onrender.com.

## Functionality

- Player Search: Users can search for player data by entering a username. Most of the game data has been provided for a player with the username "LeBr0nzeJamez" (player search is currently case-sensitive). When viewing a player's match history, the names of other players can also be clicked to link to their histories.
- User Login: Users can register and sign in to create new players in the database. At the moment, the only functionality available is to change password - see Future Work below.

## Known Issues

- Refreshing the page anywhere but on the home page results in a 404 Not Found error.
- The back-end is hosted using a free instance of Render and is spun down with inactivity, which can cause the first request made to take a long time to receive a response.

## Future Work

- Add user, champion, and role icons in place of stand-in image.
- Add functionality to allow users to update own icon in Profile page.
- Add administrator role and ability to perform CRUD operations on game/player data.
- Add loading animations and comprehensive error handling.
- Add conditional formatting to indicate high/low winrates, KDA, p/kill, etc.
- Add infinite scrolling/button to load more game data.
- Make player search case-insensitive.
- Add search auto-fill.