var x = 1000;

for (i = 0; i <= x; i++) {
	console.log(i);
	if (i === x) {
		x = 0;
		while (i > x) {
			i--;
			console.log(i);
		}
	}
}