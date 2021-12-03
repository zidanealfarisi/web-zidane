let blogs = [];

function addBlog(e) {
    e.preventDefault();

    let titleData = document.getElementById('input-blog-title').value;
    let contentData = document.getElementById('input-blog-content').value;
    let imageData = document.getElementById('input-blog-image');

    imageData = URL.createObjectURL(imageData.files[0]);

    let blog = {
        author: "Zidane Alfarisi",
        title: titleData,
        content: contentData,
        image: imageData,
        postedAt: Date()
      };
    
      blogs.push(blog);

      document.getElementById('input-blog-title').value = "";
      document.getElementById('input-blog-image').value = "";
      document.getElementById('input-blog-content').value = "";


     renderBlog();
    }

    function renderBlog() {
        let blogContainer = document.getElementById('contents');
      
        blogContainer.innerHTML = '';
      
        for (let i = 0; i <= blogs.length; i++) {
          blogContainer.innerHTML += `<div class="blog-list-item">
                                          <div class="blog-image">
                                          <img src="${blogs[i].image}" alt="" />
                                          </div>
                                          <div class="blog-content">
                                          <div class="btn-group">
                                              <button class="btn-edit">Edit Post</button>
                                              <button class="btn-post">Post Blog</button>
                                          </div>
                                          <h1>
                                              <a href="blog-detail.html" target="_blank">
                                                  ${blogs[i].title}
                                              </a>
                                          </h1>
                                          <div class="detail-blog-content">
                                              ${blogs[i].postedAt} | ${blogs[i].author}
                                          </div>
                                          <p>${blogs[i].content}</p>
                                          </div>
                                      </div>`;
        }
      }