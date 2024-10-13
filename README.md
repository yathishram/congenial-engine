# Kafka Tutorial

This project demonstrates a simple Kafka setup using Docker, along with a producer and consumer implemented in Node.js using the `kafkajs` library.

## Prerequisites

- Docker
- Node.js
- npm

## Getting Started

### Setting Up Kafka with Docker

The `docker-compose.yml` file sets up a Kafka broker and a Zookeeper instance. To start the services, run:

```sh
docker-compose up -d
```

### Producer

The producer is implemented in `producer.js`. It sends notifications to a Kafka topic.

#### Example Usage

```js
const { sendNotification } = require("./producer");

sendNotification("email", { userId: "123", message: "Thanks" });
```

### Consumer

The consumer is implemented in `consumer.js`. It listens for notifications on the Kafka topic.

```js
const { runConsumer } = require("./consumer");

runConsumer();
```

Running the Producer and Consumer

Start the Kafka services using Docker:

```sh
docker-compose up -d
```

Run the producer:

```sh
node producer.js
```

Run the consumer in a separate terminal:

```sh
node consumer.js
```

Project Structure
docker-compose.yml: Docker configuration for Kafka and Zookeeper.
producer.js: Kafka producer implementation.
consumer.js: Kafka consumer implementation.
package.json: Project dependencies and metadata.

Dependencies
kafkajs: A modern Apache Kafka client for Node.js.

License
This project is licensed under the ISC License.

This documentation provides an overview of the project, setup instructions, and usage examples for both the producer and consumer.
