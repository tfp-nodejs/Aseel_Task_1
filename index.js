async function getposts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const filteredPosts = data.filter((post) => post.title.length < 25);

    console.log("Filtered Posts:", filteredPosts);
  } catch (error) {
    console.log("Request Failed:", error);
  }
}

getposts();
