import { v4 as uuidv4 } from "uuid";

export class Todo {
  id = "";
  description = "";
  finishedAt = null;

  constructor(description) {
    this.id = uuidv4();
    this.description = description;
    this.finishedAt = null;
  }
}
