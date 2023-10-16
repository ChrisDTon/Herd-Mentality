# To Start Website
- npm run dev --prefix ./herdmentality
- node server.js

# Website Flow:

- Website is designed with 16:9 ascpect ratio

# Website Flow:

1. Choose a name
2. Enter a waiting room for everyone to get in /does not stop anyone from joining later
3. Press start when everyone is in
4. New webpage with a prompt and a text input field
5. The players try to match their answer
6. When every player has pressed answer they are redirected to a new webpage
7. Players figure out who has matching answers and if one is the odd one out
8. Press apply once everything has been figured out
9. Repeat



# Technologies

- Next.js
- NextAuth
- Maven
- Spring boot
- Spring Data JPA
- Prisma
- PostgreSQL
- RESTful API
- Express.js
- Websocket
- Session-less Authentication



# Game requirements

- Minimum three players, but preferably five plus
- A stack of prompts



# How to play

- Pick a prompt
- Everyone writes down something based on the prompt trying to match their inputs
- The people with the most matching inputs gets points



# Game mechanics

- If everyone has a matching except one, they get a black sheep modifier
- Only one person at a time can have a black sheep modifier
- Black sheep modifier: Cannot win, but can still get points



# Todo

- Add session-based authentication
- RESTful API for interaction between frontend, backend, and to ensure that all users see the same things
- Spring Data JPA for backend to database interaction
- Design sheep graphic
- Make the player icon

# Other
- Run "netstat -ano | findstr :3001" to confirm if the server is listening on the right port
