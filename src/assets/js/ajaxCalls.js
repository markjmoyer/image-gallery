// IMAGE GALLERY FEED

function updateGalleryResults(galleryURL) {
    jQuery.getJSON(galleryURL).done(function(data) {
        console.log(data);
        getGalleryResults(data.images);
    });
}

function getGalleryResults(images) {
    var sortedImages = [];
    jQuery.each(images, function(s, sortImage) {
        sortedImages.push(sortImage);
    });

   jQuery.each(sortedImages, function(v,image) {
       var altTag = image.altTag;
       var caption = image.caption;
       var captionText = image.caption_text;
       var imageURL = image.imageURL;
       var filename = image.filename;

       var galleryData = '<figure><a href="#"><img src="'+imageURL+'" alt="'+altTag+'"><figcaption><div class="blur-background"></div><div class="caption"><h4>'+caption+'</h4><p class="caption-text">'+captionText+'</p></div></figcaption></a></figure>';
       $(".gallery").append(galleryData);
    });
}


$(document).ready(function() {

    var galleryURL = "assets/data/galleryFeed.json";
    updateGalleryResults(galleryURL);

});
