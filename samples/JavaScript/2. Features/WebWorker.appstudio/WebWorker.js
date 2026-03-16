self.addEventListener('message', function(e) {
	var startTime = new Date().getTime(); // get the current time
	while (new Date().getTime() < startTime + 3000); // hog cpu

	self.postMessage( startTime );
	}
)
