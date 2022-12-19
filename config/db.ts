import mongoose from "mongoose"

const URI: string = "mongodb://localhost/bookstore"
const liveURI: string = "mongodb+srv://matter:manner@cluster0.8usbdhw.mongodb.net/Books?retryWrites=true&w=majority"

mongoose.connect(liveURI)
mongoose.connection
.on("open", () => {
    console.log("Database connected")
})

.once("error", () => {
    console.log("Failed to connect to the database")
})