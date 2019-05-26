import React from 'react'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Link from 'next/link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

class MenuBar extends React.Component {    

    render(){
        const {toggleMenuBar, open} = this.props
        return (
            <SwipeableDrawer
                open={open}
                onOpen={toggleMenuBar}
                onClose={toggleMenuBar}
            >
                <List>
                    <ListItem>
                        <Link href={'/'}>
                            <a>Index</a>
                        </Link>                      
                    </ListItem>
                    <ListItem>
                        <Link href={'/portfolios'}>
                            <a>Portfolios</a>
                        </Link>                      
                    </ListItem>
                    <ListItem>
                        <Link href={'/about'}>
                            <a>About</a>
                        </Link>                      
                    </ListItem>
                </List>  
            </SwipeableDrawer>
        )
    }
}

export default MenuBar