/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

// const useStyles = makeStyles({
//   depositContext: {
//     flex: 1,
//   },
// });

export default function WorkoutCard() {
    // const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Legs (I)</Title>
            <Typography component="p" variant="h6">
                Warmup
      </Typography>
            <Typography color="p">
                Spot Jog, High Knees, Butt Kicks
      </Typography>
            <Typography component="p" variant="h6">
                Mobility
      </Typography>
            <Typography color="p">
                Lower Lunges, Squats, Side Lunges, Cross Lunges
      </Typography>
            <Typography component="p" variant="h6">
                Main Workout
      </Typography>
            <Typography color="p">
                Tricep kick back
      </Typography>
            <Typography color="p">
                Burpees
      </Typography>
            <Typography color="p">
                Wall sit
      </Typography>
            <Typography component="p" variant="h6">
                Core
      </Typography>
            <Typography color="p">
                Beast Hold
      </Typography>
            <Typography color="p">
                Beast Sidekick
        </Typography>
            <div>
                <Link color="primary" href="javascript:;">
                    Learn more
        </Link>
            </div>
        </React.Fragment>
    );
}
