const url = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

// step 1
xhr.open("GET",url);

xhr.onload = function(){
    // console.log(xhr.readyState);
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();