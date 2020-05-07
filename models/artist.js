'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    artist_name: DataTypes.STRING
  }, {});
  artist.associate = function(models) {
    // associations can be defined here
    artist.hasMany(models.album, {
      foreignKey: 'artist_id'
    })
  };
  return artist;
};