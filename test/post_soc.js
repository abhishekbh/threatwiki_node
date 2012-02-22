jQuery.post("/api/soc", {
  "title": "Kenya",
  "description": "Kenya SOC",
}, function (data, textStatus, jqXHR) {
  console.log("Post resposne:"); console.dir(data); console.log(textStatus); console.dir(jqXHR);
})
