async function getposts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
      console.log("Response Data:", data);

  } catch (error) {
    console.log("Request Failed:", error);
  }
}

getposts();