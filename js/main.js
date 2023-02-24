/* global data */
var $addEntry = document.querySelector('.add-entry-btn');
var $modal = document.querySelector('.modal-container');
var form = document.querySelector('form');
var $submitBtn = document.querySelector('.submit-btn');

$addEntry.addEventListener('click', function (event) {
  $modal.className = 'modal-container';
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var newEntry = {
    day: form.elements.week.value,
    time: form.elements.time.value,
    description: form.elements.description.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;

  data.entries.unshift(newEntry);

  form.reset();
});

$submitBtn.addEventListener('click', function (event) {
  if (event.target.className === 'submit-btn') {
    $modal.className = 'modal-container hidden';
  }
});
