$(document).ready(function() {
  $("#ice-cream").submit(function(event) {
    event.preventDefault();
    const flavor1 = $("#flavor1").val();
    const flavor2 = $("#flavor2").val();
    const flavor3 = $("#flavor3").val();
    const flavors = [flavor1, flavor2, flavor3];
    let html = '';
    flavors.forEach(function(flavor) {
      
      html += '<li>' + flavor + '</li>';
    });
    html = '<ul>' + html + '</ul>';
    console.log(html);
    document.querySelector('#output').innerHTML = html;
  })
})

