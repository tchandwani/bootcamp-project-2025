import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../database/db";
import BlogModel from "../../../../../database/blogSchema";

interface IParams {
  params: Promise<{ slug: string }>;
}

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params; // CHANGED: Added 'await'

  try {
    const body = await req.json();
    const { user, comment } = body;

    if (!user || !comment) {
      return NextResponse.json(
        { error: "User and comment are required" },
        { status: 400 }
      );
    }

    const blog = await BlogModel.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const newComment = {
      user,
      comment,
      time: new Date(),
    };

    blog.comments.push(newComment);
    await blog.save();

    return NextResponse.json(
      { message: "Comment added successfully", comment: newComment },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json(
      { error: "Failed to add comment" },
      { status: 500 }
    );
  }
}