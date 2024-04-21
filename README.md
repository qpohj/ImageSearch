# README.md

## Setup

1. npm init -y in each directory. (server / client)
2. npm install in each directory. (server / client)
3. do 'npm run dev' in each terminal
4. open http://localhost/5173 in browser

### Created with

- Frontend - react/vite
- Backend - node/express
- 3rd-party - auth0 and google search api.
- :banana::gorilla:

### Klient:

- [x] Man skall kunna logga in med sitt Google eller GitHub konto (Auth0)
- [x] Man skall (endast om man är inloggad) kunna söka efter bilder och se resultatet, max 10 bilder. (Google Custom Search)

- [ ] Om man har stavat lite fel i sin sökning skall man få upp ”Menade du...” och kunna trycka på det rätt-stavade sökordet och göra en ny sökning.

- [ ] Man skall se hur lång tid sökningen tog
- [ ] Man skall kunna spara en bild och lägga till i sin lista över favoritbilder
- [ ] Någonstans på sidan skall man kunna se sin lista över favoritbilder
- [ ] Varje användare har sin egna unika lista över favoritbilder
  
### Server: 

- [ ] I en JSON-fil på servern lagras en lista över användare och deras favoritbilder. 
- [ ] Servern har en endpoint som sparar en favoritbild. Datan skall valideras med Joi innan 
den sparas. 
- [ ] Servern har en endpoint som svarar med en lista över favoritbilder tillhörande en specifik användare
