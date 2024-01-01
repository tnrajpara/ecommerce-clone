import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const GET = async () => {
  try {
    client.connect();
    const db = client.db("products");
    const collection = db.collection("product");
    const data = await collection.find({}).toArray();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.error(err);
  }
};
