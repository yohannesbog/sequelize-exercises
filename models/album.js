'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    // artist_id: DataTypes.INTEGER,
    release_year: DataTypes.INTEGER,
    album_name: DataTypes.STRING
  }, {});
  album.associate = function(models) {
    // associations can be defined here
    // album.hasMany(models.artist, {
    //   foreignKey: 'artist_id'
    // })
  };
  return album;
};