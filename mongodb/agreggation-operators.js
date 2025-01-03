// $match: Filters documents based on a condition.
{
  $match: {
    field: value;
  }
}

// $group: Groups documents by a field.
{
  $group: {
    _id: "$field", total;
    {
      $sum: 1;
    }
  }
}

// $project: Modifies the structure of the documents by including or excluding fields.
{
  $project: {
    field: 1, _id;
    0;
  }
}

// $sort: Sorts documents by one or more fields.
{
  $sort: {
    field: 1;
  }
} // 1 for ascending, -1 for descending

// $limit: Limits the number of documents returned.
{
  $limit: 5;
}

// $skip: Skips a specified number of documents.
{
  $skip: 10;
}
