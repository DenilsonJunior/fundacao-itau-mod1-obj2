events.on('ready', function () {
    $('.boxInteraction').each(function () {
        const $box = $(this);
    
        $box.find('.btn').on('click', function () {
            const targetSelector = $(this).data('target');
            const $messages = $box.find('.boxMessage .msg');
            const $buttons = $box.find('.btn');
        
            $messages.addClass('hide');
            $box.find(targetSelector).removeClass('hide');
        
            $buttons.removeClass('open');
            $(this).addClass('open');
        });
    });
});
  