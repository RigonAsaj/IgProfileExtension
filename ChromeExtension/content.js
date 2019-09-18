chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
  });
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
 
    if ((msg.from === 'popup') && (msg.subject === 'IgInfo')) {
      var IgInfo = {
        userName: document.getElementsByTagName('h1')[0].innerText,
        photo: document.getElementsByTagName('img')[0].src,
        posts: document.querySelectorAll('.g47SY ')[0].innerText,
        followers: document.querySelectorAll('.g47SY ')[1].innerText,
        following: document.querySelectorAll('.g47SY ')[2].innerText,
        nameOnBio: document.getElementsByTagName('h1')[1].innerText
      };
      response(IgInfo);
    }
  });