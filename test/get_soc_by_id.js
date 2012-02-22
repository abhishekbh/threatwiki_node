jQuery.get("/api/soc/4f34d8e7f05ebf212b000004", function(data, textStatus, jqXHR) {
  console.log("Get resposne:");
  console.dir(data);
  console.log(textStatus);
  console.dir(jqXHR);
}); 
