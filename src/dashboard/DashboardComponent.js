import React from 'react'
import Grid from '@material-ui/core/Grid';


import Divider from '@material-ui/core/Divider';

import { ListItem, Typography, ListItemText } from '@material-ui/core';


export default class DashboardComponent extends React.Component {

    render() {

        return (

            <Grid>
                {this.props.employeeList.map((item) => {
                    return (
                        <Grid>

                            <ListItem button>
                                <ListItemText primary={item.id} secondary={<Grid>
                                    <Typography>
                                        {item.name}
                                    </Typography>
                                    <Typography>
                                        {item.age}
                                    </Typography>
                                    <Typography>
                                        {item.gender}
                                    </Typography>
                                    <Typography>
                                        {item.email}
                                    </Typography>
                                    <Typography>
                                        {item.phoneNo}
                                    </Typography>
                                </Grid>} />

                            </ListItem>
                            <Divider />
                        </Grid>)
                })}
            </Grid>
        )
    }
}