const Sequelize = require('sequelize')
const sequelize = new Sequelize ('music_sequelize', 'postgres','postgres', {
    host: 'localhost',
    dialect: 'postgres'
})
const result = {};
const prompt = require('prompt-promise');

const Model = Sequelize.Model ;
class Artist extends Model {};

Artist.init ({
    artist_name:{
        type: Sequelize.STRING,
        allowNull: false   
    },

}, { sequelize, modelName: 'artist', tableName: 'artist', timestamps: false })


// Prompt user to insert values
promptToCreateArtistRecors ();


// function to insert recors in to the Artist table, music database

function insertArtistRecords() {
    Artist.create(result).then(function(){
        console.log('Inserted.');
    }).then(function multilineResponse() {
        return prompt.multiline('Do you want to create new Artist?')
      }).then(function response(res){
        if (res == 'yes'){
            promptToCreateArtistRecors()
        } else {
            prompt.end() 
               }
      })
    .catch(function(err){
            console.log("SQL Create Processing Table Error : " + err.message);    
    });
    // sequelize.end();
}


// function prompting user to insert values

function promptToCreateArtistRecors(){
    prompt('Artist name: ')
    .then(function ArtistResponse(val) {
      result.artist_name = val;
      console.log(val, 'response:', result);
      console.log('Done! :)');
    
    }).then(function(){
        insertArtistRecords()
    })
    }