import React, { useState, useEffect, useCallback } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import {Col, Row, Container, Jumbotron, Card} from "react-bootstrap";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          <Col xl={4} md={4} lg={4} sm={6}>
            <Card className='text-center'>
              <Card.Img variant="top" src="https://portfolio.sumonahemed.com/images/ecommerece.png" />
              <Card.Body>
                <Card.Title className='text-info'>Ecommerce System</Card.Title>
                <Card.Text>
                  User can sell product,they can give review product and also do different things in this website.
                </Card.Text>
                <a href="https://mycom.sumonahemed.com/" target="_blank" className='btn btn-primary'>DEMO</a>
              </Card.Body>
            </Card>

          </Col>

          <Col xl={4} md={4} lg={4} sm={6}>
          <Card className='text-center'>
            <Card.Img variant="top" className='p-4' src="https://portfolio.sumonahemed.com/images/facematch.jpg" />
            <Card.Body>
              <Card.Title className='text-info'>Face Matching</Card.Title>
              <Card.Text>
                Face Match between two image and show how ratio image is match and how ratio is not match.
              </Card.Text>
              <a href="https://facematch.sumonahemed.com/" target="_blank" className='btn btn-primary'>DEMO</a>
            </Card.Body>
          </Card>

        </Col>

          <Col xl={4} md={4} lg={4} sm={6}>
            <Card className='text-center'>
              <Card.Img variant="top" className='p-5'  src="https://portfolio.sumonahemed.com/images/ocr.png" />
              <Card.Body>
                <Card.Title className='text-info'>Optical Character Recognition</Card.Title>
                <Card.Text>
                  Conver Image to Text.
                </Card.Text>
                <a href="https://ocr.sumonahemed.com/" target="_blank" className='btn btn-primary'>DEMO</a>
              </Card.Body>
            </Card>

          </Col>

          <Col className='mt-4' xl={4} md={4} lg={4} sm={6}>
            <Card className='text-center'>
              <Card.Img variant="top" className='p-2'  src="https://portfolio.sumonahemed.com/images/ai.webp" />
              <Card.Body>
                <Card.Title className='text-info'>Face Movement</Card.Title>
                <Card.Text>
                  Detect Face,Mouth Open,Mouth Close,Left eye Close,Left eye Open,Right eye Close,Right eye Open
                </Card.Text>
                <a href="https://facemovement.sumonahemed.com/" target="_blank" className='btn btn-primary'>DEMO</a>
              </Card.Body>
            </Card>

          </Col>

          <Col className='mt-4' xl={4} md={4} lg={4} sm={6}>
            <Card className='text-center'>
              <Card.Img variant="top"  src="https://portfolio.sumonahemed.com/images/smartcamera.jpg" />
              <Card.Body>
                <Card.Title className='text-info'>Smart Camera</Card.Title>
                <Card.Text>
                  Detect Age,Gender,Expression,left_to_right_eye,left_eye_to_nose,right_eye_to_nose,nose_to_left_mouth,nose_to_right_mouth
                </Card.Text>
                <a href="https://smartcamera.sumonahemed.com/" target="_blank" className='btn btn-primary'>DEMO</a>
              </Card.Body>
            </Card>

          </Col>


          <Col className='mt-4' xl={4} md={4} lg={4} sm={6}>
            <Card className='text-center'>
              <Card.Img variant="top"  src="https://portfolio.sumonahemed.com/images/smartmedia.jpg" />
              <Card.Body>
                <Card.Title className='text-info'>Smart Camera</Card.Title>
                <Card.Text>
                  When user face detect by camera then media will be play otherwise not
                </Card.Text>
                <a href="https://smartmedia.sumonahemed.com" target="_blank" className='btn btn-primary'>DEMO</a>
              </Card.Body>
            </Card>

          </Col>

          <Col className='mt-4' xl={4} md={4} lg={4} sm={6}>
            <Card className='text-center'>
              <Card.Img variant="top" className='p-2'  src="https://portfolio.sumonahemed.com/images/poject.jpg" />
              <Card.Body>
                <Card.Title className='text-info'>React Portfolio Website</Card.Title>
                <Card.Text>
                  This Project basically used react-dedux for project state management
                </Card.Text>
                <a href="https://blog.sumonahemed.com/" target="_blank" className='btn btn-primary'>DEMO</a>
              </Card.Body>
            </Card>

          </Col>

          <Col className='mt-4' xl={4} md={4} lg={4} sm={6}>
            <Card className='text-center'>
              <Card.Img variant="top"  src="https://portfolio.sumonahemed.com/images/shop.jpg" />
              <Card.Body>
                <Card.Title className='text-info'>Simple Shop Management System</Card.Title>
                <Card.Text>
                  UserName: Mamun
                  email:ahemedsumon03@gmail.com
                  Password: 1234
                </Card.Text>
                <a href="https://shop.sumonahemed.com" target="_blank" className='btn btn-primary'>DEMO</a>
              </Card.Body>
            </Card>

          </Col>

          <Col className='mt-4' xl={4} md={4} lg={4} sm={6}>
            <Card className='text-center'>
              <Card.Img variant="top" className='p-4'  src="https://portfolio.sumonahemed.com/images/react.png" />
              <Card.Body>
                <Card.Title className='text-info'>React Portfolio Website</Card.Title>
                <Card.Text>
                  It basically a portfolio website creating by reactJs
                </Card.Text>
                <a href="https://reactportfoliowebsite.sumonahemed.com/" target="_blank" className='btn btn-primary'>DEMO</a>
              </Card.Body>
            </Card>

          </Col>

          {/*{projectsArray.length*/}
          {/*  ? projectsArray.map((project, index) => (*/}
          {/*      <ProjectCard*/}
          {/*        key={`project-card-${index}`}*/}
          {/*        id={`project-card-${index}`}*/}
          {/*        value={project}*/}
          {/*      />*/}
          {/*    ))*/}
          {/*  : dummyProjectsArr.map((project, index) => (*/}
          {/*      <ProjectCard*/}
          {/*        key={`dummy-${index}`}*/}
          {/*        id={`dummy-${index}`}*/}
          {/*        value={project}*/}
          {/*      />*/}
          {/*    ))}*/}

        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
