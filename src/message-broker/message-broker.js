import amqp from 'amqplib'
import _ from 'lodash'

let instance;
class MessageBroker {

    constructor() {
        this.queues = {};
    }
    /**
    * Initialize connection to rabbitMQ
    */
    async init() {
        this.connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
        this.channel = await this.connection.createChannel();
        return this;
    }
}

 /**
 * @return {Promise<MessageBroker>}
 */
 MessageBroker.getInstance = async function() {
    if (!instance) {
      const broker = new MessageBroker()
      instance = broker.init()
    }
    return instance;
  };

module.exports = MessageBroker;