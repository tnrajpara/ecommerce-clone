import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const getById = async (id) => {
  const db = client.db("products");
  const collection = db.collection("product");

  const result = await collection.find({ _id: new ObjectId(id) }).toArray();
  return result;
};

export const GET = async (req) => {
  try {
    await client.connect();
    const Id = req.url.split("productdetails/")[1];
    const data = await getById(Id);

    // const { cards } = req.query;
    // console.log("query of cards", cards);
    if (data) {
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.error("Product not found", { status: 404 });
    }
  } catch (err) {
    return NextResponse.error(err, { status: 500 }) && console.log(err);
  }
};
