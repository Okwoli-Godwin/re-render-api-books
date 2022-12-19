"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Bookstoreschema = new mongoose_1.default.Schema({
    author: String,
    title: String,
    coverImage: String,
    summary: String,
    ISBN: String,
    views: [],
    authorImage: String,
    category: String
});
exports.default = mongoose_1.default.model("books", Bookstoreschema);
