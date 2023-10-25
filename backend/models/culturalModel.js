const mongoose = require("mongoose");

const calligraphySchema = mongoose.Schema(
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

  const paintingSchema = mongoose.Schema(
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

  const flashmobSchema = mongoose.Schema(
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

  const diya_decorationSchema = mongoose.Schema(
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

  const nukkad_natakSchema = mongoose.Schema(
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

  const singingSchema = mongoose.Schema(
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

  const stand_up_comedySchema = mongoose.Schema(
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

  const openmicSchema = mongoose.Schema(
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

  const sketchingSchema = mongoose.Schema(
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

  const theme_basedSchema = mongoose.Schema(
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


const Calligraphy = mongoose.model("Calligraphy", calligraphySchema);
const Painting = mongoose.model("Painting", paintingSchema);
const Flashmob = mongoose.model("Flashmob", flashmobSchema);
const Diya_decoration = mongoose.model("Diya_decoration", diya_decorationSchema);
const Nukkad_natak = mongoose.model("Nukkad_natak", nukkad_natakSchema);
const Singing = mongoose.model("Singing", singingSchema);
const Stand_up_comedy = mongoose.model("Stand_up_comedy", stand_up_comedySchema);
const Openmic = mongoose.model("Openmic", openmicSchema);
const Sketching = mongoose.model("Sketching", sketchingSchema);
const Theme_based = mongoose.model("Theme_based", theme_basedSchema);

module.exports = { Calligraphy, Painting, Flashmob, Diya_decoration, Nukkad_natak, Singing, Stand_up_comedy, Openmic, Sketching, Theme_based };
