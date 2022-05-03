import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
function MainContent() {
    const [FileMessage, setFile] = useState(null);
    const [ReplaceResult, setReplaceResult] = useState([]);
    const showFile = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = (e) => {
            const text = e.target.result.split(/\r\n|\n/);
            setFile(text);

        };
    };
    const readPhonenumber =
        FileMessage ? FileMessage.map((number) =>
            <li key={number.toString()}>{number.replace(/ /g, "")}</li>
        ) : "You stil have not upload a file"
    const setPhoneNumber = FileMessage ? FileMessage.map((number) => number.replace(/ /g, "")) : ""
    const result =
        ReplaceResult.map((number, index) => (
            <li key={number.toString()}>All Possilble result for {FileMessage[index].replace(/ /g, "")} is:{number.map((number2) => <div key={number2.toString()}>{number2}</div>)}</li>
        ))
    const dict = {
        "2": ["A", "B", "C"],
        "3": ["D", "E", "F"],
        "4": ["G", "H", "I"],
        "5": ["J", "K", "L"],
        "6": ["M", "N", "O"],
        "7": ["P", "Q", "R", "S"],
        "8": ["T", "U", "V"],
        "9": ["W", "X", "Y", "Z"],
    };
    function ReplaceFunction(arr) {
        var len = arr.length;
        if (len >= 2) {
            var len1 = arr[0].length;
            var len2 = arr[1].length;
            var lenBoth = len1 * len2;
            var items = new Array(lenBoth);
            var index = 0;
            for (var i = 0; i < len1; i++) {
                for (var j = 0; j < len2; j++) {
                    items[index] = arr[0][i] + arr[1][j];
                    index++;
                }
            }
            var newArr = new Array(len - 1);
            for (var d = 2; d < arr.length; d++) {
                newArr[d - 1] = arr[d];
            }
            newArr[0] = items;
            return ReplaceFunction(newArr);
        } else {
            return arr[0];
        }
    }


    function replacePhoneNumber() {

        if (setPhoneNumber) {
            const allArr = []
            for (var i = 0; i < setPhoneNumber.length; i++) {
                var str = setPhoneNumber[i]
                var newArr = []
                for (var c = 0; c < str.length; c++) {
                    if (dict[str.charAt(c)]) {
                        newArr.push(dict[str.charAt(c)])
                    }
                    else if (dict[str.charAt(c)] === " ") {

                    }
                    else {
                        newArr.push(["-"])
                    }
                }
                allArr.push(ReplaceFunction(newArr))
                setReplaceResult(allArr)

            }
            console.log(ReplaceResult)
        }
        else {
            alert("Please upload a file first")
        }

    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#F4F2F3',
                height: '80vh',
                width: '100%',
            }}
        >
            <Grid
                container
                direction="row"
                height='80vh'
                justifyContent="center"
                alignItems="center"
            >

                <Grid item xs={12} md={4} textAlign='center' height='70%' border='1px solid black;' backgroundColor='#94A7AE'
                >
                    <Grid item xs={12} md={12} height='50%' justifyContent="center" alignItems="center"  >
                        <Typography >HI This is MainContent, Select a file to start use this app</Typography>
                        <br />
                        <input type="file" onChange={showFile} style={{ marginLeft: '10vh' }} />
                        <br />
                        <Typography>{FileMessage ?"The phone number is :":'Phone number will show below'}<br />

                            <Grid item xs={12} md={12} height='10%' backgroundColor='#C0A9BD' justifyContent="center" alignItems="center" overflow='scroll' overflow-y='hidden'>
                                {readPhonenumber}
                            </Grid>
                        </Typography>
                        <Button variant='outlined' onClick={replacePhoneNumber}>Do replace Function</Button>
                    </Grid>

                    <Grid item xs={12} md={12} height='50%' backgroundColor='#64766A' justifyContent="center" alignItems="center" overflow='scroll' overflow-y='hidden'>
                        {result}
                    </Grid>
                </Grid>


            </Grid>

        </Box>


    )
}
export default MainContent