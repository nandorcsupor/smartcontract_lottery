import { Button } from "@mui/material";
import { useEthers } from "@usedapp/core";

export const Header = () => {

    const { account, activateBrowserWallet, deactivate } = useEthers()

    const isConnected = account !== undefined

    return (
        <>
            <h1>Smart contract Lottery</h1>
            <div>
                {isConnected ? (
                    <Button color="primary" variant="contained"
                        onClick={deactivate} >
                        Disconnect
                    </Button>
                ) : (
                    <Button color="success" variant="contained"
                        onClick={() => activateBrowserWallet()}>
                        Connect
                    </Button>
                )
                }
            </div>
        </>
    )
}