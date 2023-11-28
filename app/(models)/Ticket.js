import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

/**
 * In short, this file exists to connect the app with the IP Address account I setup retrieving information to get our information hooked up
 *
 * -Purposes for this file: Above we import the mongoose packages
 * -The code establishes a connection to the MongoDB database
 *
 * --mongoose.Promise = global.Promise;--
 * Above line means: A promise it's an object that represents the completion or failure of an asynchronous operation.
 * By this, we avoid problems from callbacks
 * The asynchronous operation means that it's connected to a database and it fetches data from a remote server. Mongoose helps with this
 *
 * --What is inside the const code is the schema of what we need from global.Promise
 */
const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

/**
 * Below code represents the cache of the information model is retrieved through the mongodb Atlas IP Address
 */
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
