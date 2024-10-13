const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "notification-service",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({
  groupId: "notification-group",
});

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({
    topic: "notification-email",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const notification = JSON.parse(message.value.toString());
      // Process the email notification here
      console.log(
        `Sending email to user ${notification.userId}: ${notification.message}`
      );
    },
  });
};

runConsumer();
