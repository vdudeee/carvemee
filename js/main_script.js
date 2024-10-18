$(".hambuger_btn a").click(function(){
    $(".m_menu").css({
        'margin-left':'50vw',
        'transition': 'margin-left 0.5s'
    })
});
$(".close_btn").click(function(){
    $(".m_menu").css({
        'margin-left':'100vw',
        'transition':'margin-left 0.5s'
    })
});