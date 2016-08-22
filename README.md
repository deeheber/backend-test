# backend-test

## This is a single resource backend API where users can submit image links and captions that are stored in MongoDB.

## Technologies used
- NodeJS
- Mongoose
- MongoDB
- Express

## Directions to run
1. Download files and `npm install`
2. Download MongoDB
3. `npm start`
4. Use an application like Postman to make API calls from `localhost:3000`
5. `npm test` will run tests

## Available API calls
- `POST /api/image` JSON format { link: 'link to image', caption: 'caption here'}
- `GET /api/image`
