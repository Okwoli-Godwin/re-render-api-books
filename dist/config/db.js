"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongodb://localhost/bookstore";
const liveURI = "mongodb+srv://matter:manner@cluster0.8usbdhw.mongodb.net/Books?retryWrites=true&w=majority";
mongoose_1.default.connect(URI);
mongoose_1.default.connection
    .on("open", () => {
    console.log("Database connected");
})
    .once("error", () => {
    console.log("Failed to connect to the database");
});
