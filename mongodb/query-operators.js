// $eq: Equal
// Checks if the value of a field is equal to the provided value.
{
  field: {
    $eq: value;
  }
}

// $ne: Not Equal
// Checks if the value of a field is not equal to the provided value.
{
  field: {
    $ne: value;
  }
}

// $gt: Greater Than
// Checks if the value of a field is greater than the provided value.
{
  field: {
    $gt: value;
  }
}

// $gte: Greater Than or Equal
// Checks if the value of a field is greater than or equal to the provided value.
{
  field: {
    $gte: value;
  }
}

// $lt: Less Than
// Checks if the value of a field is less than the provided value.
{
  field: {
    $lt: value;
  }
}

// $lte: Less Than or Equal
// Checks if the value of a field is less than or equal to the provided value.
{
  field: {
    $lte: value;
  }
}

// $in: In
// Checks if the value of a field is in an array of values
{
  field: {
    $in: [value1, value2, value3];
  }
}

// $nin: Not In
// Checks if the value of a field is not in an array of values.
{
  field: {
    $nin: [value1, value2, value3];
  }
}

// $exists: Exists
// Checks if a field exists or not in a document.
{
  field: {
    $exists: true;
  }
}

// $regex: Regular Expression
// Performs a pattern match based on a regular expression, useful for text searches.
{
  field: {
    $regex: /pattern/i;
  }
}
