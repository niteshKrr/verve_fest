const mongoose = require("mongoose");

const badmintonSchema = mongoose.Schema(
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

const carromSchema = mongoose.Schema(
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

const chessSchema = mongoose.Schema(
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

const cricketSchema = mongoose.Schema(
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

const discus_throwSchema = mongoose.Schema(
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

const kabaddiSchema = mongoose.Schema(
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

const kho_khoSchema = mongoose.Schema(
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

const long_jumpSchema = mongoose.Schema(
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

const shotputSchema = mongoose.Schema(
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

const table_tennisSchema = mongoose.Schema(
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

const tug_of_warSchema = mongoose.Schema(
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

const volleyballSchema = mongoose.Schema(
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


const Badminton = mongoose.model("Badminton", badmintonSchema);
const Carrom = mongoose.model("Carrom", carromSchema);
const Chess = mongoose.model("Chess", chessSchema);
const Cricket = mongoose.model("Cricket", cricketSchema);
const Discus_throw = mongoose.model("Discus_throw", discus_throwSchema);
const Kabaddi = mongoose.model("Kabaddi", kabaddiSchema);
const Kho_Kho = mongoose.model("Kho_Kho", kho_khoSchema);
const Long_jump = mongoose.model("Long_jump", long_jumpSchema);
const Shotput = mongoose.model("Shotput", shotputSchema);
const Table_tennis = mongoose.model("Table_tennis", table_tennisSchema);
const Tug_war = mongoose.model("Tug_war", tug_of_warSchema);
const Volleyball = mongoose.model("Volleyball", volleyballSchema);

module.exports = { Badminton, Carrom, Chess, Cricket, Discus_throw, Kabaddi, Kho_Kho, Long_jump, Shotput, Table_tennis, Tug_war, Volleyball };
