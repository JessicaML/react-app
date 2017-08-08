function returnDiffArrays(array1, array2, compareField) {
  var onlyInA = differenceInFirstArray(array1, array2, compareField);
  var onlyInb = differenceInFirstArray(array2, array1, compareField);
  var result = onlyInA.concat(onlyInb);
  console.log("hai", result);
  return result;
}

function differenceInFirstArray(array1, array2, compareField) {
  return array1.filter(function (current) {
    return array2.filter(function (current_b) {
        return current_b[compareField] === current[compareField];
      }).length == 0;
  });


}

var a = [{
        "_id": "notif_1",
        "title": "title of notif 1",
        "body": "Body of notif 1. This is another notification.",
        "viewed": false
    },
    {
        "_id": "notif_2",
        "title": "title of notif 2",
        "body": "Body of notif 2. This is another notification.",
        "viewed": false

    },
    {
        "_id": "notif_3",
        "title": "title of notif 3",
        "body": "Body of notif 3. This is another notification.",
        "viewed": false

    },
    {
        "_id": "notif_6",
        "title": "Super-interesting title of notif 4",
        "body": "Super-interesting body of notif 4. This is another notification.",
        "viewed": false

    }
]


var b = [{
        "_id": "notif_1",
        "title": "title of notif 1",
        "body": "Body of notif 1. This is another notification.",
        "viewed": false
    },
    {
        "_id": "notif_2",
        "title": "title of notif 2",
        "body": "Body of notif 2. This is another notification.",
        "viewed": false

    },
    {
        "_id": "notif_3",
        "title": "title of notif 3",
        "body": "Body of notif 3. This is another notification.",
        "viewed": false

    }
]

returnDiffArrays(a,b)