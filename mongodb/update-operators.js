// $set: Sets the value of a field.
{
  $set: {
    field: value;
  }
}

// $unset: Removes a field from a document.
{
  $unset: {
    field: "";
  }
}

// $inc: Increments or decrements the value of a numeric field.
{
  $inc: {
    field: 1;
  }
}

// $push: Adds a value to the end of an array.
{
  $push: {
    field: value;
  }
}

// $addToSet: Adds a value to an array only if the value does not already exist.
{
  $addToSet: {
    field: value;
  }
}

// $pull: Removes a specific value from an array.
{
  $pull: {
    field: value;
  }
}

// $pop: Removes the first or last element from an array.
{
  $pop: {
    field: 1;
  }
} // Removes the last element
{
  $pop: {
    field: -1;
  }
} // Removes the first element
