// Function to add a new post
function addPost() {
  const userName = document.getElementById('user-name').value;
  const postText = document.getElementById('new-post-text').value;

  if (userName === '' || postText === '') {
    alert('Please fill in both fields.');
    return;
  }

  const postContainer = document.getElementById('posts-container');
  const newPost = document.createElement('div');
  newPost.className = 'post';
  newPost.innerHTML = `
    <h3>${userName}</h3>
    <p>${postText}</p>
    <div class="post-actions">
      <span class="like-btn" onclick="likePost(this)">👍 Like <span class="like-count">0</span></span>
      <span class="comment-btn" onclick="toggleComments(this)">💬 Comment</span>
    </div>
    <div class="comments-section" style="display:none;">
      <input type="text" placeholder="Your name..." class="comment-name-input">
      <textarea placeholder="Write a comment..." class="comment-text-input"></textarea>
      <button onclick="addComment(this)">Add Comment</button>
      <div class="comments-container"></div>
    </div>
  `;
  postContainer.appendChild(newPost);

  // Clear the input fields
  document.getElementById('user-name').value = '';
  document.getElementById('new-post-text').value = '';
}

// Function to like a post
function likePost(button) {
  const likeCount = button.querySelector('.like-count');
  likeCount.textContent = parseInt(likeCount.textContent) + 1;
}

// Function to toggle comments section
function toggleComments(button) {
  const commentsSection = button.parentElement.nextElementSibling;
  commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
}

// Function to add a comment
function addComment(button) {
  const commentName = button.parentElement.querySelector('.comment-name-input').value;
  const commentText = button.parentElement.querySelector('.comment-text-input').value;

  if (commentName === '' || commentText === '') {
    alert('Please enter both your name and a comment.');
    return;
  }

  const commentsContainer = button.nextElementSibling;
  const newComment = document.createElement('div');
  newComment.className = 'comment';
  newComment.innerHTML = `<strong>${commentName}:</strong> ${commentText}`;

  commentsContainer.appendChild(newComment);
  button.parentElement.querySelector('.comment-name-input').value = '';
  button.parentElement.querySelector('.comment-text-input').value = '';
}
