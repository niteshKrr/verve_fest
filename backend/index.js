require("./conn/mongo");

const { User } = require("./models/myModel");
const { Badminton, Carrom, Chess, Cricket, Discus_throw, Kabaddi, Kho_Kho, Long_jump, Shotput,Table_tennis, Tug_war, Volleyball } = require("./models/sportsModel");
const { Crossword, Debate, Essay, Group_discussion, Poetry, Quiz, Speech, Vedic_maths } = require("./models/literaryModel")
const { Calligraphy, Painting, Flashmob, Diya_decoration, Nukkad_natak, Singing, Stand_up_comedy, Openmic, Sketching, Theme_based } = require("./models/culturalModel");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/signup", (req, res) => {
  // console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/badminton", (req, res) => {
  // console.log(req.body);
  const user = new Badminton(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/carrom", (req, res) => {
  // console.log(req.body);
  const user = new Carrom(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/chess", (req, res) => {
  // console.log(req.body);
  const user = new Chess(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/cricket", (req, res) => {
  // console.log(req.body);
  const user = new Cricket(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/discus_throw", (req, res) => {
  // console.log(req.body);
  const user = new Discus_throw(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/kabaddi", (req, res) => {
  // console.log(req.body);
  const user = new Kabaddi(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/kho_kho", (req, res) => {
  // console.log(req.body);
  const user = new Kho_Kho(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/long_jump", (req, res) => {
  // console.log(req.body);
  const user = new Long_jump(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/shotput", (req, res) => {
  // console.log(req.body);
  const user = new Shotput(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/table_tennis", (req, res) => {
  // console.log(req.body);
  const user = new Table_tennis(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/tug_of_war", (req, res) => {
  // console.log(req.body);
  const user = new Tug_war(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/sports/volleyball", (req, res) => {
  // console.log(req.body);
  const user = new Volleyball(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/literary/crossword", (req, res) => {
  // console.log(req.body);
  const user = new Crossword(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/literary/debate", (req, res) => {
  // console.log(req.body);
  const user = new Debate(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/literary/essay", (req, res) => {
  // console.log(req.body);
  const user = new Essay(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/literary/group_discussion", (req, res) => {
  // console.log(req.body);
  const user = new Group_discussion(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/literary/poetry", (req, res) => {
  // console.log(req.body);
  const user = new Poetry(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/literary/quiz", (req, res) => {
  // console.log(req.body);
  const user = new Quiz(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/literary/speech", (req, res) => {
  // console.log(req.body);
  const user = new Speech(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/literary/vedic_maths", (req, res) => {
  // console.log(req.body);
  const user = new Vedic_maths(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/cultural/calligraphy", (req, res) => {
  // console.log(req.body);
  const user = new Calligraphy(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/cultural/painting", (req, res) => {
  // console.log(req.body);
  const user = new Painting(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/cultural/flashmob", (req, res) => {
  // console.log(req.body);
  const user = new Flashmob(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/cultural/diya_decoration", (req, res) => {
  // console.log(req.body);
  const user = new Diya_decoration(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/cultural/nukkad_natak", (req, res) => {
  // console.log(req.body);
  const user = new Nukkad_natak(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/cultural/singing", (req, res) => {
  // console.log(req.body);
  const user = new Singing(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/cultural/stand_up_comedy", (req, res) => {
  // console.log(req.body);
  const user = new Stand_up_comedy(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/cultural/openmic", (req, res) => {
  // console.log(req.body);
  const user = new Openmic(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/cultural/sketching", (req, res) => {
  // console.log(req.body);
  const user = new Sketching(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post("/cultural/theme_based", (req, res) => {
  // console.log(req.body);
  const user = new Theme_based(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});


app.listen(port, () => {
  console.log(`App started on http://localhost:${port}`);
});
