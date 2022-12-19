import mongoose from "mongoose"

interface Books {
    author: string,
    title: string,
    coverImage: string,
    summary: string,
    ISBN: string,
    views: [],
    authorImage: string,
    category: string
}

interface iBooks extends Books, mongoose.Document{}

const Bookstoreschema = new mongoose.Schema({
    author: String,
    title: String,
    coverImage: String,
    summary: String,
    ISBN: String,
    views: [],
    authorImage: String,
    category: String
})

export default mongoose.model<iBooks>("books", Bookstoreschema)