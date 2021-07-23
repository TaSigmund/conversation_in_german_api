const AWS = require('aws-sdk');
require('dotenv').config(); //allows access to the credentials in .env

//CONNECTION TO AWS 
AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

//CREATE DYNAMODB DOCUMENT CLIENT
const dynamoClient = new AWS.DynamoDB.DocumentClient();

//TABLE TO CONNECT TO
const TABLE_NAME="conversationingerman-api";
