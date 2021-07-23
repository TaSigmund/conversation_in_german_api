/***
 * DATABASE CONNECTION AND HELPER FUNCTIONS
***/

//DEPENDENCIES
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

//GET ALL CONVERSATIONS
const getTopics = async ()=> {
    const params = {
        TableName: TABLE_NAME
    };
    const topics = await dynamoClient.scan(params).promise();
    return topics;
}

//GET A SINGLE CONVERSATION 
const getTopicById = async (id)=> {
    const params = {
        TableName: TABLE_NAME,
        Key: {id}
    };
    const topic = await dynamoClient.get(params).promise();
    return topic
}

module.exports = {
    dynamoClient,
    getTopics,
    getTopicById
}