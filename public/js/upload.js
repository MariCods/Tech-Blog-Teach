const blogTitleField = document.querySelector('.title');
const articleField = document.querySelector('.textBlock');
const authorNameField = document.querySelector('.name');
// banner
// const bannerImage = document.querySelector('#banner-upload');
// const banner = document.querySelector(".banner");
const newBlogHandler = async (event) => {
    event.preventDefault();
 console.log(blogTitleField.value, articleField.value, authorNameField.value)
  
  const blog_name = blogTitleField.value;
  const body = articleField.value;
  const author_name = authorNameField.value


    if (blog_name && body && author_name) {
        const response = await fetch('/api/blog/', {
            method: 'POST',
            body: JSON.stringify({ blog_name, body, author_name, }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog post');
        }
    }
};

document
 .querySelector('.blog-upload')
 .addEventListener('submit', newBlogHandler);