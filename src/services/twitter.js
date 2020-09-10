var Twitter = require('twitter');
 
const makeClient = () => {
    const env = process.env

    var client = new Twitter({
        consumer_key: env.TWITTER_CONSUMER_KEY,
        consumer_secret: env.TWITTER_CONSUMER_SECRET,
        access_token_key: env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: env.TWITTER_ACCESS_TOKEN_SECRET
    });

    return client;
}

const send = async () => {

    console.log('deu');
   
    // const client = makeClient();

    // // { error, tweet, response }
    // const response = await client.post('statuses/update', {  status: 'I am a tweet' });

    // console.log(response)
}

module.exports = {
    send,
    makeClient
}