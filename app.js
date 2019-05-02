function userFunc(){
  $(document).ready(function () {
    var userInput = document.getElementById('userSearch').value || document.getElementById('tweet1').value ;
    var filtered = streams.users[userInput]
    $("p1").html(JSON.stringify(filtered));
  })
}