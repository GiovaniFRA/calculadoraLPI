$(document).ready(
    function (){
            
        let menu="menu_ajax.html";//passando menu
        $.get(menu,
            function (html) {
                $('.menu').html(html)
            })
        
        let footer="footer_ajax.html"
        $.get(footer,
            function (html) {
                $('footer').html(html)
            })
        
        

    }
);

