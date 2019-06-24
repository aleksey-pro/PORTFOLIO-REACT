# Проект личного блога-портфолио на базе MERN

## Стек:

- Фронтенд - React.js
- Бекенд - Next.js + Node.js
- База данных - Mongo.db
- Авторизация через Auth0
- Дизайн - Material UI компоненты
- Формы - React-formik
- Чаcтичное внедрение Redux

## ERRORS

1. Не работает SASS!!!
2. Разобраться почему нет задержки при переходе на страницу, то есть loading не срабатывает
3.
4. snackbars сделать универсальным компнентом для любых всплывашек
5. Доделать в editPort значения по умолчанию
6.
7.

_6 способов стилизации_

## TODO

1. инлайново (заголовок в хедере)
2. через классы + scss (заголовок в хедере)
3. Просто через стили в папке static (body)
4. Через 'style jsx' ( ссылки в хедере)
5. Через withStyles (Button на странице about.js)
6. Через тему MuiThemeProvider и JssProvider для всех компонент через рутовый компонент app.js
7. https://search.google.com/search-console/mobile-usability?resource_id=http://sitedev.spb.ru/&utm_source=wnc_10030322&utm_medium=gamma&utm_campaign=wnc_10030322&utm_content=msg_100058679&hl=ru
8. Перевести авторизацию на Redux
9. transition при переходе по страничкам. см. в документации + урок 152
10. Flipping card - Урок 153 - 155 + 160
11. Check all h1 every pages, alts in images
12. https://favicon.io/favicon-generator/ - TODO + web manifest
13. After migration to https - create full webmanifest http://brucelawson.github.io/manifest/
14. Add users for testing

### SOURCES:

mui-icons https://materialdesignicons.com/
graphics - https://www.vecteezy.com/
usedBlogs as from https://blog.toukopeltomaa.com/next-js-markdown-blog + https://www.npmjs.com/package/next-manifest
eslit example - https://github.com/Sly777/ran/blob/master/.eslintrc
Dates lib:
https://date-fns.org/v1.30.1/docs/format

### Add scripts later

"husky": {
"hooks": {
"pre-commit": "lint-staged"
}
},
