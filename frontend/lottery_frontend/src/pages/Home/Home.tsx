import { Box, Button, Container } from "@mui/material"
import { DAppProvider, Rinkeby } from "@usedapp/core";
import { useEffect, useState } from "react";
import { useMoralis } from 'react-moralis';
import { ConnectButton } from "web3uikit";
import { Link } from 'react-router-dom';
import "./Home.scss"




function Home() {
    const [lottery, setLottery] = useState(false)

    const { isAuthenticated, Moralis, account } = useMoralis();

    const BASE_URL = "http://127.0.0.1:5000/"
    const dynamic_url = "https://rinkeby.etherscan.io/address/" + account
    /*
        useEffect(() => {
            fetch('deploy_lottery', {
            })
                .then(response => response.json())
                .then(response => console.log(response))
        })
    */
    const HandleRequest = async () => {
        setLottery(true)
        try {
            const response = await fetch("deploy_lottery");
            console.log(await response.json())
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <DAppProvider config={{ networks: [Rinkeby] }}>
                <Box className="connect-button">
                    <ConnectButton />
                </Box>
                {isAuthenticated ?
                    <>
                        <Box className="home" display="flex" flexDirection="column" alignItems="center">
                            <h1>Smart contract Lottery</h1>
                            <br />
                            <Button variant="contained" onClick={() => HandleRequest()}>
                                Deploy Lottery
                            </Button>
                        </Box>
                        {lottery ?
                            <Container>
                                <br />
                                <Button variant="contained" href={dynamic_url}>
                                    Click to see your newly deployed smart contract
                                </Button>
                            </Container>
                            : ""}
                    </> : ""}
            </DAppProvider>
        </>
    );
}

export default Home;
