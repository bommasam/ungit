var addressParser = require('./address-parser');

		var path = /^diff\s--git\s\w\/(.+?)\s\w\/(.+)$/.exec(lines.shift());
			if (capture) {
				currentCommmit.authorName = capture[1].trim();
				currentCommmit.authorEmail = capture[2].trim();
			} else {
				currentCommmit.authorName = author;
			}
		fetch: addressParser.parseAddress(lines[1].slice('  Fetch URL: '.length)),
		push: addressParser.parseAddress(lines[1].slice('  Push  URL: '.length))