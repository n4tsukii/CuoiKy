/* profile.js */
function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementsByClassName('tab-link')[0].click();
});

function toggleLike(element) {
  element.classList.toggle('fa-regular');
  element.classList.toggle('fa-solid');
  element.style.color = element.style.color === 'red' ? '' : 'red';
}

function toggleComment(element) {
  // Implement comment functionality here
}

function toggleRetweet(element) {
  // Implement retweet functionality here
}
