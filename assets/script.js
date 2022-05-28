var table = document.getElementById('planner');
var cells = table.getElementsByTagName('td');

console.log(cells)

for (var i = 0; i < cells.length; i++) {
    cells[i].onClick = function(){
        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.value = this.innerHTML;
        input.style.backgroundColor = "LightGoldenRodYellow"
    }
}
// $(function () {
//     $("td").dblclick(function () {
//         var OriginalContent = $(this).text();
//         $(this).addClass("cellEditing");
//         $(this).html("<input type='text' value='" + OriginalContent + "' />");
//         $(this).children().first().focus();
//         $(this).children().first().keypress(function (e) {
//             if (e.which == 13) {
//                 var newContent = $(this).val();
//                 $(this).parent().text(newContent);
//                 $(this).parent().removeClass("cellEditing");
//             }
//         });
//     $(this).children().first().blur(function(){
//         $(this).parent().text(OriginalContent);
//         $(this).parent().removeClass("cellEditing");
//     });
//         $(this).find('input').dblclick(function(e){
//             e.stopPropagation(); 
//         });
//     });
// });