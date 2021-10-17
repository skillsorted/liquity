import React, { useEffect, useReducer, useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { Button, Text, Flex, Link, Box, Container , useColorMode} from "theme-ui";

import { injectedConnector } from "../connectors/injectedConnector";
import { walletconnect  } from "../connectors/walletConnectConnector"
import { walletlink } from "../connectors/walletLinkConnector"
import { useAuthorizedConnection } from "../hooks/useAuthorizedConnection";
import { FreelyFeatures } from "../components/FreelyFeatures";
import { FreelyFooter } from "../components/FreelyFooter";
import { FreelyFaqs } from "./FreelyFaqs";

import { RetryDialog } from "./RetryDialog";
import { ConnectionConfirmationDialog } from "./ConnectionConfirmationDialog";
import { MetaMaskIcon } from "./MetaMaskIcon";
import { WalletLinkIcon } from "./WalletLinkIcon";
import { WalletConnectIcon } from "./WalletConnectIcon";

import { Icon } from "./Icon";
import { Modal } from "./Modal";

const scrollToRef = (ref:any) => window.scrollTo(0, ref.current.offsetTop)   

interface MaybeHasMetaMask {
  ethereum?: {
    isMetaMask?: boolean;
  };
}

type ConnectionState =
  | { type: "inactive" }
  | {
      type: "activating" | "active" | "rejectedByUser" | "alreadyPending" | "failed";
      connector: AbstractConnector;
    };

type ConnectionAction =
  | { type: "startActivating"; connector: AbstractConnector }
  | { type: "fail"; error: Error }
  | { type: "finishActivating" | "retry" | "cancel" | "deactivate" };

const connectionReducer: React.Reducer<ConnectionState, ConnectionAction> = (state, action) => {


  switch (action.type) {
    case "startActivating":
      return {
        type: "activating",
        connector: action.connector
      };
    case "finishActivating":
      return {
        type: "active",
        connector: state.type === "inactive" ? injectedConnector : state.connector
      };
    case "fail":
      if (state.type !== "inactive") {
        return {
          type: action.error.message.match(/user rejected/i)
            ? "rejectedByUser"
            : action.error.message.match(/already pending/i)
            ? "alreadyPending"
            : "failed",
          connector: state.connector
        };
      }
      break;
    case "retry":
      if (state.type !== "inactive") {
        return {
          type: "activating",
          connector: state.connector
        };
      }
      break;
    case "cancel":
      return {
        type: "inactive"
      };
    case "deactivate":
      return {
        type: "inactive"
      };
  }

  console.warn("Ignoring connectionReducer action:");
  console.log(action);
  console.log("  in state:");
  console.log(state);

  return state;
};

const detectMetaMask = () => (window as MaybeHasMetaMask).ethereum?.isMetaMask ?? false;

type WalletConnectorProps = {
  loader?: React.ReactNode;
};

export const WalletConnector: React.FC<WalletConnectorProps> = ({ children, loader }) => {
  const { activate, deactivate, active, error } = useWeb3React<unknown>();
  const triedAuthorizedConnection = useAuthorizedConnection();
  const [connectionState, dispatch] = useReducer(connectionReducer, { type: "inactive" });
  const isMetaMask = detectMetaMask();
  const [colorMode] = useColorMode()


const refFeatures = useRef(null)
const refFaqs = useRef(null)

const executeScroll = () => scrollToRef(refFeatures)

  useEffect(() => {
    if (error) {
      dispatch({ type: "fail", error });
      deactivate();
    }
  }, [error, deactivate]);

  useEffect(() => {
    if (active) {
      dispatch({ type: "finishActivating" });
    } else {
      dispatch({ type: "deactivate" });
    }
  }, [active]);

  if (!triedAuthorizedConnection) {
    return <>{loader}</>;
  }

  if (connectionState.type === "active") {
    return <>{children}</>;
  }
   

  return (

    <>
        <Container className="skrollable u-align-center  u-clearfix u-section-1" id="carousel_6a7c">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        {colorMode === 'dark'? (

          <h1 className="u-align-center u-custom-font u-text u-title u-text-1">
            <span style={{fontSize: "3rem"}}> 
              Why queue at the&nbsp;b​🏦nk!&nbsp;<br/>When you have&nbsp;
            </span>
            <br/>
          </h1>
          )
          : (

          <h1 className="u-align-center u-custom-font u-text u-text-custom-color-1 u-title u-text-1">
              <span style={{fontSize: "3rem"}}> 
                Why queue at the&nbsp;b​🏦nk!&nbsp;<br/>When you have&nbsp;
              </span>
              <br/>
          </h1>
          )}
          <br/>

        {colorMode === 'dark'?(
          <img className="u-align-center u-image u-image-default u-image-1 animated flipInX-played" src="freely_finance_dark.png" alt="" data-image-width="2410" data-image-height="1160" data-animation-name="flipIn" data-animation-duration="1000" data-animation-delay="250" data-animation-direction="X" style={{willChange: "transform", animationDuration: "1000ms"}}/>
        ):(
          <img className="u-align-center u-image u-image-default u-image-1 animated flipInX-played" src="freely_finance.png" alt="" data-image-width="2410" data-image-height="1160" data-animation-name="flipIn" data-animation-duration="1000" data-animation-delay="250" data-animation-direction="X" style={{willChange: "transform", animationDuration: "1000ms"}}/>
        )}
        <div className="u-align-center u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-layout-grid u-list u-list-1">

          <div className="u-repeater u-repeater-1">
            
              {isMetaMask ? (
            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-1">
                <Button sx={{ width: "210px"}} className ="u-align-center u-btn u-button-style u-btn-1"
                  onClick={() => {
                    dispatch({ type: "startActivating", connector: injectedConnector });
                    activate(injectedConnector);
                  }}>

                  <MetaMaskIcon />
                  <Box sx={{ ml: 2 }}>MetaMask</Box>
                </Button>
              </div>
            </div>
          ) : (
            <> 
            <div className="u-container-style u-list-item u-repeater-item">
                          <div className="u-container-layout u-similar-container u-container-layout-1">
              <Button sx={{ width: "210px"}} className ="u-align-center u-btn u-button-style u-btn-1" disabled>
                <MetaMaskIcon />
                <Box sx={{ ml: 2 }}>MetaMask</Box>
              </Button>
              </div>
            </div>         
            </>
          )}

            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-2">
              <Button  className ="u-align-center u-btn u-button-style u-btn-2"
            onClick={() => {
              dispatch({ type: "startActivating", connector: walletconnect });
              activate(walletconnect);
            }}
            >             
            <WalletConnectIcon />
            <Box sx={{ ml: 2 }}>WalletConnect</Box>
          
          </Button>
              </div>
            </div>
            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-3">

              <Button sx={{ width: "210px"}} className ="u-align-center u-btn u-button-style u-btn-3"
            onClick={() => {
              dispatch({ type: "startActivating", connector: walletlink });
              activate(walletlink);
            }}
            >             
            {/* <Icon name="plug" size="lg" /> */}
            <WalletLinkIcon />
            <Box sx={{ ml: 2 }}>WalletLink</Box>
          
          </Button>
              </div>

            </div>

            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-4"></div>
            </div>
            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-5">
                <button  data-page-id="662130265" className="u-align-center u-border-none u-btn u-btn-round u-button-style u-custom-item u-gradient u-none u-radius-6 u-text-white u-btn-4"  onClick={executeScroll}>Learn More</button>
              </div>
            </div>
            <div  className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-6"></div>
            </div>
          </div>

        </div>
      </div>
    </Container>
    <div  ref={refFeatures}>
      <FreelyFeatures moreDetails={refFaqs}/>
    </div>
    <div  ref={refFaqs}>
      <FreelyFaqs/>
    </div>

    <FreelyFooter/>

      {connectionState.type === "failed" && (
        <Modal>
          <RetryDialog
            title={isMetaMask && connectionState.connector == injectedConnector ? "Failed to connect to MetaMask" : "Failed to connect wallet"}
            onCancel={() => dispatch({ type: "cancel" })}
            onRetry={() => {
              dispatch({ type: "retry" });
              activate(connectionState.connector);
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              You might need to install MetaMask or use a different browser.
            </Box>
            <Link sx={{ lineHeight: 3 }} href="https://metamask.io/download.html" target="_blank">
              Learn more <Icon size="xs" name="external-link-alt" />
            </Link>
          </RetryDialog>
        </Modal>
      )}

      {connectionState.type === "activating" && (
        <Modal>
          <ConnectionConfirmationDialog
            title={
              isMetaMask  && connectionState.connector == injectedConnector? "Confirm connection in MetaMask" : "Confirm connection in your wallet"
            }
            icon={isMetaMask   && connectionState.connector == injectedConnector ? <MetaMaskIcon /> : <Icon name="wallet" size="lg" />}
            onCancel={() => dispatch({ type: "cancel" })}
          >
            <Text sx={{ textAlign: "center" }}>
              Confirm the request that&apos;s just appeared.
              {isMetaMask   && connectionState.connector == injectedConnector ? (
                <> If you can&apos;t see a request, open your MetaMask extension via your browser.</>
              ) : (
                <> If you can&apos;t see a request, you might have to open your wallet.</>
              )}
            </Text>
          </ConnectionConfirmationDialog>
        </Modal>
      )}

      {connectionState.type === "rejectedByUser" && (
        <Modal>
          <RetryDialog
            title="Cancel connection?"
            onCancel={() => dispatch({ type: "cancel" })}
            onRetry={() => {
              dispatch({ type: "retry" });
              activate(connectionState.connector);
            }}
          >
            <Text>To use Liquity, you need to connect your Ethereum account.</Text>
          </RetryDialog>
        </Modal>
      )}

      {connectionState.type === "alreadyPending" && (
        <Modal>
          <RetryDialog
            title="Connection already requested"
            onCancel={() => dispatch({ type: "cancel" })}
            onRetry={() => {
              dispatch({ type: "retry" });
              activate(connectionState.connector);
            }}
          >
            <Text>Please check your wallet and accept the connection request before retrying.</Text>
          </RetryDialog>
        </Modal>
      )}
    </>
  );
};
