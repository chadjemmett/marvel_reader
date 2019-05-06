// const Wikia = require("wikia");
const axios = require("axios");
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

// const w = new Wikia({wiki: "marvel"});



const id = 121;

axios.get('https://marvel.fandom.com/api/v1/Articles/Details?ids=50&titles=Amazing_Spider-Man_Vol_1_ ' + id + '&abstract=100&width=200&height=200')
.then(res => {
  const issue_id = Object.keys(res.data.items)[0];
  console.log(issue_id);
  axios.get("https://marvel.fandom.com/api/v1/Articles/AsSimpleJson?id=" + issue_id)
    .then(issue_data => {
      // console.log('issue data', issue_data);
      const new_string = issue_data.data.sections[2]['content'].map(item => {
        console.log(item, '\n');
      })
     })//console.log(issue_data.data.sections[2]['content']))
  .catch(err => console.log(err));
})
.catch(err => console.log(err))



