import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// TypeScript type
type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
};

//comment shcema 
const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true, default: new Date() },
});

// Mongoose schema
const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  link: { type: String, required: true },
});

// Model
const Project = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export default Project;