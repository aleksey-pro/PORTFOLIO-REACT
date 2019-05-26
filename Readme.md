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
3. Написать серверное API с работой через БД
4. Баг https://github.com/mui-org/material-ui/issues/14175


Box - становится любым элементом, и может переопределять стили children