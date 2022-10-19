$(document).ready(function() {
    $('#summernote').summernote({
        height: 200
    });
  });

$(document).ready(function(){
    $('#selectAllBoxes').click(function(event){
        if(this.checked) {
            $('.checkedBoxes').each(function(){
                this.checked = true;
            });
        } else {
            $('.checkedBoxes').each(function(){
                this.checked = false;
            });
        }
    });
})