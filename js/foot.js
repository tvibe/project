/**
 * Created by web on 2017/12/1.
 */
// (()=>{
//
// })
$(function () {
    $.ajax({
        url:'foot.html',
        type:"GET",
        dataType:'text',
        success:function (result) {
            // console.log(result);
            $("footer").html(result);
            $(".foot").unwrap();
        }
    })
})