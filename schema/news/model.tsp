import "../util/uuid.tsp";

model NewsModel {
  @key newsUUID: newsUUID;
}

scalar newsUUID extends uuidv4;
