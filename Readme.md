**6 способов стилизации**
1) инлайново (заголовок в хедере)
2) через классы + scss (заголовок в хедере)
3) Просто через стили в папке static (body)
4) Через 'style jsx' ( ссылки в хедере)
5) Через withStyles (Button на странице about.js)
6) Через тему MuiThemeProvider и JssProvider для всех компонент через рутовый компонент app.js 

TODO
1. Разобраться с document.js из документации - там походу реализован полностью стиль на клиенте и сервере (https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js)
2. Разобраться почему нет задержки при переходе на страницу, то есть loading не срабатывает
3. Попробовать https://material-ui-pickers.dev/getting-started/usage
4. Форма - Урок 79 не выполнен
5. Moment если где-то прикручивать - через react lazy loading