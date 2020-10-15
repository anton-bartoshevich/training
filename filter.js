let articles = document.querySelectorAll('.all__articles-items')
let filter = document.querySelector('.filter')

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'themes') {
      article.classList.add('hidden')
    } else {
      article.classList.remove('hidden')
    }
  }
}
