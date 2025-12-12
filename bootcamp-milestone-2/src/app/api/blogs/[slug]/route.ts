import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import BlogModel from "../../../../database/blogSchema";

interface IParams {
  params: Promise<{ slug: string }>;
}

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params; // CHANGED: Added 'await'

  try {
    const blog = await BlogModel.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
}