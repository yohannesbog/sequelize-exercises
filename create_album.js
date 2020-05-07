const Sequelize = require('sequelize');
const sequelize = new Sequelize('music_sequelize', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  });

let result ={};

const prompt = require('prompt-promise');

const Model = Sequelize.Model;
class Album extends Model {}
Album.init({
    album_name: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      release_year: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      artist_id: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
}, { sequelize, modelName: 'album', tableName: 'album', timestamps: false });

// prompt to create album records 
promptToCreateAlbumRecords ();

// query to insert records into album table of music database
function insertAlbumRecords() {
    Album.create(result).then(function(){
        console.log('Inserted.');
    }).then(function multilineResponse() {
        return prompt.multiline('Do you want to create new Album?')
      }).then(function response(res){
        if (res == 'yes'){
          promptToCreateAlbumRecords()
        } else {
            prompt.end() 
               }
      })
    .catch(function(err){
            console.log("MYSQL Create Processing Table Error : " + err.message);    
    });
    // sequelize.end();
}


// function prompting user to insert values

function promptToCreateAlbumRecords () {
    prompt('album_name: ')
.then(function albumResponse(val) {
  result.album_name = val;
  return prompt.multiline('release_year: ');
})
.then(function multilineResponse(val) {
  result.release_year = val;
  return prompt.multiline('artist_id: ');
})
.then(function multilineResponse(val) {
  result.artist_id = val;
  console.log(val, 'response:', result);
  console.log('Done! :)');
  prompt.done();

}).then(() => {
    insertAlbumRecords()
})
}
