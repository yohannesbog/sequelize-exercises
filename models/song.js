'use strict';
module.exports = (sequelize, DataTypes) => {
  const song = sequelize.define('song', {
    song_name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    release_year: DataTypes.INTEGER
  }, {});
  song.associate = function(models) {
    // associations can be defined here
  };
  return song;
};