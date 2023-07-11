import { ConnectKitButton } from "connectkit";
import React, { useRef } from "react";
import { Button, Box, Container, useColorMode } from "theme-ui";

import { Icon } from "./Icon";
import { FreelyFeatures } from "../components/FreelyFeatures";
import { FreelyFooter } from "../components/FreelyFooter";
import { FreelyFaqs } from "./FreelyFaqs";

type WalletConnectorProps = {
  loader?: React.ReactNode;
};

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)

export const WalletConnector: React.FC<WalletConnectorProps> = ({ children }) => {
  const [colorMode] = useColorMode()
  const refFeatures = useRef(null)
  const refFaqs = useRef(null)

  const executeScroll = () => scrollToRef(refFeatures)

  return (
    <ConnectKitButton.Custom>
      {connectKit =>
        connectKit.isConnected ? (
          children
        ) : (
            <>
              <Container className="skrollable u-align-center  u-clearfix u-section-1" id="carousel_6a7c">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                  {colorMode === 'dark' ? (

                    <h1 className="u-align-center u-custom-font u-text u-title u-text-1">
                      <span style={{ fontSize: "3rem" }}>
                        Why queue at the&nbsp;b​🏦nk!&nbsp;<br />When you have&nbsp;
              </span>
                      <br />
                    </h1>
                  )
                    : (

                      <h1 className="u-align-center u-custom-font u-text u-text-custom-color-1 u-title u-text-1">
                        <span style={{ fontSize: "3rem" }}>
                          Why queue at the&nbsp;b​🏦nk!&nbsp;<br />When you have&nbsp;
                </span>
                        <br />
                      </h1>
                    )}
                  <br />

                  {colorMode === 'dark' ? (
                    <img className="u-align-center u-image u-image-default u-image-1 animated flipInX-played" src="freely_finance_dark.png" alt="" data-image-width="2410" data-image-height="1160" data-animation-name="flipIn" data-animation-duration="1000" data-animation-delay="250" data-animation-direction="X" style={{ willChange: "transform", animationDuration: "1000ms" }} />
                  ) : (
                      <img className="u-align-center u-image u-image-default u-image-1 animated flipInX-played" src="freely_finance.png" alt="" data-image-width="2410" data-image-height="1160" data-animation-name="flipIn" data-animation-duration="1000" data-animation-delay="250" data-animation-direction="X" style={{ willChange: "transform", animationDuration: "1000ms" }} />
                    )}
                  <div className="u-align-center u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-layout-grid u-list u-list-1">

                    <div className=" u-align-center  u-repeater-1">


                      <div className="u-container-style u-list-item u-repeater-item">
                        <div className="u-container-layout u-similar-container u-container-layout-6"></div>
                      </div>

                      <div className="u-container-style u-repeater-item u-list-item">
                        <div className=" hidden-sm u-container-layout u-similar-container u-container-layout-5">

                        </div>
                        <div className=" u-container-layout  u-similar-container u-container-layout-5">
                          <Button className="u-align-cente" onClick={connectKit.show}>
                            <Icon name="wallet" size="lg" />
                            <Box sx={{ ml: 2 }}>Connect wallet</Box>
                          </Button>
                        </div>
                        <div className=" u-container-layout u-similar-container u-container-layout-5">

                        </div>
                      </div>



                      <div className="u-container-style u-list-item u-repeater-item">
                        <div className="u-container-layout u-similar-container u-container-layout-4"></div>
                      </div>
                      <div className="u-container-style u-list-item u-repeater-item">
                        <div className=" u-container-layout u-similar-container u-container-layout-5">
                          <button data-page-id="662130265" className="u-align-center u-border-none u-btn u-btn-round u-button-style u-custom-item u-gradient u-none u-radius-6 u-text-white u-btn-4" onClick={executeScroll}>Learn More</button>
                        </div>
                      </div>




                      <div className="u-container-style u-list-item u-repeater-item">
                        <div className=" u-align-center u-container-layout u-similar-container u-container-layout-5">
                          <a href="https://github.com/skillsorted/liquity/blob/master/disclaimer.md" style={{ fontSize: "1.125rem", color: "#03adef" }} target="_blank">Disclaimer</a>
                        </div>
                      </div>
                      <div className="u-container-style u-list-item u-repeater-item">

                        <div className="u-container-layout u-similar-container u-container-layout-6">


                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </Container>
              <div ref={refFeatures}>
                <FreelyFeatures moreDetails={refFaqs} />
              </div>
              <div ref={refFaqs}>
                <FreelyFaqs />
              </div>

              <FreelyFooter />

            </>
          )
      }
    </ConnectKitButton.Custom>
  );
};
