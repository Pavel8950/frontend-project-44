install: # установить зависимости
	npm install ci 
brain-games: # запустить приложение
	node bin/brain-games.js
brain-even: # запустить приложение
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .