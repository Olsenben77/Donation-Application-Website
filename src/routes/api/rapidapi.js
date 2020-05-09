const router = require("express").Router();
const axios = require("axios");

router.post("/search", (req, res) => {
  axios
    .get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=3c0fc420&app_key=0c12428e18e7fb50a1af2d2a834c2eaf&pageSize=25&search=
    ${req.body.term}`
    )
    .then(({ data }) => res.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
