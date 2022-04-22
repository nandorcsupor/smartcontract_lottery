import { Box } from '@mui/material'
import { ConnectButton, Button } from 'web3uikit'
import './Bouncer.scss'
import { useMoralis } from 'react-moralis';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Bouncer = () => {

    const [myAccount, setMyAccount] = useState()

    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center" >
                <Box className="connect-button">
                </Box>
                <br />
                <Box>
                    <Link to="/home">
                        <Button
                            theme="primary"
                            type="button"
                            text="Home"
                            size="large"
                            icon="lifeRing"
                        />
                    </Link>
                </Box>
                <div className="fall">
                    <div className="walls">
                        <div className="wall">
                            <div className="top"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                            <div className="ceil"></div>
                        </div>
                        <div className="wall">
                            <div className="top"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                            <div className="ceil"></div>
                        </div>
                        <div className="wall">
                            <div className="top"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                            <div className="ceil"></div>
                        </div>
                        <div className="wall">
                            <div className="top"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                            <div className="ceil"></div>
                        </div>
                        <div className="wall">
                            <div className="top"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                            <div className="ceil"></div>
                        </div>
                        <div className="wall">
                            <div className="top"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                            <div className="ceil"></div>
                        </div>
                        <div className="wall">
                            <div className="top"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                            <div className="ceil"></div>
                        </div>
                        <div className="wall">
                            <div className="top"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                            <div className="ceil"></div>
                        </div>
                        <div className="wall">
                            <div className="top"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                            <div className="ceil"></div>
                        </div>
                        <div className="wall">
                            <div className="top"></div>
                            <div className="bottom"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                            <div className="ceil"></div>
                        </div>
                    </div>

                    <div className="ballArm">
                        <div className="ball"></div>
                    </div>
                </div>
            </Box>
        </>
    )
}