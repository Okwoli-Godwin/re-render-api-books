"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myViews = exports.searchbooks = exports.getone = exports.postbooks = exports.getall = void 0;
const bookstoremodel_1 = __importDefault(require("../model/bookstoremodel"));
const Cloudinary_1 = __importDefault(require("../config/Cloudinary"));
const postbooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cloudImg = yield Cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const { author, title, category, summary, views } = req.body;
        const isbn1 = Math.floor(Math.random() * 10000);
        const isbn2 = Math.floor(Math.random() * 10000);
        const isbn3 = Math.floor(Math.random() * 10000);
        const isbn4 = Math.floor(Math.random() * 10000);
        const newbook = yield bookstoremodel_1.default.create({
            author,
            title,
            category,
            summary,
            views,
            ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
            coverImage: cloudImg.secure_url,
            authorImage: author.charAt(0).toUpperCase(),
        });
        return res.status(201).json({
            message: "Uploaded successfully",
            data: newbook
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error occured",
            data: error
        });
    }
});
exports.postbooks = postbooks;
const getall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookstoremodel_1.default.find();
        return res.status(201).json({
            message: "Gotten successfully",
            data: bookstoremodel_1.default
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "An error occutred",
            data: error
        });
    }
});
exports.getall = getall;
const getone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getone = yield bookstoremodel_1.default.findById(req.params.id);
        return res.status(201).json({
            message: "Gotten successfully",
            data: getone
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        });
    }
});
exports.getone = getone;
const searchbooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querydata = req.query;
        const makeSearch = yield bookstoremodel_1.default.find(querydata);
        return res.status(201).json({
            message: "Data found",
            data: makeSearch
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        });
    }
});
exports.searchbooks = searchbooks;
const myViews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newView = yield bookstoremodel_1.default.findByIdAndUpdate(req.params.id, {
            $push: { view: req.body.ip },
        }, { new: true });
        return res.status(200).json({
            data: newView,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error,
        });
    }
});
exports.myViews = myViews;
