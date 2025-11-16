import mongoose, { Schema } from "mongoose";

// TypeScript type
type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
};

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