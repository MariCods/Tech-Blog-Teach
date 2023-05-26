const newBlogHandler = async (event) => {
    event.preventDefault();

    const blogTitleField = document.querySelector('.title');
    const articleField = document.querySelector('.text');
    const authorNameField = document.querySelector('.name');
    // banner
    const bannerImage = document.querySelector('#banner-upload');
    const banner = document.querySelector(".banner");



    if (blogTitleField && articleField && authorNameField) {
        const response = await fetch(`/api/blog/`, {
            method: 'POST',
            body: JSON.stringify({ blogTitleField, articleField, authorNameField, }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/blog');
        } else {
            alert('Failed to create blog post');
        }
    }
};

document
 .querySelector('.blog-upload')
 .addEventListener('submit', newBlogHandler);