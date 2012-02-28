$("#post").click(function() {
  jQuery.post("/api/soc", $("#soc_form").serialize(), function (data, textStatus, jqXHR) {
  console.log("Post resposne:"); console.dir(data); console.log(textStatus); console.dir(jqXHR);
});
  $("#status").html("posted");
  $('#result').html($("#soc_form").serialize());
});

$("#get").click(function() {
  var data = jQuery.get("/api/soc/", function (data, textStatus, jqXHR) {
    console.log("Get resposne:");
    console.dir(data);
    console.log(textStatus);
    console.dir(jqXHR);
    $('#result').html(data);
  });
  $("#status").html("received");
});
