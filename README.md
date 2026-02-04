# Memory Master startup
[My Notes](notes.md)

## Elevator Pitch
The purpose of the project is to build a full front-to-back of a web page that allows users to play Memory. Daily parctice is essential to keep and health and focused mind. It can also be a fun way to incorporate word-image association for those trying to learn new concepts. This will allow for interactive and visual learning for those who feel that words on a page are not adaquate for their learning needs.

## Key Features
- User authentication (sign up, login, logout)
- Interactive memory-matching game boards
- Multiple preset grid sizes and image sets
- Performance tracking for individual users
- Optional competitive play against other users
- Real-time game updates and feedback

## Technologies Used

### HTML
- Semantic elements for layout (`header`, `main`, `section`, `footer`)
- Forms for user authentication (login and registration)
- Containers for game boards, cards, and score displays

### CSS
- Responsive layout to support different screen sizes
- Card-flipping animations for the memory game
- Hover and transition effects for buttons and cards
- Visual indicators for matched and unmatched cards

### React
- Will handle board and cards and login and signup forms
- Navigate between pages (login, game lobby, game view)
- Reactive UI updates as users interact with the game

### Endpoints
- Authenticate users (login, logout, registration)
- Store and retrieve user performance data
- Initialize new games and return game configurations
- Support competitive gameplay data exchanges

### Database
- User account information
- Game statistics such as scores, completion times, and attempts

### WebSocket
- Updating game state instantly during two player matches
- Broadcast opponent actions and score changes
- Supporting live multiplayer memory games

## Design Image
Here we can see a rough design of what our end product will look like. I plan on keeping the functionality quite simple initially to establish a functioning product. If there is additional time I may alter what the initial vision is.


![Design Image](./images/design_vision.jpg)

# Startup HTML
This will include a description of the various elements and that I have added
- 4 pages of pages of proper HTML that serve as tempary placeholders
- Use of Body, nav, main, header, footer
- I have funcitonal links between all four pages
- I have a word of the day api placeholder on the game page
- I have an image on the about page and the MM on the card buttons may also be an image.
- index page has a login placeholder
- score page has database placeholder
- Notification section to alert use to notifications(websocket)

# Startup CSS
For my CSS this is what i did.
- I used a bootstrap navagation bar that is uniform across the pages.
- Added style to footer and had that consistent accross the pages.
- Increased size of memory 'cards' and had them take of the center stage of the game page. Also added some interactive hovering features to the cards.
- Styled the scores table.
- All colors are temparary place holders as I have no eye for colors.
- I utilized flex as a way to adjust for various viewport views. I haven't made anything to make is supper nice for mobile devices. For now we will assume it should be a computer based websight.
- Imported a monospace font on index.html.
