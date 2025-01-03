// $and: Combines multiple query expressions with an "AND" operation.
{
  $and: [{ field1: value1 }, { field2: value2 }];
}

// $or: Combines multiple query expressions with an "OR" operation.
{
  $or: [{ field1: value1 }, { field2: value2 }];
}

// $nor: Combines multiple query expressions with a "NOR" operation.
{
  $nor: [{ field1: value1 }, { field2: value2 }];
}

// $not: Reverses the condition of a query expression.
{
  field: {
    $not: {
      $gte: value;
    }
  }
}
