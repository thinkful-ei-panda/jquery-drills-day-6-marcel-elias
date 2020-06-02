'use strict';

function handleThumbnailClicks() {
  $('.thumbnail').click(event =>{ 
    
    const thumbImg = $(event.currentTarget).find('img').attr('src');

    $('.hero img').attr('src', thumbImg );

    const thumbAlt = $(event.currentTarget).find('img').attr('alt');

    $('.hero alt') .attr('alt',thumbAlt );
    
  });
}

$(handleThumbnailClicks)

  