import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../database/db';
import ProjectModel from '../../../../database/projectSchema';

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const body = await req.json();
    
    // Validate
    if (!body.projectSlug || !body.user || !body.comment) {
      return NextResponse.json(
        { error: 'Project slug, user, and comment are required' },
        { status: 400 }
      );
    }

    const newComment = {
      user: body.user,
      comment: body.comment,
      time: new Date(),
    };

    // Update the project with the new comment
    const updatedProject = await ProjectModel.findOneAndUpdate(
      { slug: body.projectSlug },
      { $push: { comments: newComment } },
      { new: true }
    );

    if (!updatedProject) {
      return NextResponse.json(
        { error: 'Project not found' },
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