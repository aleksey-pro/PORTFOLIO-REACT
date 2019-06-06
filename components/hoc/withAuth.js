import React from 'react'
import PageLayout from '../layouts/PageLayout'

export default function(Component)  {
    return class withAuth extends React.Component {

        /**
         * Переобпределяем getInitialProps компонента _app.js
         * Проверяем  - имеет ли компонент(страница из pages) getInitialProps
         * и если имеет  - вызываем её и передаем pageProps
         * в this.props
         */
        static async getInitialProps(args) {
            const PageProps = await Component.getInitialProps && Component.getInitialProps(args)
            // return { PageProps } в таком виде value из getInitialProps
            // обернутого эти ХОКом не отобразиться, так как оно находится 
            // в объекте - PageProps: { key: 'value'}
            return { ...PageProps }
        }
        
        renderProtectedPage = () => {
            const { isAuthenticated } = this.props.auth
            if(isAuthenticated) {
                return <Component {...this.props} />
            } else {
                return (
                    <PageLayout {...this.props.auth} >
                        <h1>Вы не вошли. Пожалуйста,  залогиньтесь.</h1>
                    </PageLayout>
                )
            }
        }

        render() {
            return this.renderProtectedPage()
        } 
    }
}