const Sequelize = require('sequelize')
const sequelize = new Sequelize ('music_sequelize', 'postgres','postgres', {
    host: 'localhost',
    dialect: 'postgres'
})
const result = {};
const prompt = require('prompt-promise');

const Model = Sequelize.Model ;
class Track extends Model {};

Track.init ({
    album_id:{
        type: Sequelize.STRING,
        allowNull: false   
    },
    song_id:{
        type: Sequelize.STRING,
        allowNull: false   
    },
    track_duration:{
        type: Sequelize.STRING,
        allowNull: false   
    },

}, { sequelize, modelName: 'track', tableName: 'tracks', timestamps: false })


//prompt user to insert value into track table

promptToCreateTrackRecors ();

    // query to insert records into track table of music database

function insertTrackRecord() {
    Track.create(result).then((result) => {
        console.log('Inserted.');
    }).then(function multilineResponse() {
        return prompt.multiline('Do you want to create new Song?')
      }).then(function response(res){
        if (res == 'yes'){
            promptToCreateTrackRecors ()
        } else {
            prompt.end() 
               }
      })
    .catch(function(err){
            console.log("SQL Create Processing Table Error : " + err.message);    
    });
}



// function prompting user to insert values
 function promptToCreateTrackRecors () {
    prompt('Album Id: ')
    .then(function albumIdResponse(val) {
        result.album_id = val;
        return prompt.multiline('Song Id: ');
    })
    .then(function songIdResponse(val) {
        result.song_id = val;
        return prompt.multiline('Duration: ');
    }).then(function durationResponse(val) {
        result.track_duration = val;
        console.log('response:', result);
        console.log('Done! :)');
        prompt.done();

    })
    .then(() => {
        insertTrackRecord()
    })
 }