'use strict';
module.exports = (sequelize, DataTypes) => {
  const track = sequelize.define('track', {
    album_id: DataTypes.INTEGER,
    song_id: DataTypes.INTEGER,
    track_duration: DataTypes.INTEGER
  }, {});
  track.associate = function(models) {
    // associations can be defined here
  };
  return track;
};