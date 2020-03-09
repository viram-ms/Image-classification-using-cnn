import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import PhotoUpload from './PhotoUpload/index';
import InputField from './InputField';
import DisplayImage from './DisplayImage';


function DashboardImage(){
    return(
        <div style={{padding: 25}}>
            <PhotoUpload />
            <InputField />
            <DisplayImage />
        </div>
    )

}

export default DashboardImage;