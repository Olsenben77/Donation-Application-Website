import axios from 'axios';

export default {
  searchnews: function(query) {
    return axios.get('http://newsapi.org/v2/top-headlines?q=' + query + '&apiKey=20ebd079386145bf8ef379ea799efbf4');
  }
};
