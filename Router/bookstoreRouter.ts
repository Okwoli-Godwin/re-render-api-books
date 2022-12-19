import {Router} from "express"
import {getall, getone, myViews, postbooks, searchbooks} from "../Controller/bookscontroller"
import { coverUpload } from "../config/multer";

const router = Router()

router.route("/getall").get(getall)
router.route("/post").post(coverUpload,postbooks)
router.route("/getone/:id").get(getone);
router.route("/search").get(searchbooks);
router.route("/view/:id").patch(myViews);

export default router