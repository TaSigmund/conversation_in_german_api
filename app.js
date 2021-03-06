/***
 * SIMPLE READ_ONLY API
***/

//DEPENDENCIES
const express = require('express');
const { getTopics, getTopicById } = require('./dynamo');
const app = express();
const cors = require('cors');

//CROSS-ORIGIN RESOURCE SHARING 
app.use(cors());

//RETURN ALL CONVERSATIONS
app.get('/api/conversations', async (req, res)=>{
    try {
        const topics = await getTopics();
        res.json(topics)
    }
    catch (error){
        console.error(error);
        res.status(500).json({err: 'An error has occurred.'});
    }
});

//RETURN ONE CONVERSATION
app.get('/api/conversations/:id', async (req, res)=>{
    const id = req.params.id.toString(); //the id in the database is of type string
    try {
        const topic = await getTopicById(id);
        res.json(topic)
    }
    catch (error){
        console.error(error);
        res.status(500).json({err: 'An error has occurred.'});
    }
});

//SERVER
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
})