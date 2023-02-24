/* exported data */
var data = {
  entries: [],
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('planner-local-storage', dataJSON);
});

var previousDataJSON = localStorage.getItem('planner-local-storage');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
