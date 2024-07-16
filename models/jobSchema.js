import mongoose from "mongoose";

// Define the schema
const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title."],
      minLength: [3, "Title must contain at least 3 characters!"],
      maxLength: [30, "Title cannot exceed 30 characters!"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description."],
      minLength: [50, "Description must contain at least 50 characters!"],
      maxLength: [1000, "Description cannot exceed 1000 characters!"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category."],
    },
    country: {
      type: String,
      required: [true, "Please provide a country name."],
    },
    city: {
      type: String,
      required: [true, "Please provide a city name."],
    },
    location: {
      type: String,
      required: [true, "Please provide a location."],
      minLength: [20, "Location must contain at least 20 characters!"],
    },
    fixedSalary: {
      type: Number,
      minLength: [4, "Salary must contain at least 4 digits"],
      maxLength: [9, "Salary cannot exceed 9 digits"],
    },
    salaryFrom: {
      type: Number,
      minLength: [4, "Salary must contain at least 4 digits"],
      maxLength: [9, "Salary cannot exceed 9 digits"],
    },
    salaryTo: {
      type: Number,
      minLength: [4, "Salary must contain at least 4 digits"],
      maxLength: [9, "Salary cannot exceed 9 digits"],
    },
    expired: {
      type: Boolean,
      default: false,
    },
    jobPostedOn: {
      type: Date,
      default: Date.now,
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true }, // include virtuals when converting to JSON
    toObject: { virtuals: true }, // include virtuals when converting to objects
  }
);

// Format the jobPostedOn date to a simple date format
jobSchema.methods.toJSON = function () {
  const obj = this.toObject();
  obj.jobPostedOn = obj.jobPostedOn.toISOString().split("T")[0]; // format date to YYYY-MM-DD
  return obj;
};

export const Job = mongoose.model("Job", jobSchema);
