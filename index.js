let postsArray = []
function showPost(){

     let html = ""
     for (let post of postsArray) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        
        document.getElementById("blog-list").innerHTML = html
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 10)
        
       
        showPost()
    
       
    })



    document.getElementById("form-blog").addEventListener("submit",function(e){

      e.preventDefault()
      
      const bodyPost= document.getElementById("body-post").value
      const titlePost= document.getElementById("title-post").value

      const data = {
        title:titlePost,
        body:bodyPost
      }

      const options = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            }
            
    
            fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
                    .then(res => res.json())
                    .then(post => {
                        

                        postsArray.unshift(post)
                        
                        
                        showPost()
                    })
            })



    

