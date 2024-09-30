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
                      src="https://drive.google.com/thumbnail?id=1I-2li6Qm-0pk000FY51W3v3nen6hKBlX"
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
                      src="https://drive.google.com/thumbnail?id=1I-2li6Qm-0pk000FY51W3v3nen6hKBlX"
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
                      src="https://drive.google.com/thumbnail?id=1I-2li6Qm-0pk000FY51W3v3nen6hKBlX"
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
                      src="https://drive.google.com/thumbnail?id=1HxbuLCkHxtY1VPvmXy2kzoopRBMQgKot"
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
                      src="https://drive.google.com/thumbnail?id=1HxbuLCkHxtY1VPvmXy2kzoopRBMQgKot"
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
                    }}
                  >
                    <p className="typewriter">Happy Birthday Shanu❤️</p>
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
                      src="https://drive.google.com/thumbnail?id=1HxbuLCkHxtY1VPvmXy2kzoopRBMQgKot"
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
                      src="https://drive.google.com/thumbnail?id=1HxbuLCkHxtY1VPvmXy2kzoopRBMQgKot"
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
                      src="https://drive.google.com/thumbnail?id=1HxbuLCkHxtY1VPvmXy2kzoopRBMQgKot"
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
                      src="https://drive.google.com/thumbnail?id=1HxbuLCkHxtY1VPvmXy2kzoopRBMQgKot"
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
                      src="https://drive.google.com/thumbnail?id=1HxbuLCkHxtY1VPvmXy2kzoopRBMQgKot"
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
