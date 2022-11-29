$(function () {
	var link = $('.woman .tagline button');
	link.hover(
		function(){
		$(this).css({
			'background-color': '#9cedfd',
			'color': '#2d545c',
			'transition': '0.4s'
		});
		},
		function(){
			$(this).css({
			'background-color': '#48B1C6',
			'color': 'white',
			'transition': '0.4s'
			});
		}
	);

	var link_filling_form = $('.woman .filling_form .confirm');
	link_filling_form.hover(
		function(){
		$(this).css({
			'background-color': '#9cedfd',
			'color': '#2d545c',
			'transition': '0.4s'
		});
		},
		function(){
			$(this).css({
			'background-color': '#48B1C6',
			'color': 'white',
			'transition': '0.4s'
			});
		}
	);

	var social_link = $('.woman .socials_links ul li a');
	social_link.hover(
		function(){
		$(this).css({
			'color': '#48B1C6',
			'transition': '0.4s'
		});
		},
		function(){
			$(this).css({
			'color': 'white',
			'transition': '0.4s'
			});
		}
	);



	$('.woman .tagline .button_connect').click(function () {
		$('.woman .filling_form').css({
			'display':'flex'
		});
	}); 

	$('.woman .filling_form .close').click(function () {
		$('.woman .filling_form').css({
			'display':'none'
		});
	}); 


	var portfolio_link = $('.portfolio button');
	portfolio_link.hover(
		function(){
		$(this).css({
			'background-color': '#9cedfd',
			'color': '#2d545c',
			'transition': '0.4s'
		});
		},
		function(){
			$(this).css({
			'background-color': '#48B1C6',
			'color': 'white',
			'transition': '0.4s'
			});
		}
	);

	$('.portfolio button').click(function () {
		$('.woman .filling_form').css({
			'display':'flex'
		});
	}); 



	var questions_buttons_link = $('.questions_buttons button');
	questions_buttons_link.hover(
		function(){
		$(this).css({
			'background-color': '#9cedfd',
			'color': '#2d545c',
			'transition': '0.4s'
		});
		},
		function(){
			$(this).css({
			'background-color': '#48B1C6',
			'color': 'white',
			'transition': '0.4s'
			});
		}
	);

	$('.questions_buttons button').click(function () {
		$('.woman .filling_form').css({
			'display':'flex'
		});
	}); 


});