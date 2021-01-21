'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(initializePage);

function projectClick(e) {
    // prevent the page from reloading
    e.preventDefault();

    let styleattr = $(this).attr('style');
    if (typeof styleattr !== typeof undefined && styleattr !== false)
        $(this).removeAttr('style');
    else
		$(this).css("background-color", "#7fff00");
	
	let containingProject = $(this).closest('.project');
	let description = $(containingProject).find('.project-description');

	if (description.length == 0)
		containingProject.append('<div class="project-description"><p>Description of the project.</p></div>');
	else
		description.fadeToggle();
		//description.html(`<p>Stop clicking on me! You just did it at ${new Date()}</p>`);
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text('Javascript is connected');
		$('.jumbotron p').toggleClass('active');
		$(this).text('Boba');
	});

	$('a.thumbnail').click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}