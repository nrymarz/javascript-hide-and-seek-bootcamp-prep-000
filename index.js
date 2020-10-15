
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementsByClassName('target')[0]
}
function increaseRankBy(n) {
  var rankedlist = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(let i=0; i<rankedlist.length; i++) {
    rankedlist[i].innerHTML = (parseInt(rankedlist[i].innerHTML) + n).toString();
  }
}
