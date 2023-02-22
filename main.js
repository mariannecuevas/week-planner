var $addEntry = document.querySelector('.add-entry-btn');
var $modal = document.querySelector('.modal-container');

$addEntry.addEventListener('click', function (event) {
  $modal.className = 'modal-container';
});
