import axios from "axios";

const BASEURL =
  "https://api.data.charitynavigator.org/v2/Organizations?app_id=3c0fc420&app_key=0c12428e18e7fb50a1af2d2a834c2eaf&pageSize=25&search=";
export default {
  searchnews: function (query) {
    return axios.get(
      "http://newsapi.org/v2/top-headlines?q=" +
        query +
        "&apiKey=20ebd079386145bf8ef379ea799efbf4"
    );
  },
  search: function (charity) {
    return axios.get(BASEURL + charity + "&rated=true");
  },

  saveCharity: function (charityData) {
    return axios.post("/api/search", charityData);
  },

  getCharities: function (charity) {
    return axios.get(`/api/search/${charity || ""}`);
  },

  deleteCharity: function (id) {
    return axios.delete("/api/search/" + id);
  },
};
