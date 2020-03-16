let fs = require('fs');
let CleanCSS = require('clean-css');

fs.readdir('icons', (err, list) => {
	if(err) {
		console.error(err);
		return;
	}
	let source='';
	for(let file of list) {
		source += fs.readFileSync('icons/'+file, 'utf8') + ';\n';	

	}
	new CleanCSS({level: 2}).minify(source, (err, minified) => {
		fs.mkdirSync('icons-compressed', {recursive: true});
		let outFile = fs.openSync('icons-compressed/icons.css', 'w+');
		fs.writeSync(outFile, minified.styles)
	});

});
