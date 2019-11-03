Object.prototype.toJson = function () {
  return JSON.stringify(this);
}
String.prototype.parse = function () {
  return JSON.parse(this);
}
Array.prototype.isEmpty = function () {
  return this.length == 0;
};
Array.prototype.max = function () {
  if (this.length < 1) {
    throw "Cannot find max of empty array.";
  }
  return this.reduce((a, b) => Math.max(a, b));
};

Array.prototype.min = function () {
  if (this.length < 1) {
    throw "Cannot find min of empty array.";
  }
  return this.reduce((a, b) => Math.min(a, b));
};


`
{
  "name": "Manish",
  "array": [1, 3, "Some string"]
}
`.parse()