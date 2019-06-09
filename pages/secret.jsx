import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import PageLayout from '../components/layouts/PageLayout'
import withAuth from '../components/hoc/withAuth'
import { getSecretData } from '../axios'

const styles = theme => ({
  root: {
    color: 'red'
  },
})

export class Secret extends Component {   

    state = {
        secretData: []
    }
    
    /**
     * Получение данных на сервере
     */
    static async getInitialProps({req}){        
        const superSecretValue =  await getSecretData(req) 
        return { superSecretValue }
    }

    /**
     * Получение данных на клиенте 
     */
    async componentDidMount() {
        const secretData = await getSecretData()
        this.setState({
            secretData
        })
    }

    displaySecretData = () => {
        const { secretData} = this.state
        if ( secretData && secretData.length > 0) {
            return secretData.map((data, idx) => {
                return (
                    <div key={idx}>
                        <p>{ data.title }</p>
                        <p>{ data.description }</p>
                    </div>
                )
            })
        }
        return null
    }

    displaySecretServerData = () => {
        const { superSecretValue} = this.props
        if ( superSecretValue && superSecretValue.length > 0) {
            return superSecretValue.map((data, idx) => {
                return (
                    <div key={idx}>
                        <p>{ data.title }</p>
                        <p>{ data.description }</p>
                    </div>
                )
            })
        }
        return null
    }    

    render() {
        // значения superSecretValue не будет а пропсах, так как 
        // компонент пропущен через ХОК, в котором нет getInitialProps
        // отвечающий за передачу PageProps. Поэтому в  withAuth мы
        // создали также обертку getInitialProps
        const {classes} = this.props
        return (
            <PageLayout {...this.props.auth} >
                <h1 className={classes.root} >Secret Page</h1>
                <p>Server Data</p>
                { this.displaySecretServerData() }
                <hr />
                <p>Browser Data</p>
                { this.displaySecretData() }
            </PageLayout>
    )
  }

  static propTypes = {
    classes: PropTypes.object
  } 

}

export default withStyles(styles)(withAuth()(Secret))
