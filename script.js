$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 50) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
}); 

$(document).ready(function() {
    const checkbox = $('input[type="checkbox"]');
    const imageElement = $('#hamburger'); 
    
    // Bind event listener for checking the box
    checkbox.on("change", function() {
        if (this.checked) {
            // Set new source URL when checked
            imageElement.attr("src", "images/cross.webp"); // Replace with desired URL
        } else {
            // Reset source URL when unchecked
            imageElement.attr("src", "images/hamburger.webp"); // Replace with original URL
        }
    });
});