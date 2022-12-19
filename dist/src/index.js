"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = process.env.port || 2022;
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use(express_1.default.json());
const bookstoreRouter_1 = __importDefault(require("../Router/bookstoreRouter"));
require("../config/db");
const allowedOrigins = ["http://localhost:3000"];
app.use((0, cors_1.default)({ origin: "*" }));
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server is running fine"
    });
});
app.use("/server", bookstoreRouter_1.default);
app.listen(port, () => {
    console.log("Server is up and running");
});
