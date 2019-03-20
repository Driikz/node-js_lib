Array.prototype.isEmpty = function() {
  return Array.isArray(this) && this.length > 0 ? false : true;
};

Array.prototype.removeUndefined = function() {
  return this.filter(e => e != null);
};

Array.prototype.removeNumber = function(i) {
  return this.filter(e => isNaN(e));
};

module.exports = Array.prototype;
