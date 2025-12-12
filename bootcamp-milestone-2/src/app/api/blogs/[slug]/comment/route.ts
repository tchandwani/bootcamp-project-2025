import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../database/db';
import BlogModel from '../../../../../database/blogSchema';

type IParams = {
  params: Promise <{
    slug: string;
  }>;
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    // Get the request body
    const body = await req.json();
    
    // Validate the body
    if (!body.user || !body.comment) {
      return NextResponse.json(
        { error: 'User and comment are required' },
        { status: 400 }
      );
    }

    // Create the comment object with current timestamp
    const newComment = {
      user: body.user,
      comment: body.comment,
      time: new Date(),
    };

    // Find the blog and push the new comment to its comments array
    const updatedBlog = await BlogModel.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true } // Returns the updated document
    );

    if (!updatedBlog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Comment added successfully', comment: newComment },
      { status: 201 }
    );
  } catch (err) {
    console.error('Error adding comment:', err);
    return NextResponse.json(
      { error: 'Failed to add comment' },
      { status: 500 }
    );
  }
}