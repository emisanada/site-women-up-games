(function($){

  var $container = $('.card');

  function openCard(event) {
    var $element = $(event.currentTarget);
    console.log($element);
    if ($element.find('.card-reveal').length) {
      if ($element.is($('.card-reveal .card-title')) || $element.is($('.card-reveal .card-title i'))) {
        $(this).find('.card-reveal').velocity({translateY: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
      }
      else if ($element.is($('.card .activator')) || $element.is($('.card .activator i')) ) {
        $(this).find('.card-reveal').velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeOutQuad'});
      }
    }
  };

  $container.on('click', '.card-content', openCard);

})(jQuery);
