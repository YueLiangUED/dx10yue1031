/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-31 11:18:36
*/

$(document).ready(function(){
    $('.modal-close').on('click', function () {
        var $mask = $('.mask');
        var $modal = $(this).parents('.modal');
        $mask.hide();
        $modal.hide();
    });
    $('.filter-button').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('.mask').show();
        $('.modal').show();
    });
});