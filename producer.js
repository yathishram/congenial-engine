const {Kafka} = require('kafkajs');

const kafka = new Kafka({
    clientId: 'notification-service',
    brokers: ['localhost:9092']
})

const producer = kafka.producer();

const sendNotification = async (type, message) => {
    const topic = `notification-${type}`;
    await producer.connect();
    await producer.send({
        topic: topic,
        messages: [{
            value: JSON.stringify(message)
        }]
    })
    await producer.disconnect();
}


sendNotification('email', { userId: '123', message: 'Thanks' });
