jQuery.ajax({
  url: "/api/soc/4f34d8e7f05ebf212b000004",
  type: "PUT",
  data: {
    "title": "Kenya Updated",
    "description": "Kenya SOC Updates"
  },
  success: function (data, textStatus, jqXHR) {
    console.log("Post resposne:");
    console.dir(data);
    console.log(textStatus);
    console.dir(jqXHR);
  }
}); 
