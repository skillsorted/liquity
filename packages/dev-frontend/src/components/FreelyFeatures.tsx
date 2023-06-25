import React from "react";
import { Container } from "theme-ui";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)

type FreelyFeaturesProps = {
  moreDetails?: React.RefObject<null>
};

export const FreelyFeatures: React.FC<FreelyFeaturesProps> = ({ moreDetails }) => {
  const executeScroll = () => scrollToRef(moreDetails)

  // TODO: Covert plain HTML to react
  return (
    <Container className="u-align-center u-clearfix u-gradient u-section-2" id="carousel_7ff5">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-custom-font u-text u-text-custom-color-1 u-text-default u-text-1"><b>
          <span style={{ fontSize: "2.25rem" }}>Earn or Borrow using Liquity <img src="icons/32-lqty-icon.svg" alt="lqty" style={{ "verticalAlign": "-0.20em" }} /> - a ​decentralized protocol</span>
        </b>
        </h2>
        <p className="u-custom-font u-text u-text-custom-color-1 u-text-default u-text-2"><b> Liquity protocol is controlled by nobody.&nbsp; <br />All operations are algorithmic and fully automated&nbsp;using ​Ethereum smart contracts.&nbsp;</b>
        </p>
        <div className="u-tab-links-align-justify u-tabs u-tabs-1">
          <ul className="u-tab-list u-unstyled" role="tablist">
            <li className="u-tab-item" role="presentation">
              <a className="active u-active-custom-color-1 u-border-1 u-border-active-grey-75 u-border-hover-grey-75 u-border-no-left u-border-no-right u-border-no-top u-button-style u-custom-font u-hover-custom-color-3 u-radius-4 u-tab-link u-text-active-white u-text-body-color u-text-hover-black u-tab-link-2" style={{ textDecoration: "underline" }} id="link-tab-14b7" href="#tab-14b7" role="tab" aria-controls="tab-14b7" aria-selected="true">Freely Earn</a>
            </li>
            <li className="u-tab-item" role="presentation">
              <a className="u-active-custom-color-1 u-border-1 u-border-active-grey-75 u-border-hover-grey-75 u-border-no-left u-border-no-right u-border-no-top u-button-style u-custom-font u-hover-custom-color-3 u-radius-4 u-tab-link u-text-active-white u-text-body-color u-text-hover-black u-tab-link-1" style={{ textDecoration: "underline" }} id="link-tab-0da5" href="#tab-0da5" role="tab" aria-controls="tab-0da5" aria-selected="false">Freely Borrow</a>
            </li>
          </ul>
          <div className="u-tab-content">
            <div className="u-align-left u-container-style u-custom-color-1 u-shape-rectangle  u-tab-pane u-tab-pane-1" id="tab-0da5" role="tabpanel" aria-labelledby="link-tab-0da5">
              <div className="u-container-layout u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-1">
                <div className="u-align-center u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-layout-grid u-list u-list-1">
                  <div className="u-repeater u-repeater-1">
                    <div className="u-align-center u-container-style u-custom-color-1 u-list-item u-radius-10 u-repeater-item u-shape-round u-list-item-1">
                      <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-2"><span className="u-file-icon u-icon u-icon-circle u-palette-1-base u-spacing-10 u-icon-1"><img src="lusd-icon.png" alt="" /></span>
                        <h5 className="u-align-center u-custom-font u-text u-text-custom-color-3 u-text-default u-text-3">
                          <span >Borrow </span>LUSD
                        </h5>
                        <p className="u-text u-text-white u-text-4">LUSD is a fully backed stablecoin<br />(​1 LUSD ≈ 1 USD)<br />
                          <br />Pegged to the US Dollar that's maintained by an algorithmic monetary policy. <br />
                          <br />
                        </p>
                        <button className="u-align-center u-btn u-btn-round u-button-style u-gradient u-none u-radius-6 u-text-white u-btn-1" onClick={executeScroll}>read more</button>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-custom-color-1 u-list-item u-radius-10 u-repeater-item u-shape-round u-list-item-2">
                      <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-3"><span className="u-icon u-icon-circle u-palette-1-base u-spacing-10 u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-4372"></use></svg><svg className="u-svg-content" viewBox="0 0 512 512" id="svg-4372"><g id="_x30__2_"><path d="m256 0c-109.482 0-165 86.518-165 255.194 0 63.267 0 256.806 165 256.806 109.482 0 165-86.737 165-255.839 0-169.307-55.518-256.161-165-256.161zm0 105.707c45.26 0 42.349 104.904 42.349 150.454 0 45.233 3.176 150.132-42.349 150.132-45.361 0-42.349-104.514-42.349-150.132 0-45.363-3.228-150.454 42.349-150.454z" fill="#6cf"></path><path d="m298.349 256.161c0 45.233 3.177 150.132-42.349 150.132v105.707c109.482 0 165-86.737 165-255.839 0-169.307-55.518-256.161-165-256.161v105.707c45.26 0 42.349 104.903 42.349 150.454z" fill="#59abff"></path>
                      </g></svg></span>
                        <h5 className="u-align-center u-custom-font u-text u-text-custom-color-3 u-text-default u-text-5">
                          <span >Interest free</span>
                        </h5>
                        <p className="u-text u-text-white u-text-6">One-time fee to borrow LUSD&nbsp;against ETH at 0% interest.<br />
                          <br />No recurring fees for borrowing, which is interest-free.<br />
                          <br />
                        </p>
                        <button className="u-align-center u-btn u-btn-round u-button-style u-gradient u-none u-radius-6 u-text-white u-btn-1" onClick={executeScroll}>read more</button>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-custom-color-1 u-list-item u-radius-10 u-repeater-item u-shape-round u-list-item-3">
                      <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-4"><span className="u-icon u-icon-circle u-palette-1-base u-spacing-10 u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-6a31"></use></svg><svg className="u-svg-content" viewBox="0 0 512 512" id="svg-6a31"><g><g><g><circle cx="256" cy="256" fill="#dcf5ff" r="235.551"></circle>
                      </g><g><path d="m370.282 49.999c42.973 42.672 69.587 101.796 69.587 167.141 0 130.091-105.46 235.551-235.551 235.551-41.473 0-80.434-10.732-114.282-29.55 42.579 42.281 101.218 68.41 165.964 68.41 130.091 0 235.551-105.46 235.551-235.551 0-88.618-48.946-165.792-121.269-206.001z" fill="#97e4f9"></path>
                        </g><g><g><path d="m256 512c-68.38 0-132.667-26.629-181.019-74.981s-74.981-112.639-74.981-181.019 26.629-132.667 74.981-181.019 112.639-74.981 181.019-74.981 132.667 26.629 181.019 74.981 74.981 112.639 74.981 181.019-26.629 132.667-74.981 181.019-112.639 74.981-181.019 74.981zm0-471.101c-118.607 0-215.101 96.493-215.101 215.101s96.494 215.101 215.101 215.101 215.101-96.493 215.101-215.101-96.494-215.101-215.101-215.101z" fill="#0acefa"></path>
                        </g>
                        </g><g><g><path d="m437.019 74.981c-3.936-3.936-7.989-7.713-12.13-11.358 41.138 46.727 63.623 106.077 63.623 168.891 0 68.38-26.629 132.667-74.981 181.019s-112.639 74.981-181.019 74.981c-62.814 0-122.163-22.485-168.89-63.622 3.645 4.141 7.421 8.192 11.357 12.128 48.354 48.351 112.641 74.98 181.021 74.98s132.667-26.629 181.019-74.981 74.981-112.639 74.981-181.019-26.629-132.667-74.981-181.019z" fill="#09a6ee"></path>
                        </g>
                        </g>
                      </g><g><g><path d="m253.034 358.57-83.751-58.684c-.936-.656-2.087.469-1.453 1.42l83.87 125.794c2.046 3.068 6.555 3.068 8.601 0l83.87-125.794c.634-.951-.517-2.076-1.453-1.42l-83.751 58.684c-1.782 1.247-4.152 1.247-5.933 0z" fill="#b1abb5"></path>
                      </g><g><path d="m355.137 248.065-94.616-170.823c-1.968-3.552-7.075-3.552-9.043 0l-94.616 170.823z" fill="#b1abb5"></path>
                          </g><g><path d="m256 248.065h99.136l-94.615-170.823c-.984-1.776-2.753-2.664-4.521-2.664z" fill="#786e79"></path>
                          </g><g><path d="m253.034 321.023-94.603-66.288c-2.937-2.058-2.937-6.408 0-8.466l94.603-66.288c1.78-1.248 4.151-1.248 5.932 0l94.603 66.288c2.937 2.058 2.937 6.408 0 8.466l-94.603 66.288c-1.781 1.248-4.152 1.248-5.932 0z" fill="#786e79"></path>
                          </g><g><path d="m258.966 321.023 94.603-66.288c2.937-2.058 2.937-6.408 0-8.466l-94.603-66.288c-.89-.624-1.928-.936-2.966-.936v142.913c1.038.001 2.076-.311 2.966-.935z" fill="#554e57"></path>
                          </g><g><path d="m327.543 240.926c1.533 2.238 1.104 5.451-1.291 7.139h28.884l-94.614-170.823c-.984-1.776-2.753-2.664-4.521-2.664v37.181z" fill="#554e57"></path>
                          </g><g><path d="m260.3 427.099 83.87-125.794c.634-.951-.517-2.076-1.453-1.42l-83.751 58.684c-.89.624-1.928.936-2.966.936v69.895c1.639.001 3.278-.766 4.3-2.301z" fill="#554e57"></path>
                          </g><g><path d="m353.569 246.27-37.696-26.413 11.67 21.07c1.536 2.242 1.104 5.464-1.302 7.149l-70.241 49.217v24.667c1.038 0 2.075-.312 2.966-.936l94.603-66.288c2.937-2.058 2.937-6.408 0-8.466z" fill="#453e43"></path>
                          </g><g><path d="m342.717 299.885-44.239 30.998-42.478 63.712v34.806c1.639 0 3.277-.767 4.3-2.301l83.87-125.794c.635-.952-.517-2.077-1.453-1.421z" fill="#453e43"></path>
                          </g>
                        </g>
                      </g></svg></span>
                        <h5 className="u-align-center u-custom-font u-text u-text-custom-color-3 u-text-default u-text-7">ETH <span >as collateral</span>
                        </h5>
                        <p className="u-text u-text-white u-text-8">Minimum Collateral Ratio is 110% during normal operation.<br />
                          <br />&nbsp;Recommended 200% or 250% for additional safety.<br />
                          <br />
                        </p>
                        <button className="u-align-center u-btn u-btn-round u-button-style u-gradient u-none u-radius-6 u-text-white u-btn-1" onClick={executeScroll}>read more</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-align-left u-container-style u-custom-color-1 u-shape-rectangle u-tab-active u-tab-pane u-tab-pane-2" id="tab-14b7" role="tabpanel" aria-labelledby="link-tab-14b7">
              <div className="u-container-layout u-valign-top u-container-layout-5">
                <div className="u-align-center u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-layout-grid u-list u-list-2">
                  <div className="u-repeater u-repeater-2">
                    <div className="u-align-center u-container-style u-custom-color-1 u-list-item u-radius-10 u-repeater-item u-shape-round u-list-item-4">
                      <div className="u-container-layout u-similar-container u-valign-top u-container-layout-6"><span className="u-icon u-icon-circle u-palette-1-base u-spacing-10 u-icon-4"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512.003 512.003" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-c3df"></use></svg><svg className="u-svg-content" viewBox="0 0 512.003 512.003" x="0px" y="0px" id="svg-c3df" ><circle style={{ fill: "#F9B44D" }} cx="256" cy="170.668" r="102.4"></circle><circle style={{ fill: "#FA982F" }} cx="256" cy="170.668" r="68.267"></circle><g><path style={{ fill: "#F77219" }} d="M315.733,170.668c-0.034,32.973-26.761,59.699-59.733,59.733v17.067   c42.394-0.051,76.749-34.406,76.8-76.8H315.733z"></path><path style={{ fill: "#F77219" }} d="M256,93.868c-42.394,0.051-76.749,34.406-76.8,76.8h17.067   c0.034-32.973,26.761-59.699,59.733-59.733V93.868z"></path><path style={{ fill: "#F77219" }} d="M264.533,221.868v-8.533h3.209c12.365,0.017,22.409-9.993,22.426-22.357   c0.017-10.974-7.919-20.343-18.748-22.127l-28.032-4.668c-2.901-0.469-4.873-3.2-4.403-6.11c0.41-2.577,2.645-4.471,5.257-4.471   h23.484c2.935,0.009,5.316,2.389,5.325,5.325v3.209h17.067v-3.209c-0.017-12.356-10.018-22.366-22.374-22.391h-3.209v-8.533   h-17.067v8.533h-3.209c-12.365-0.017-22.409,9.993-22.426,22.357c-0.017,10.974,7.919,20.343,18.748,22.127l28.032,4.668   c2.901,0.469,4.873,3.2,4.403,6.11c-0.41,2.577-2.645,4.471-5.257,4.471h-23.501c-2.935,0-5.316-2.381-5.325-5.325v-3.209h-17.067   v3.209c0.017,12.365,10.027,22.374,22.391,22.391h3.209v8.533H264.533z"></path>
                      </g><g><rect x="307.2" y="34.135" style={{ fill: "#87CED9" }} width="17.067" height="102.4"></rect><rect x="307.2" y="0.002" style={{ fill: "#87CED9" }} width="17.067" height="17.067"></rect><rect x="230.4" y="0.002" style={{ fill: "#87CED9" }} width="17.067" height="68.267"></rect><rect x="196.267" y="51.202" style={{ fill: "#87CED9" }} width="17.067" height="25.6"></rect><rect x="196.267" y="17.068" style={{ fill: "#87CED9" }} width="17.067" height="17.067"></rect><rect x="341.333" y="59.735" style={{ fill: "#87CED9" }} width="17.067" height="68.267"></rect><rect x="153.6" y="34.135" style={{ fill: "#87CED9" }} width="17.067" height="93.867"></rect>
                        </g><path style={{ fill: "#F9B44D" }} d="M418.133,93.868L418.133,93.868C415.215,76.366,401.502,62.653,384,59.735l0,0  c17.502-2.918,31.215-16.631,34.133-34.133l0,0c2.918,17.502,16.631,31.215,34.133,34.133l0,0  C434.765,62.653,421.052,76.366,418.133,93.868z"></path><path style={{ fill: "#FEC9A3" }} d="M358.4,418.135h-29.867c16.495,0,29.867-13.372,29.867-29.867l0,0l0,0  c0-16.495-13.372-29.867-29.867-29.867H230.4c-34.372-29.466-85.094-29.466-119.467,0l0,0v145.067h218.266  c13.474,0,26.65-3.994,37.862-11.469l124.262-82.842c7.586-5.052,12.143-13.568,12.143-22.682v-0.768  c0.026-15.053-12.151-27.281-27.204-27.307c-0.017,0-0.043,0-0.06,0l0,0c-4.514,0-8.951,1.118-12.919,3.26L358.4,418.135z"></path><rect y="358.402" style={{ fill: "#FEC9A3" }} width="110.933" height="145.067"></rect><rect y="418.135" style={{ fill: "#3F8FC4" }} width="110.933" height="85.333"></rect><circle style={{ fill: "#18588C" }} cx="59.733" cy="452.268" r="17.067"></circle><path style={{ fill: "#F5B789" }} d="M328.533,426.668h-89.6c-4.71,0-8.533-3.823-8.533-8.533s3.823-8.533,8.533-8.533h89.6  c4.71,0,8.533,3.823,8.533,8.533S333.244,426.668,328.533,426.668z"></path><path d="M256,230.402v17.067c42.394-0.051,76.749-34.406,76.8-76.8h-17.067C315.699,203.641,288.973,230.368,256,230.402z"></path><path d="M256,93.868c-42.394,0.051-76.749,34.406-76.8,76.8h17.067c0.034-32.973,26.761-59.699,59.733-59.733V93.868z"></path><path d="M264.533,213.335h3.209c12.365,0.017,22.409-9.993,22.426-22.357c0.017-10.974-7.919-20.343-18.748-22.127l-28.032-4.668  c-2.901-0.469-4.873-3.2-4.403-6.11c0.41-2.577,2.645-4.471,5.257-4.471h23.484c2.935,0.009,5.316,2.389,5.325,5.325v3.209h17.067  v-3.209c-0.017-12.356-10.018-22.366-22.374-22.391h-3.209v-8.533h-17.067v8.533h-3.209c-12.365-0.017-22.409,9.993-22.426,22.357  c-0.017,10.974,7.919,20.343,18.748,22.127l28.032,4.668c2.901,0.469,4.873,3.2,4.403,6.11c-0.41,2.577-2.645,4.471-5.257,4.471  h-23.501c-2.935,0-5.316-2.381-5.325-5.325v-3.209h-17.067v3.209c0.017,12.365,10.027,22.374,22.391,22.391h3.209v8.533h17.067  V213.335z"></path><path d="M307.2,72.356c-15.795-8.294-33.365-12.621-51.2-12.621c-2.884,0-5.709,0.213-8.533,0.435V0.002H230.4v62.831  c-5.828,1.348-11.537,3.166-17.067,5.436V51.202h-17.067v25.6h0.853c-9.975,6.255-18.91,14.046-26.453,23.083V34.135H153.6v93.867  l0,0c-23.561,56.55,3.183,121.506,59.733,145.067c56.55,23.561,121.506-3.183,145.067-59.733c11.375-27.307,11.375-58.027,0-85.333  l0,0V59.735h-17.067v40.149c-5.086-6.084-10.812-11.605-17.067-16.478V34.135H307.2V72.356z M324.267,106.489  c35.302,37.734,33.331,96.947-4.403,132.25s-96.947,33.331-132.25-4.403s-33.34-96.947,4.403-132.25  c31.505-29.474,79.087-33.587,115.183-9.95v44.399h17.067V106.489z"></path><rect x="307.2" y="0.002" width="17.067" height="17.067"></rect><rect x="196.267" y="17.068" width="17.067" height="17.067"></rect><path d="M409.719,95.268c0.785,4.651,5.188,7.774,9.839,6.989c3.584-0.606,6.383-3.413,6.989-6.989  c2.321-13.909,13.218-24.798,27.128-27.119c4.651-0.785,7.774-5.188,6.989-9.839c-0.606-3.584-3.413-6.383-6.989-6.989  c-13.909-2.321-24.806-13.21-27.128-27.119c-0.785-4.651-5.188-7.774-9.839-6.989c-3.584,0.606-6.383,3.413-6.989,6.989  C407.398,38.111,396.501,49,382.592,51.321c-4.651,0.785-7.774,5.188-6.989,9.839c0.606,3.584,3.413,6.383,6.989,6.989  C396.501,70.47,407.398,81.367,409.719,95.268z M418.133,47.549c3.328,4.736,7.45,8.858,12.186,12.186  c-4.736,3.328-8.858,7.45-12.186,12.186c-3.328-4.736-7.45-8.858-12.186-12.186C410.684,56.407,414.805,52.285,418.133,47.549z"></path><path d="M476.203,349.868c-5.922,0-11.75,1.468-16.964,4.267l-96.785,52.122c9.933-18.739,2.799-41.984-15.94-51.917  c-5.538-2.935-11.708-4.471-17.98-4.471h-95.053c-36.574-29.602-88.866-29.602-125.44,0H0v17.067h102.4v128H0v17.067h339.533  c8.422,0.009,16.666-2.483,23.663-7.168l132.864-88.576c16.606-11.255,20.941-33.852,9.677-50.449  C499.089,355.995,488.055,350.039,476.203,349.868z M486.596,402.058l-132.864,88.61c-4.207,2.799-9.148,4.284-14.199,4.267H119.467  V362.446c31.172-24.55,75.375-23.526,105.378,2.441c1.545,1.323,3.516,2.048,5.555,2.048h98.133  c11.785,0,21.333,9.549,21.333,21.333s-9.549,21.333-21.333,21.333h-89.6c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533  H358.4c1.408,0,2.799-0.35,4.045-1.015l104.892-56.482c9.429-4.719,20.907-0.896,25.626,8.542  C497.246,386.272,494.524,396.682,486.596,402.058z"></path><path d="M85.333,452.268c0-14.14-11.46-25.6-25.6-25.6s-25.6,11.46-25.6,25.6c0,14.14,11.46,25.6,25.6,25.6  S85.333,466.408,85.333,452.268L85.333,452.268z M51.2,452.268c0-4.71,3.823-8.533,8.533-8.533s8.533,3.823,8.533,8.533  s-3.823,8.533-8.533,8.533S51.2,456.979,51.2,452.268z"></path></svg></span>
                        <h5 className="u-custom-font u-text u-text-custom-color-3 u-text-default u-text-9">ETH and LQTY rewards&nbsp;&nbsp;</h5>
                        <p className="u-text u-text-white u-text-10"> Deposit LUSD into the Stability Pool to earn ETH and LQTY rewards.<br />
                          <br />Make liquidation gains and receive early adopter rewards in the form of LQTY tokens.<br />
                        </p>
                        <button className="u-align-center u-btn u-btn-round u-button-style u-gradient u-none u-radius-6 u-text-white u-btn-1" onClick={executeScroll}>read more</button>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-custom-color-1 u-list-item u-radius-10 u-repeater-item u-shape-round u-list-item-5">
                      <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7"><span className="u-icon u-icon-circle u-palette-1-base u-spacing-10 u-icon-5"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 -61 442.12496 442" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-5ee2"></use></svg><svg className="u-svg-content" viewBox="0 -61 442.12496 442" id="svg-5ee2"><path d="m381.03125 64.820312c0 31.566407-25.585938 57.15625-57.152344 57.15625s-57.15625-25.589843-57.15625-57.15625c0-31.566406 25.589844-57.15625 57.15625-57.15625s57.152344 25.589844 57.152344 57.15625zm0 0" fill="#ff8030"></path><path d="m323.878906 91.492188h-19.050781v-15.242188h19.050781c2.101563 0 3.808594-1.703125 3.808594-3.808594 0-2.105468-1.707031-3.808594-3.808594-3.808594-10.523437 0-19.050781-8.53125-19.050781-19.054687 0-10.519531 8.527344-19.050781 19.050781-19.050781h19.050782v15.242187h-19.050782c-2.105468 0-3.8125 1.707031-3.8125 3.808594 0 2.105469 1.707032 3.8125 3.8125 3.8125 10.519532 0 19.050782 8.527344 19.050782 19.050781 0 10.523438-8.53125 19.050782-19.050782 19.050782zm0 0" fill="#ffdb6f"></path><g fill="#d32144"><path d="m101.300781 108.96875 91.449219-91.449219 10.777344 10.777344-91.449219 91.449219zm0 0"></path><path d="m122.828125 62.800781c-13.121094.003907-23.761719-10.628906-23.769531-23.753906-.003906-13.121094 10.632812-23.761719 23.753906-23.769531 13.125-.003906 23.765625 10.632812 23.769531 23.753906v.015625c-.011719 13.113281-10.640625 23.742187-23.753906 23.753906zm0-32.273437c-4.703125-.003906-8.523437 3.808594-8.527344 8.511718-.003906 4.707032 3.808594 8.523438 8.515625 8.527344 4.703125.003906 8.523438-3.804687 8.527344-8.511718 0-.003907 0-.003907 0-.007813-.003906-4.699219-3.8125-8.511719-8.515625-8.519531zm0 0"></path><path d="m181.996094 121.976562c-13.121094 0-23.761719-10.640624-23.761719-23.761718 0-13.125 10.640625-23.761719 23.761719-23.761719 13.125 0 23.761718 10.636719 23.761718 23.761719-.007812 13.121094-10.640624 23.753906-23.761718 23.761718zm0-32.273437c-4.703125 0-8.519532 3.8125-8.519532 8.519531 0 4.703125 3.816407 8.519532 8.519532 8.519532 4.707031 0 8.519531-3.816407 8.519531-8.519532 0-.003906 0-.007812 0-.007812-.003906-4.703125-3.816406-8.511719-8.519531-8.511719zm0 0"></path>
                      </g><path d="m76.207031 190.5625h53.34375l22.863281-18.472656h60.964844l68.585938-7.621094h45.722656v22.863281l-45.722656 7.617188-30.480469 11.433593 38.101563 34.292969 60.964843-22.863281 32.417969-41.683594c12.167969-15.644531 33.683594-20.523437 51.410156-11.660156l-53.34375 76.203125-83.828125 45.726563-45.722656-7.621094-114.3125-12.011719h-60.964844zm0 0" fill="#f9dfc8"></path><path d="m0 190.5625h76.207031v121.929688h-76.207031zm0 0" fill="#1e76d2"></path><path d="m53.34375 270.578125c0 6.3125-5.117188 11.429687-11.429688 11.429687s-11.429687-5.117187-11.429687-11.429687 5.117187-11.429687 11.429687-11.429687 11.429688 5.117187 11.429688 11.429687zm0 0" fill="#d3d3d3"></path><path d="m101.300781 108.964844 91.445313-91.445313 10.777344 10.773438-91.449219 91.449219zm0 0"></path><path d="m122.832031 62.808594c-13.101562 0-23.761719-10.660156-23.761719-23.761719s10.660157-23.761719 23.761719-23.761719c13.101563 0 23.757813 10.660156 23.757813 23.761719s-10.65625 23.761719-23.757813 23.761719zm0-32.28125c-4.699219 0-8.523437 3.820312-8.523437 8.519531s3.824218 8.519531 8.523437 8.519531c4.695313 0 8.515625-3.820312 8.515625-8.519531s-3.820312-8.519531-8.515625-8.519531zm0 0"></path><path d="m181.996094 121.976562c-13.101563 0-23.761719-10.664062-23.761719-23.765624 0-13.097657 10.65625-23.757813 23.761719-23.757813 13.101562 0 23.761718 10.65625 23.761718 23.757813 0 13.105468-10.660156 23.765624-23.761718 23.765624zm0-32.28125c-4.695313 0-8.519532 3.820313-8.519532 8.515626 0 4.703124 3.824219 8.523437 8.519532 8.523437 4.699218 0 8.519531-3.820313 8.519531-8.523437 0-4.695313-3.820313-8.515626-8.519531-8.515626zm0 0"></path><path d="m323.878906 129.597656c-35.714844 0-64.777344-29.058594-64.777344-64.777344s29.0625-64.773437 64.777344-64.773437c35.710938 0 64.773438 29.054687 64.773438 64.773437s-29.0625 64.777344-64.773438 64.777344zm0-114.3125c-27.3125 0-49.535156 22.222656-49.535156 49.535156s22.222656 49.535157 49.535156 49.535157 49.53125-22.222657 49.53125-49.535157-22.21875-49.535156-49.53125-49.535156zm0 0"></path><path d="m323.878906 91.492188h-19.050781v-15.242188h19.050781c2.097656 0 3.808594-1.707031 3.808594-3.808594 0-2.101562-1.710938-3.808594-3.808594-3.808594-10.507812 0-19.050781-8.550781-19.050781-19.054687s8.542969-19.050781 19.050781-19.050781h19.050782v15.242187h-19.050782c-2.097656 0-3.8125 1.707031-3.8125 3.808594 0 2.105469 1.714844 3.8125 3.8125 3.8125 10.507813 0 19.050782 8.546875 19.050782 19.050781s-8.542969 19.050782-19.050782 19.050782zm0 0"></path><path d="m297.207031 294.019531c-.417969 0-.835937-.035156-1.253906-.101562l-45.722656-7.621094-113.457031-11.910156h-60.566407c-4.210937 0-7.621093-3.40625-7.621093-7.621094v-76.203125c0-4.214844 3.410156-7.621094 7.621093-7.621094h50.648438l20.769531-16.78125c1.351562-1.09375 3.046875-1.691406 4.789062-1.691406h60.542969l68.164063-7.570312c.277344-.035157.558594-.050782.84375-.050782h45.722656c4.210938 0 7.621094 3.410156 7.621094 7.621094v22.863281c0 3.730469-2.695313 6.90625-6.371094 7.515625l-44.996094 7.503906-18.039062 6.765626 25.339844 22.800781 54.609374-20.480469 31.101563-39.984375c14.347656-18.445313 39.933594-24.242187 60.832031-13.800781 1.976563.996094 3.429688 2.800781 3.980469 4.941406.542969 2.152344.125 4.429688-1.144531 6.246094l-53.347656 76.207031c-.675782.964844-1.5625 1.753906-2.597657 2.320313l-83.824219 45.722656c-1.125.609375-2.382812.929687-3.644531.929687zm-213.378906-34.871093h53.34375c.261719 0 .53125.015624.796875.042968l114.308594 12.011719 43.589844 7.25 79.949218-43.613281 46.542969-66.492188c-12.332031-2.398437-25.378906 2.179688-33.378906 12.464844l-32.417969 41.683594c-.863281 1.109375-2.015625 1.957031-3.332031 2.457031l-60.964844 22.859375c-2.664063 1.007812-5.664063.433594-7.777344-1.472656l-38.105469-34.292969c-1.976562-1.777344-2.886718-4.464844-2.386718-7.078125.488281-2.617188 2.3125-4.785156 4.804687-5.722656l30.484375-11.429688c.460938-.171875.9375-.296875 1.429688-.378906l39.351562-6.558594v-8.789062h-37.679687l-68.167969 7.578125c-.277344.027343-.558594.042969-.839844.042969h-58.273437l-20.765625 16.78125c-1.355469 1.09375-3.046875 1.691406-4.789063 1.691406h-45.722656zm0 0"></path><path d="m76.207031 320.113281h-68.585937c-4.210938 0-7.621094-3.410156-7.621094-7.621093v-121.929688c0-4.214844 3.410156-7.621094 7.621094-7.621094h68.585937c4.207031 0 7.621094 3.40625 7.621094 7.621094v121.929688c0 4.210937-3.414063 7.621093-7.621094 7.621093zm-60.964843-15.242187h53.34375v-106.6875h-53.34375zm0 0"></path><path d="m53.34375 270.578125c0 6.3125-5.117188 11.429687-11.429688 11.429687s-11.429687-5.117187-11.429687-11.429687 5.117187-11.429687 11.429687-11.429687 11.429688 5.117187 11.429688 11.429687zm0 0"></path></svg></span>
                        <h5 className="u-custom-font u-text u-text-custom-color-3 u-text-default u-text-11">Earn ETH&nbsp;<span >&nbsp;and LUSD</span>
                        </h5>
                        <p className="u-text u-text-white u-text-12">
                          Stake LQTY to earn a share of borrowing and redemption fees.<br />
                          <br /> You can withdraw your staked funds at any time.<br />
                          <br />
                        </p>
                        <button className="u-align-center u-btn u-btn-round u-button-style u-gradient u-none u-radius-6 u-text-white u-btn-1" onClick={executeScroll}>read more</button>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-custom-color-1 u-list-item u-radius-10 u-repeater-item u-shape-round u-list-item-6">
                      <div className="u-container-layout u-similar-container u-valign-top u-container-layout-8">
                        <span className="u-icon u-icon-circle u-palette-1-base u-spacing-8 u-icon-6">

                          <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="23" fill="white" stroke="#0E0D29" strokeWidth="2" />
                            <line x1="4.5" y1="35.134" x2="43.4711" y2="12.634" stroke="#0E0D29" strokeWidth="2" />
                            <path d="M3.76791 11.6338L24.1195 23.3838" stroke="#0E0D29" strokeWidth="2" />
                            <path d="M33 19V3" stroke="#0E0D29" strokeWidth="2" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M34 16.9476L42.4769 12.0535C40.3792 8.81586 37.4537 6.16442 34 4.39893V16.9476Z" fill="#E36C53" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M24 46.0003C36.1503 46.0003 46 36.1506 46 24.0003C46 20.311 45.0919 16.8338 43.4869 13.78L5.40688 35.7656C9.30756 41.9171 16.1769 46.0003 24 46.0003ZM2 24.0003C2 20.1377 2.99544 16.5076 4.74378 13.3525L22.4856 23.5958L4.41378 34.0295C2.87073 31.0221 2 27.6129 2 24.0003Z" fill="#F0E0BC" />
                            <circle cx="24.0793" cy="11.0793" r="4.07932" fill="#0E0D29" />
                          </svg>
                        </span>
                        <h5 className="u-custom-font u-text u-text-custom-color-3 u-text-default u-text-13">Bond</h5>
                        <p className="u-text u-text-white u-text-14">
                          Deposit LUSD and accrue bLUSD – no maturity and no lock up<br />
                          <br />Sell bLUSD and rebond or just hold bLUSD and benefit from the amplified yield
                          <br />
                          <br />
                        </p>
                        <button className="u-align-center u-btn u-btn-round u-button-style u-gradient u-none u-radius-6 u-text-white u-btn-1" onClick={executeScroll}>read more</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
