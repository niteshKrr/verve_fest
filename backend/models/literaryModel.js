const mongoose = require("mongoose");

const crosswordSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      },
      roll: {
        type: String,
        required: true,
      },
      batch: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  const debateSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      des: {
        type: String,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      },
      roll: {
        type: String,
        required: true,
      },
      batch: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  const essaySchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      },
      roll: {
        type: String,
        required: true,
      },
      batch: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  const group_discussionSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      },
      roll: {
        type: String,
        required: true,
      },
      batch: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  const poetrySchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      },
      roll: {
        type: String,
        required: true,
      },
      batch: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  const quizSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      },
      roll: {
        type: String,
        required: true,
      },
      batch: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  const speechSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      },
      roll: {
        type: String,
        required: true,
      },
      batch: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  const vedic_mathsSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      },
      roll: {
        type: String,
        required: true,
      },
      batch: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  

const Crossword = mongoose.model("Crossword", crosswordSchema);
const Debate = mongoose.model("Debate", debateSchema);
const Essay = mongoose.model("Essay", essaySchema);
const Group_discussion = mongoose.model("Group_discussion", group_discussionSchema);
const Poetry = mongoose.model("Poetry", poetrySchema);
const Quiz = mongoose.model("Quiz", quizSchema);
const Speech = mongoose.model("Speech", speechSchema);
const Vedic_maths = mongoose.model("Vedic_maths", vedic_mathsSchema);

module.exports = { Crossword, Debate, Essay, Group_discussion, Poetry, Quiz, Speech, Vedic_maths };
