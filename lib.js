Array.prototype.isEmpty = function() {
  return Array.isArray(this) && this.length > 0 ? false : true;
};

Array.prototype.removeUndefined = function() {
  return this.filter(e => e != null);
};

Array.prototype.removeNumber = function() {
  return this.filter(e => !Number.isInteger(e));
};

module.exports = Array.prototype;
