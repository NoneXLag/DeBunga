document.querySelector('.submit-post-button').addEventListener('click', () => {
    const postContent = document.querySelector('.post-input-container textarea').value;
    const fileInput = document.querySelector('#file-upload');
    const selectedFile = fileInput.files[0];

    if (postContent.trim() === '' && !selectedFile) {
        alert('Please add content or an image before submitting.');
        return;
    }

    console.log('Post Content:', postContent);

    if (selectedFile) {
        console.log('Selected File:', selectedFile.name);
    }

    // Example: Clear the input fields after submission
    document.querySelector('.post-input-container textarea').value = '';
    fileInput.value = '';
    alert('Post submitted successfully!');
});
