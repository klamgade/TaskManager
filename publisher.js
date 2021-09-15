const amqp = require('amqplib/callback_api');
amqp.connect(`amqp://localhost:3000`, (err, connection) => {
    if(err) {
      throw err;  
    }
    connection.createChannel((err, channel) => {
        if(error) {
            throw error;
        }
        let queueName = 'test-queue';
        let message = "test message rabbitmq";
        channel.assertQueue(queueName, {
            durable: false
        });
        channel.sendToQueue(queueName, Buffer.from(message));
        console.log('msg', message);
        setTimeout(() => {
            connection.close();
        }, 1000);
    });
})