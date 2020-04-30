
const Sequelize = require ('sequelize');
const sequelize = new Sequelize ('music', 'postgres', 'postgress', {
    host: 'localhost',
    dialect: 'postgres'
}) 
const Model = Sequelize.Model;
class Song extends Model {};
const prompt = require('prompt-promise');
const result = {};

Song.init({
    song_name:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    duration:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    release_year:{
        type: Sequelize.STRING,
        allowNull: false 
    },
},
    { sequelize, modelName: 'song', tableName: 'song', timestamps: false}

)
//prompt user to insert value into song table
promptToCreateSongRecords ()


// query to insert records into song table of music database

function insertSongRecords() {
    Song.create(result).then(function(){
        console.log('Inserted.');
    }).then(function multilineResponse() {
        return prompt.multiline('Do you want to create new Song?')
      }).then(function response(res){
        if (res == 'yes'){
          promptToCreateSongRecords ()
        } else {
            prompt.end() 
               }
      })
    .catch(function(err){
            console.log("SQL Create Processing Table Error : " + err.message);    
    });
}


// function prompting user to insert values


function promptToCreateSongRecords () {
    prompt('Song name: ')
.then(function ArtistResponse(val) {
  result.song_name = val;
  return prompt.multiline('Song Duration: ');
}).then(function durationResponse(val) {
    result.duration = val;
    return prompt.multiline('Song Release Year: ');

  }).then(function ArtistResponse(val) {
    result.release_year = val;
    console.log('response:', result);
    console.log('Done! :)'); 
  }).then(function(){
    insertSongRecords()
})
}