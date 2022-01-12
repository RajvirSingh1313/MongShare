import nextConnect from "next-connect";
import middleware from "../../../middleware/database";
const ObjectId = require("mongodb").ObjectId;

const app = nextConnect();

app.use(middleware)

app.get(async (req, res) => {
    const {
        query: { id },
    } = req
    const doc = await req.db.collection("user").findOne({ _id: new ObjectId(id) })
    res.json(doc)
})

export default app;

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
}