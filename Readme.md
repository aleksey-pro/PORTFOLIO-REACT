**_ Проект личного блога-портфолио на базе MERN _**

Стек:

- Фронтенд - React.js
- Бекенд - Next.js + Node.js
- База данных - Mongo.db
- Авторизация через Auth0
- Дизайн - Material UI компоненты
- Формы - React-formik
- Чаcтичное внедрение Redux

TODO

1. Не работают даты в форме и sass!!!
2. Разобраться почему нет задержки при переходе на страницу, то есть loading не срабатывает
3. Попробовать https://material-ui-pickers.dev/getting-started/usage
4. Форма - Урок 79 не выполнен, с этим скорей связано Server/routes/portfolio -> create - доделать!
5. Moment если где-то прикручивать - через react lazy loading
6. Урок 90 - передалить портфолио с учетом авторизации
7. snackbars сделать универсальным компнентом для любых всплывашек

_6 способов стилизации_

1. инлайново (заголовок в хедере)
2. через классы + scss (заголовок в хедере)
3. Просто через стили в папке static (body)
4. Через 'style jsx' ( ссылки в хедере)
5. Через withStyles (Button на странице about.js)
6. Через тему MuiThemeProvider и JssProvider для всех компонент через рутовый компонент app.js

eslit example - https://github.com/Sly777/ran/blob/master/.eslintrc
