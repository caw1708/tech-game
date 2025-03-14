# Tech Impact Journey

A multiplayer quiz game about technology's impact on society. Test your knowledge about how technology has changed various aspects of our lives, from healthcare to education, from environmental impact to social interactions.

## Play the Game

Visit [https://caw1708.github.io/tech-game/](https://caw1708.github.io/tech-game/) to play the game.

## Features

- Multiplayer support (2-4 players)
- Various difficulty levels
- Wide range of technology-related questions
- Interactive board game experience
- Wild card challenges
- Learning about technology's impact on society

## How to Play

1. Select the number of players (2-4)
2. Enter player names
3. Take turns answering questions
4. Move forward when answering correctly
5. Land on wild card spaces for special challenges
6. First player to reach the end wins!

## Local Development

To run the game locally:

1. Clone the repository
2. Open `index.html` in your browser
3. Start playing!

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Responsive Design

## Question Difficulties

- Easy: Move 1 space on correct answer
- Medium: Move 2 spaces on correct answer
- Hard: Move 3 spaces on correct answer
- Wild Card Review: Move 3 spaces on correct answer

## Development

To run the game locally:

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser

## Contributing

Feel free to submit issues and enhancement requests!

## Deployment
The game can be deployed to various platforms:

### Render Deployment
1. Create an account on [Render](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Use the following settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variable: `PORT=10000`

### Railway Deployment
1. Create an account on [Railway](https://railway.app)
2. Create a new project
3. Connect your GitHub repository
4. The deployment will be automatic as Railway detects the Node.js project

### Heroku Deployment
1. Create an account on [Heroku](https://heroku.com)
2. Install Heroku CLI
3. Login to Heroku:
```bash
heroku login
```
4. Create a new Heroku app:
```bash
heroku create your-app-name
```
5. Deploy:
```bash
git push heroku main
```

## Environment Variables
- `PORT`: The port number for the server (default: 3000)

## Game Rules
1. Players take turns answering questions about technology's impact
2. Correct answers move you forward 2 spaces
3. Wild card spaces offer special challenges
4. Successfully completing a wild card challenge moves you forward 3 spaces
5. First player to reach the end wins! 