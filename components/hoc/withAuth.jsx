import React from 'react';
import PageLayout from '../layouts/PageLayout';

export default role => Component =>
  class withAuth extends React.Component {
    /**
     * Переобпределяем getInitialProps компонента _app.js
     * Проверяем  - имеет ли компонент(страница из pages) getInitialProps
     * и если имеет  - вызываем её и передаем pageProps
     * в this.props
     */
    static async getInitialProps(args) {
      const PageProps =
        (await Component.getInitialProps) &&
        (await Component.getInitialProps(args));
      // return { PageProps } в таком виде value из getInitialProps
      // обернутого эти ХОКом не отобразиться, так как оно находится
      // в объекте - PageProps: { key: 'value'}
      return { ...PageProps };
    }

    renderProtectedPage = () => {
      const { isAuthenticated, user } = this.props.auth;

      // Объект user возвращает siteOwner (в настройках ключа на сайте Auth0)
      const userRole = user && user.payload[`${process.env.NAMESPACE}/role`];

      let isAuthorized = false;

      if (role) {
        if (userRole && userRole === role) {
          isAuthorized = true;
        }
      } else {
        isAuthorized = true;
      }

      if (!isAuthenticated) {
        return (
          <PageLayout {...this.props.auth}>
            <h1>Вы не вошли. Пожалуйста, залогиньтесь.</h1>
          </PageLayout>
        );
      }
      if (!isAuthorized) {
        return (
          <PageLayout {...this.props.auth}>
            <h1>
              Вы не авторизованы. У вас нет разрешения на просмотр данной
              стррницы.
            </h1>
          </PageLayout>
        );
      }
      return <Component {...this.props} />;
    };

    render() {
      return this.renderProtectedPage();
    }
  };
