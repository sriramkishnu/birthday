import Confetti from "react-confetti";
import { Col, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import "rc-texty/assets/index.css";

function App() {
  return (
    <>
      <Confetti />
      <div>
        <Layout>
          <Content
            style={{
              padding: "50px 20px", // Adjusting padding for smaller screens
            }}
          >
            <div
              style={{
                minHeight: 280,
              }}
            >
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                justify={"center"}
                style={{ margin: "30px 0" }}
              >
                <Col xs={12} sm={8} md={6} lg={6}>
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://drive.google.com/thumbnail?id=1dmMLrPdsMgidNK6ncT0z_xa_UlwJKsVh"
                      alt="drive image"
                    />
                  </span>
                </Col>
                <Col xs={12} sm={8} md={6} lg={6}>
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://drive.google.com/thumbnail?id=176uHsXwXZg4WSpRhWfMPYBKs3JkJDowE"
                      alt="drive image"
                    />
                  </span>
                </Col>
                <Col xs={12} sm={8} md={6} lg={6}>
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://drive.google.com/thumbnail?id=1KgrLSZ74b5TMhYuKD7FeRpckl4-zmS7K"
                      alt="drive image"
                    />
                  </span>
                </Col>
                <Col xs={12} sm={8} md={6} lg={6}>
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://drive.google.com/thumbnail?id=1TPAikEZK4M0VHG6FwBCRsIUJHLDcT0Gu"
                      alt="drive image"
                    />
                  </span>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                justify={"center"}
                style={{ margin: "30px 0" }}
              >
                <Col xs={12} sm={6} md={6} lg={6}>
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://drive.google.com/thumbnail?id=10AaCXYs6KvKW1FVfP6RKIndt9y5yHMUn"
                      alt="drive image"
                    />
                  </span>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12}>
                  <span
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="typewriter line1">
                      Happy Birthday Shanu❤️
                    </div>
                    <br />
                    <div className="typewriter line2">
                      You mean the 🌎 to me
                    </div>
                  </span>
                </Col>

                <Col xs={12} sm={6} md={6} lg={6}>
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://drive.google.com/thumbnail?id=1iCDQIOqQns9FMqFXXEBzkYMTiwFSr4sX"
                      alt="drive image"
                    />
                  </span>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                justify={"center"}
                style={{ margin: "30px 0" }}
              >
                <Col xs={12} sm={8} md={6} lg={6}>
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://drive.google.com/thumbnail?id=17kTOvaVf5Z55DBgwgKG_mHlrEU8LoD_S"
                      alt="drive image"
                    />
                  </span>
                </Col>
                <Col xs={12} sm={8} md={6} lg={6}>
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://drive.google.com/thumbnail?id=1omquMU0ezbkkTpVwCUoOmceDutgQB6jL"
                      alt="drive image"
                    />
                  </span>
                </Col>
                <Col xs={12} sm={8} md={6} lg={6}>
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://drive.google.com/thumbnail?id=1xyjWMgL2BqAPvosh2hJQZHHVHo1rbn_b"
                      alt="drive image"
                    />
                  </span>
                </Col>
                <Col xs={12} sm={8} md={6} lg={6}>
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://drive.google.com/thumbnail?id=1ePSaDYWD1WSOV9nN1JLOWcrMFPgukoG0"
                      alt="drive image"
                    />
                  </span>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </div>
    </>
  );
}

export default App;
