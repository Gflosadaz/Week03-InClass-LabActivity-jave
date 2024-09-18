// Step 1:
const library = [
    {
      title: "Book One",
      author: "Author One",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "Book Two",
      author: "Author Two",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "Book Three",
      author: "Author Three",
      status: {
        own: true,
        reading: false,
        read: false
      }
    }
  ];

// Step 2:
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//Step 3:
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//Step4:
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

