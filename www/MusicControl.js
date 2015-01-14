module.exports = {
  play: function(cb) {
    return this._execute("play", [], cb);
  },
  togglepause: function(cb) {
    return this._execute("togglepause", [], cb);
  },
  pause: function(cb) {
    return this._execute("pause", [], cb);
  },
  stop: function(cb) {
    return this._execute("stop", [], cb);
  },
  previous: function(cb) {
    return this._execute("previous", [], cb);
  },
  next: function(cb) {
    return this._execute("next", [], cb);
  },
  playTrack: function(trackURI, cb) {
    return this._execute("playTrack", [trackURI], cb);
  },
  _execute: function(mcCmd, mArgs, callback) {
    return cordova.exec(function(cb) {
      if (callback) {
        return callback(null, cb);
      }
    }, function(err) {
      return callback(err);
    }, "MusicControl", mcCmd, mArgs);
  }
};
