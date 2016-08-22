## Backend API Test

### This is a single resource backend API where users can submit information about images (url and caption) that will be stored in MongoDB.

### Technologies used
- NodeJS
- Express
- Mongoose
- MongoDB

### Directions to run
1. Download files and `npm install`
2. [Download MongoDB](https://www.mongodb.com/download-center#community)
3. `npm start`
4. Use an application like [Postman](https://www.getpostman.com/) to make API calls from `localhost:3000`
5. `npm test` will run tests - *warning:* tests will clear out the database

### Available API calls
- `POST /api/images` JSON format {url: 'link to image', caption: 'caption here'}
- `GET /api/images`
