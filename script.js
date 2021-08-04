var url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=10";

$.getJSON(url, function (data) {
console.log(data);

for (var i = 0; i < data.length; i++) {

display.innerHTML += 
 

`<div class='entry'><a href="${data[i].url}">${data[i].title}</a> <br>
${data[i].newsSite} <br>
${data[i].summary}<br>

</div><br>`
}

});