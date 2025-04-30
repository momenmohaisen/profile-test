
  const profileName = document.getElementById('profile-name');
  const profileTitle = document.getElementById('profile-title');
  const aboutText = document.getElementById('about-text');
  const changePicBtn = document.getElementById('change-pic-btn');
  const profilePic = document.getElementById('profile-pic');

  const memoInput = document.getElementById('memo-input');
  const addMemoBtn = document.getElementById('add-memo-btn');
  const memoList = document.getElementById('memo-list');

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

 

  changePicBtn.addEventListener('click', function() {
    const newPicUrl = prompt('Enter new profile picture URL:', profilePic.src);
    if (newPicUrl && newPicUrl.trim() !== '') {
      profilePic.src = newPicUrl;
    }
  });

  function addMemo() {
    const memoText = memoInput.value.trim();
    if (memoText) {
      const memoItem = document.createElement('li');
      memoItem.className = 'memo-item';
      memoItem.innerHTML = `
        <span>${memoText}</span>
        <button class="delete-memo"><i class="fas fa-times"></i></button>
      `;
      memoList.appendChild(memoItem);
      memoInput.value = '';

      memoItem.querySelector('.delete-memo').addEventListener('click', function() {
        memoItem.classList.add('fade-out');
        setTimeout(() => {
          memoItem.remove();
        }, 300);
      });
    }
  }

  addMemoBtn.addEventListener('click', addMemo);

  const sampleMemos = ['Finish profile project', 'Learn React next week'];
  sampleMemos.forEach(memo => {
    memoInput.value = memo;
    addMemo();
  });

  darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
  });

