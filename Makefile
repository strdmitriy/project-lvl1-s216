install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
start-even:
	npm run babel-node -- src/bin/brain-even.js
start-calc:
	npm run babel-node -- src/bin/brain-calc.js
start-gcd:
	npm run babel-node -- src/bin/brain-gcd.js
lint:
	npm run eslint src/
publish:
	npm publish
