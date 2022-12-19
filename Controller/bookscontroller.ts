import {Request, Response} from "express"
import Models from "../model/bookstoremodel"
import cloudinary from "../config/Cloudinary"

const postbooks = async (req: Request, res: Response):Promise<Response> => {
    try {
        const cloudImg = await cloudinary.uploader.upload(req?.file!.path)
        const {author, title, category, summary, views} = req.body

        const isbn1 = Math.floor(Math.random() * 10000)
        const isbn2 = Math.floor(Math.random() * 10000)
        const isbn3 = Math.floor(Math.random() * 10000)
        const isbn4 = Math.floor(Math.random() * 10000)

        const newbook = await Models.create({
            author,
            title,
            category,
            summary,
            views,
            ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
            coverImage: cloudImg.secure_url,
            authorImage: author.charAt(0).toUpperCase(),
        })
        return res.status(201).json({
            message: "Uploaded successfully",
            data: newbook
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error occured",
            data: error
        })
    }
}

const getall = async (req: Request, res: Response):Promise<Response> => {
    try {
        const books = await Models.find()
        return res.status(201).json({
            message: "Gotten successfully",
            data: Models
        })
    } catch (error) {
        return res.status(201).json({
            message: "An error occutred",
            data: error
        })
    }
}

const getone = async (req: Request, res: Response):Promise<Response> => {
    try {
        const getone = await Models.findById(req.params.id)
        return res.status(201).json({
            message: "Gotten successfully",
            data: getone
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}

const searchbooks = async (req: Request, res: Response):Promise<Response> => {
    try {
        const querydata = req.query
        const makeSearch = await Models.find(querydata)

        return res.status(201).json({
            message: "Data found",
            data: makeSearch
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}

const myViews = async (req: Request, res: Response): Promise<Response> => {
  try {
    const newView = await Models.findByIdAndUpdate(
      req.params.id,
      {
        $push: { view: req.body.ip },
      },
      { new: true }
    );

    return res.status(200).json({
      data: newView,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

export {getall, postbooks, getone, searchbooks, myViews}