import React, { useRef, useState, useEffect } from "react";
import "./SideMenu.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLocation } from "../../redux/location/location.selector";
import { selectCurrentPosition } from "../../redux/position/position.selector";

import { NavLink, withRouter } from "react-router-dom";
import gsap from "gsap";

// REFS FOR ANIMATION
const SideMenu = ({ currentPosition, currentLocation, history }) => {
  const myLogo = useRef(null);
  const menuLink1 = useRef(null);
  const menuLink2 = useRef(null);
  const menuLink3 = useRef(null);
  const parentLink1 = useRef(null);
  const parentLink2 = useRef(null);
  const parentLink3 = useRef(null);
  const sideMenu = useRef(null);
  const linksBackground = useRef(null);
  const clickableLineLeft = useRef(null);
  const clickableLineRight = useRef(null);
  const backdrop = useRef(null);
  const menuContainer = useRef(null);

  // LINKS AND THEIR PARENT DIVS IN ARRAYS
  let refsArray = [menuLink1, menuLink2, menuLink3];
  let parentArray = [parentLink1, parentLink2, parentLink3];

  // STATE FOR CHECKING IF THE MENU IS OPEN OR CLOSE
  const [menuState, setMenuState] = useState({ menuOpend: false });

  // HOVER EFFECT ANIMATION ON LINKS
  const linkMouseEnter = (link) => {
    refsArray
      .filter((ref) => ref !== link)
      .map((ref) => (ref.current.style.opacity = "0.2"));
  };
  const linkMouseLeave = () => {
    refsArray.map((ref) => (ref.current.style.opacity = "1"));
  };

  // STYLE FOR A BLACK CLOSED MENU
  const blackYellowClosedSideMenu = () => {
    linksBackground.current.style.background = "#faff19";
    refsArray.map((ref) => (ref.current.style.color = "#1a1a1a"));
    parentArray.map((parRef) => (parRef.current.style.borderColor = "#1a1a1a"));
    if (window.matchMedia("(min-width: 1351px)").matches) {
      clickableLineLeft.current.style.background = "#ffffff";
      clickableLineRight.current.style.background = "#ffffff";
      sideMenu.current.style.borderRight = "rgba(255,255,255,0.18) 1px solid";
      sideMenu.current.style.background = "#1a1a1a";
      myLogo.current.style.fill = "#ffffff";
    } else {
      clickableLineLeft.current.style.background = "#1a1a1a";
      clickableLineRight.current.style.background = "#1a1a1a";
      sideMenu.current.style.borderBottom = "rgba(255,255,255,0.18) 1px solid";
      sideMenu.current.style.background = "#faff19";
      myLogo.current.style.fill = "#1a1a1a";
    }
  };

  // STYLE FOR A BLACK OPENED MENU
  const blackYellowOpenedSideMenu = () => {
    sideMenu.current.style.background = "#faff19";
    clickableLineLeft.current.style.background = "#1a1a1a";
    clickableLineRight.current.style.background = "#1a1a1a";
    myLogo.current.style.fill = "#1a1a1a";
    if (window.matchMedia("(min-width: 1351px)").matches) {
      sideMenu.current.style.borderRight = "rgba(0, 0, 0, 0.18) 1px solid";
    } else {
      sideMenu.current.style.borderBottom = "rgba(0, 0, 0, 0.18) 1px solid";
    }
  };

  // STYLE FOR A FULLWHITE CLOSED MENU
  const blackWhiteClosedSideMenu = () => {
    linksBackground.current.style.background = "#ffffff";
    refsArray.map((ref) => (ref.current.style.color = "#1a1a1a"));
    parentArray.map((parRef) => (parRef.current.style.borderColor = "#1a1a1a"));
    if (window.matchMedia("(min-width: 1351px)").matches) {
      clickableLineLeft.current.style.background = "#ffffff";
      clickableLineRight.current.style.background = "#ffffff";
      sideMenu.current.style.borderRight = "rgba(255,255,255,0.18) 1px solid";
      sideMenu.current.style.background = "#1a1a1a";
      myLogo.current.style.fill = "#ffffff";
    } else {
      clickableLineLeft.current.style.background = "#1a1a1a";
      clickableLineRight.current.style.background = "#1a1a1a";
      sideMenu.current.style.borderBottom = "rgba(0,0,0,0.18) 1px solid";
      sideMenu.current.style.background = "#ffffff";
    }
  };

  // STYLE FOR A BLACK OPENED MENU
  const blackWhiteOpenedSideMenu = () => {
    sideMenu.current.style.background = "#ffffff";
    clickableLineLeft.current.style.background = "#1a1a1a";
    clickableLineRight.current.style.background = "#1a1a1a";
    if (window.matchMedia("(min-width: 1351px)").matches) {
      sideMenu.current.style.borderRight = "rgba(0, 0, 0, 0.18) 1px solid";
    } else {
      sideMenu.current.style.borderBottom = "rgba(0, 0, 0, 0.18) 1px solid";
    }
  };

  // STYLE FOR A YELLOW CLOSED MENU
  const yellowBlackClosedSideMenu = () => {
    sideMenu.current.style.background = "#faff19";
    linksBackground.current.style.background = "#1a1a1a";
    clickableLineLeft.current.style.background = "#1a1a1a";
    clickableLineRight.current.style.background = "#1a1a1a";
    refsArray.map((ref) => (ref.current.style.color = "#ffffff"));
    parentArray.map((parRef) => (parRef.current.style.borderColor = "#ffffff"));
    if (window.matchMedia("(min-width: 1351px)").matches) {
      sideMenu.current.style.borderRight = "rgba(0, 0, 0, 0.18) 1px solid";
      myLogo.current.style.fill = "#1a1a1a";
    } else {
      sideMenu.current.style.borderBottom = "rgba(0, 0, 0, 0.18) 1px solid";
      myLogo.current.style.fill = "#1a1a1a";
    }
  };

  // STYLE FOR A YELLOW OPENED MENU
  const yellowBlackOpenedSideMenu = () => {
    sideMenu.current.style.background = "#1a1a1a";
    clickableLineLeft.current.style.background = "#ffffff";
    clickableLineRight.current.style.background = "#ffffff";
    if (window.matchMedia("(min-width: 1351px)").matches) {
      sideMenu.current.style.borderRight =
        "rgba(255, 255, 255, 0.18) 1px solid";
    } else {
      sideMenu.current.style.borderBottom =
        "rgba(255, 255, 255, 0.18) 1px solid";
      myLogo.current.style.fill = "#ffffff";
    }
  };
  // STYLE FOR A YELLOW CLOSED MENU
  const whiteBlackClosedSideMenu = () => {
    sideMenu.current.style.background = "#ffffff";
    linksBackground.current.style.background = "#1a1a1a";
    clickableLineLeft.current.style.background = "#1a1a1a";
    clickableLineRight.current.style.background = "#1a1a1a";
    refsArray.map((ref) => (ref.current.style.color = "#ffffff"));
    parentArray.map((parRef) => (parRef.current.style.borderColor = "#ffffff"));
    if (window.matchMedia("(min-width: 1351px)").matches) {
      sideMenu.current.style.borderRight = "rgba(0, 0, 0, 0.18) 1px solid";
      myLogo.current.style.fill = "#1a1a1a";
    } else {
      sideMenu.current.style.borderBottom = "rgba(0, 0, 0, 0.18) 1px solid";
      myLogo.current.style.fill = "#1a1a1a";
    }
  };

  // STYLE FOR A YELLOW OPENED MENU
  const whiteBlackOpenedSideMenu = () => {
    sideMenu.current.style.background = "#1a1a1a";
    clickableLineLeft.current.style.background = "#ffffff";
    clickableLineRight.current.style.background = "#ffffff";
    if (window.matchMedia("(min-width: 1351px)").matches) {
      sideMenu.current.style.borderRight =
        "rgba(255, 255, 255, 0.18) 1px solid";
    } else {
      sideMenu.current.style.borderBottom =
        "rgba(255, 255, 255, 0.18) 1px solid";
      myLogo.current.style.fill = "#ffffff";
    }
  };

  // OPEN THE MENU
  const menuOpenHandler = () => {
    clickableLineLeft.current.style.position = "absolute";
    clickableLineRight.current.style.position = "absolute";
    if (window.matchMedia("(min-width: 1351px)").matches) {
      gsap.to(clickableLineLeft.current, { rotate: 45 });
      gsap.to(clickableLineRight.current, { rotate: -45 });
    } else {
      gsap.to(clickableLineLeft.current, { rotate: 45 });
      gsap.to(clickableLineRight.current, { rotate: -45 });
    }

    gsap.to(menuContainer.current, 0.5, {
      left: "0",
      ease: "power2.out",
    });
    gsap.to(backdrop.current, 1, {
      delay: 0.2,
      opacity: 1,
      ease: "power2.out",
    });
  };

  // CLOSE THE MENU
  const menuClosedHandler = () => {
    clickableLineLeft.current.style.position = null;
    clickableLineRight.current.style.position = null;
    if (window.matchMedia("(min-width: 1351px)").matches) {
      gsap.to(clickableLineLeft.current, { rotate: 0, margin: "2px" });
      gsap.to(clickableLineRight.current, { rotate: 0, margin: "2px" });
    } else {
      gsap.to(clickableLineLeft.current, { rotate: 0, margin: "2px" });
      gsap.to(clickableLineRight.current, { rotate: 0, margin: "2px" });
    }

    gsap.to(backdrop.current, 0.3, {
      opacity: 0,
      ease: "Power1.easeInOut",
    });
    gsap.to(".menuContainer", 0.3, { left: "-100%" });
  };
  // CHANGE THE RESPECTIVE LINK STYLE WHEN URL CHANGES
  useEffect(() => {
    window.scrollTo(0, 0);
    parentArray.map((parRef) => (parRef.current.style.border = "none"));
    refsArray.forEach((ref, index) => {
      if (currentLocation === ref.current.pathname.substring(1)) {
        parentArray[index].current.style.borderBottom = "2px solid";
      }
    });
  }, [currentLocation]);

  useEffect(() => {
    if (menuState.menuOpend === true) {
      document.body.style.overflow = "hidden";
      switch (currentPosition) {
        case "blackbar":
          blackYellowOpenedSideMenu();
          break;
        case "yellowbar":
          yellowBlackOpenedSideMenu();
          break;
        case "whitebar":
          whiteBlackOpenedSideMenu();
          break;
        case "fullwhitebar":
          blackWhiteOpenedSideMenu();
          break;
        default:
          whiteBlackOpenedSideMenu();
          break;
      }
      menuOpenHandler();
    } else {
      document.body.style.overflow = "auto";
      switch (currentPosition) {
        case "blackbar":
          blackYellowClosedSideMenu();
          break;
        case "yellowbar":
          yellowBlackClosedSideMenu();
          break;
        case "whitebar":
          whiteBlackClosedSideMenu();
          break;
        case "fullwhitebar":
          blackWhiteClosedSideMenu();
          break;
        default:
          whiteBlackClosedSideMenu();
          break;
      }
      menuClosedHandler();
    }
  });

  return (
    <React.Fragment>
      <Logo
        className="logo"
        onClick={() => {
          history.push(`${process.env.PUBLIC_URL + "/"}`);
          setMenuState({ menuOpend: false });
        }}
        ref={myLogo}
      />

      <div ref={sideMenu} className="sideMenu">
        <div
          className="menuBut"
          onClick={() => setMenuState({ menuOpend: !menuState.menuOpend })}
        >
          <span
            className="menuBut__clickableLine menuBut__clickableLine--left"
            ref={clickableLineLeft}
          ></span>
          <span
            className="menuBut__clickableLine menuBut__clickableLine--right"
            ref={clickableLineRight}
          ></span>
        </div>
      </div>
      <div className="menuContainer" ref={menuContainer}>
        <div className="menuContainer__linksWrapper" ref={linksBackground}>
          <div className="menuContainer__links">
            <div className="menuContainer__linkWrapper" ref={parentLink1}>
              <NavLink
                onMouseEnter={() => linkMouseEnter(menuLink1)}
                onMouseLeave={linkMouseLeave}
                onClick={() =>
                  setMenuState({ menuOpend: !menuState.menuOpend })
                }
                ref={menuLink1}
                className="menuContainer__link"
                to={`/whoweare`}
              >
                Who we are
              </NavLink>
            </div>
            <div className="menuContainer__linkWrapper" ref={parentLink2}>
              <NavLink
                onMouseEnter={() => linkMouseEnter(menuLink2)}
                onMouseLeave={linkMouseLeave}
                onClick={() =>
                  setMenuState({ menuOpend: !menuState.menuOpend })
                }
                ref={menuLink2}
                className="menuContainer__link"
                to={`/howwework`}
              >
                How we work
              </NavLink>
            </div>
            <div className="menuContainer__linkWrapper" ref={parentLink3}>
              <NavLink
                onMouseEnter={() => linkMouseEnter(menuLink3)}
                onMouseLeave={linkMouseLeave}
                onClick={() =>
                  setMenuState({ menuOpend: !menuState.menuOpend })
                }
                ref={menuLink3}
                className="menuContainer__link"
                to={`/whatwehavedone`}
              >
                What we've done
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className="menuContainer__backdrop"
          ref={backdrop}
          onClick={() => setMenuState({ menuOpend: !menuState.menuOpend })}
        ></div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = createStructuredSelector({
  currentPosition: selectCurrentPosition,
  currentLocation: selectCurrentLocation,
});
export default withRouter(connect(mapStateToProps)(SideMenu));
