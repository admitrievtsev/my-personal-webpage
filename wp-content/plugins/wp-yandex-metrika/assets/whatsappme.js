jQuery(function($) {
	if (window.wpym === undefined){return;}

	const {counters} = window.wpym;

	$(this).on('joinchat:event', function (e, data) {
		counters.forEach(counter => {
			ym(counter.number, 'reachGoal', 'ym-open-chat');
		});
	});
});
