jQuery("#post").click(function() {
  jQuery.post("/api/soc", $("#soc_form").serialize(), function (data, textStatus, jqXHR) {
  console.log("Post resposne:"); console.dir(data); console.log(textStatus); console.dir(jqXHR);
});
  jQuery(".status").html("posted");
  jQuery('.result').html($("#soc_form").serialize());
});

jQuery("#get").click(function() {
  alert("hello");
  var data = jQuery.get("/api/soc/", function (data, textStatus, jqXHR) {
    console.log("Get resposne:");
    console.dir(data);
    console.log(textStatus);
    console.dir(jqXHR);
    jQuery('.result').html(data);
  });
  jQuery(".status").html("received");
});
