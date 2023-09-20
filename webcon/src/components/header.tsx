import {
    EuiButtonIcon,
    EuiFlexGroup,
    EuiFlexItem,
    EuiHeader,
    EuiImage,
    EuiText,
    EuiTextColor,
  } from "@elastic/eui";
  import { signOut } from "firebase/auth";
  import { useEffect, useState } from "react";
  import { useDispatch } from "react-redux";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import { useAppSelector } from "../app/hooks";
  
  import {
    getCreateMeetingBreadCrumbs,
    getDashboardBreadCrumbs,
    getMeetingsBreadCrumbs,
    getMyMeetingsBreadCrumbs,
    getOneOnOneMeetingBreadCrumbs,
    getVideoConferenceBreadCrumbs,
  } from "../utils/breadcrumbs";
  import { firebaseAuth } from "../utils/FirebaseConfig";
  import { BreadCrumbsType } from "../utils/types";
  import headlogo from "../assets/aicte head.png"
  
  export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const userName = useAppSelector((webrtc) => webrtc.auth.userInfo?.name);
    const [breadCrumbs, setBreadCrumbs] = useState<Array<BreadCrumbsType>>([
      {
        text: "Dashboard",
      },
    ]);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const { pathname } = location;
      if (pathname === "/") setBreadCrumbs(getDashboardBreadCrumbs(navigate));
      else if (pathname === "/create")
        setBreadCrumbs(getCreateMeetingBreadCrumbs(navigate));
      else if (pathname === "/create1on1")
        setBreadCrumbs(getOneOnOneMeetingBreadCrumbs(navigate));
      else if (pathname === "/videoconference")
        setBreadCrumbs(getVideoConferenceBreadCrumbs(navigate));
      else if (pathname === "/mymeetings")
        setBreadCrumbs(getMyMeetingsBreadCrumbs(navigate));
      else if (pathname === "/meetings") {
        setBreadCrumbs(getMeetingsBreadCrumbs(navigate));
      }
    }, [location, navigate]);
  
    const logout = () => {
      signOut(firebaseAuth);
    };
  
    const section = [
      {
        items: [
          <Link to="/">
            <EuiFlexItem>
                <EuiImage src={headlogo} alt="logo" size="250px"/>
              </EuiFlexItem>
          </Link>,
        ],
      },
      
      {
        items: [
          

          <EuiFlexGroup
            justifyContent="center"
            alignItems="center"
            direction="row"
            style={{ gap: "0.5vw" }}
          >
            <>
            {userName ? (
              <EuiText>
                <h4>
                  <EuiTextColor color="white">Hello, </EuiTextColor>
                  <EuiTextColor color="#FBA740">{userName}</EuiTextColor>
                </h4>
              </EuiText>
            ) : null}
            
          </>,
            
            <EuiFlexItem grow={false} style={{ flexBasis: "fit-content" }}>
              <EuiButtonIcon
                onClick={logout}
                iconType="lock"
                color="warning"
                display="fill"
                size="s"
                aria-label="logout-button"
              />
            </EuiFlexItem>
          </EuiFlexGroup>,
        ],
      },
    ];
  
    
  
    // useEffect(() => {
    //   if (window.innerWidth < 480) {
    //     // sectionSpliced.splice(1, 1);
    //     // setSection(sectionSpliced);
    //     setIsResponsive(true);
    //   }
    // }, []);
  
    return (
      <>
        <EuiHeader
          style={{ minHeight: "8vh" }}
          theme="dark"
          sections={section}
        />
        <EuiHeader
          style={{ minHeight: "8vh" }}
          sections={[
            {
              breadcrumbs: breadCrumbs,
            },
          ]}
        />
      </>
    );
  }
  