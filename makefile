install: # установить зависимости
	npm install ci 
brain-games: # запустить приложение
	node bin/brain-games.js
publish:
	npm publish --dry-run