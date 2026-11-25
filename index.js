const { customFilter, customMap, customReduce } = require("./utils");
async function getposts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const filteredPosts = customFilter(data, (post) => post.title.length < 25);

    console.log("Filtered Posts:", filteredPosts);

    const Posts = customMap(data, (post) => post.title);
    console.log("Mapped Posts:", Posts);

    const totalPosts = customReduce(data, (total, post) => {
      return total + 1;
    });

    console.log("Total Posts:", totalPosts);
  } catch (error) {
    console.log("Request Failed:", error);
  }
}

getposts();
