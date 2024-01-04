import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGit, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { faLink, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import CNN from './assests/images/cnn.png';
import aboutMeIcon from './assests/images/aboutme.png';
import aboutMeIcon1 from './assests/images/aboutme1.png';
import aboutMeIcon2 from './assests/images/ABOUTME2.png';
import educationIcon from './assests/images/education1.png';
import ruggles from './assests/images/ruggles15.png'
import CBIR from './assests/images/CBIR.png';
import about from './assests/images/back4.png'
import imu from './assests/images/imu.png';
import reckoning from './assests/images/reckoning.png';
import workIcon from './assests/images/education.png';
import YouTube from 'react-youtube';
import spacex from './assests/images/spacexr.gif';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([]);
  
  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);

    const allSkillsArray = Object.values(allSkills).flat();

    const filtered = allSkillsArray.filter((skill) =>
      skill.toLowerCase().includes(inputValue)
    );

    setFilteredSkills(filtered);
  };

  const allSkills = {
    languages: ['Python', 'C++', 'C', 'C#', 'MATLAB', 'CSS', 'JavaScript', 'SQL', 'HTML5'],
    tools: [
      'PyTorch',
      'TensorFlow',
      'OpenAI Gym',
      'Deep Learning',
      'Jax',
      'PyGame',
      'CUDA',
      'Gazebo',
      'Docker',
      'Azure',
      'Google Cloud Platform',
      'Git',
      'Jira',
    ],
    softwares: ['ROS', 'Unity3D', 'CATIA', 'ANSYS', 'SolidWorks', 'Arduino IDE', 'Linux', 'Blender'],
  };

  const sections = [
    { title: 'Languages', key: 'languages' },
    { title: 'Tools', key: 'tools' },
    { title: 'Softwares', key: 'softwares' },
  ];

  const renderSkills = (sectionKey) => {
    return searchInput.trim() === ''
      ? allSkills[sectionKey].map((skill, index) => (
          <div className="skill" key={index}>
            {skill}
          </div>
        ))
      : filteredSkills.map((skill, index) => {
          const isInCurrentSection = allSkills[sectionKey].includes(skill);
          if (isInCurrentSection) {
            return (
              <div className="skill" key={index}>
                {skill}
              </div>
            );
          }
          return null;
        });
  };

  const [workExperiences, setWorkExperiences] = useState([
    {
      companyName: 'Hitachi America Ltd/ Hitachi Astemo Ltd',
      title: 'Human-Robot Interaction and Deep Learning Intern',
      location: 'Farmington Hills, Michigan, USA',
      duration: 'September 2022 - January 2023',
      duties: ['Spearheaded development of an autonomous guidance system for Universal Robots Arm, integrating image processing and object detection for efficient 3D mapping and navigation, resulting in a 95% reduction in collisions', 'Implemented a motion tracking pipeline at JR Automation, leading to a 20% increase in operational efficiency through advanced workflow analysis and activity monitoring', 'Successfully deployed a robust activity monitoring system, achieving a 40% increase in accuracy by integrating pose estimation models and leveraging deep learning frameworks like Mediapipe'],
    },
    {
      companyName: 'Harem Pvt Ltd.',
      title: 'Software Developer',
      location: 'New Delhi, India',
      duration: 'June 2020 - June 2021',
      duties: ['Initiated a startup by developing a React-based online platform, revitalizing operations with strategic initiatives during the pandemic.', 'Developed and deployed a sales-enhancing web application, contributing to a 25% boost in sales'],
    },
    {
      companyName: 'SSGMCE',
      title: 'Web Developer',
      location: 'Maharashtra, India',
      duration: 'July 2022 - December 2022',
      duties: ['Created websites for technical festivals and various clubs, introducing a paywall and leveraging ASP.NET and AWS for optimal performance and security'],
    },
    
  ]);

  const addWorkExperience = () => {
    const newExperience = {
      companyName: 'XYZ Corporation',
      title: 'asdsad',
      location: 'Another City, Another Country',
      duration: 'Feb 2023 - Present',
      duties: ['Lead development of new product', 'Coordinate cross-functional teams'],
    };

    setWorkExperiences((prevExperiences) => [...prevExperiences, newExperience]);
  };

  const renderWorkHistory = () => {
    return (
      <div className={`work-popup ${showWorkPopup ? 'visible' : ''}`}>
        <div className="work-popup-title">Work Experience</div>
        <div>
          {workExperiences.map((experience, index) => (
            <div className="work-input-row work-history" key={index}>
              <div className="workplace-name">{experience.companyName}</div>
              <div className="workplace-title">{experience.title}</div>
              <div className="workplace-location">{experience.location}</div>
              <div className="duration">{experience.duration}</div>
              <div className="duties-list">
                <ul>
                  {experience.duties.map((duty, dutyIndex) => (
                    <li className="duties-list-item" key={dutyIndex}>
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  const imageContainerStyle = {
    // Your specific styles for the image container go here
    // For example:
    border: '2px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '50%',
    height: '50%',
    objectFit: 'cover', // This property ensures that the image covers the entire container
  };



  const [showHelloMessage, setShowHelloMessage] = useState(true);
  const [helloMessages, setHelloMessages] = useState([
    { message: '* Hello!', delay: 500 },
    { message: '* Bonjour!', delay: 400 },
    { message: '* Hola!', delay: 400 },
    { message: '* स्वागत!', delay: 500 }, // "Swagat" in Hindi
    // Add more messages as needed
  ]);
 
  const [isMarqueeUp, setIsMarqueeUp] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showEducationPopup, setShowEducationPopup] = useState(false);
  const [showaboutmePopup, setShowaboutmePopup] = useState(false);
  const [showWorkPopup, setShowWorkPopup] = useState(false);



  

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentMessageIndex < helloMessages.length - 1) {
        setCurrentMessageIndex((prevIndex) => prevIndex + 1);
      } else {
        setShowHelloMessage(false);
      }
    }, helloMessages[currentMessageIndex].delay);

    return () => clearTimeout(timeout);
  }, [currentMessageIndex, helloMessages]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${showHelloMessage ? 'show-hello-message' : 'hide-hello-message'}`}>
      <div className="hello-message-container">
        <h1>{helloMessages[currentMessageIndex].message}</h1>
        <p>Welcome to My Website</p>
        
      </div>

      {showHelloMessage && (
        <div className="transparent-toolbar-placeholder"></div>
      )}

      {!showHelloMessage && (
        <div>
            <div className={`transparent-toolbar ${scrolled ? 'scrolled' : ''}`}>
              <h1 className="logo">UG</h1>
              <div className="navigation">
                <a href="#projects">Projects</a>
                <a href="#about">About Me</a>
                {/* <a href="#contact">Contact</a> */}
              </div>
            </div>
          
          <div className="about-me-icon-container">
            <img
              className="about-me-icon"
              src={aboutMeIcon2}
              alt="About Me"
              onClick={() => setShowaboutmePopup(true)}
            />
            {/* Pop-up window content */}
            <div className={`about-me-popup ${showaboutmePopup ? 'visible' : ''}`}>
              <div className="search-bar">
                  <input
                  type="text"
                  placeholder="Search skills"
                  value={searchInput}
                  onChange={(e) => handleSearchInputChange(e)}
                  
                />
              </div>

              <div className="divider">
                <div className="icon">
                  <div className="icon-circle">
                    <img src={aboutMeIcon1} alt="Icon" />
                  </div>
                  <p>UTKARSH GHIME</p>
                  <p>I am a seasoned robotics engineer with expertise in AI, SLAM, computer vision, and deep learning, dedicated to pushing the boundaries of technology to create intelligent and innovative solutions that shape the future of robotics.</p>
                </div>

                <div className="remaining-space">
                    {sections.map((section) => (
                    <div className="section" key={section.key}>
                      <h3>{section.title}</h3>
                      {renderSkills(section.key)}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
          <div className="education-icon-container">
            <img
              className="education-icon"
              src={educationIcon}
              alt="Education"
              onClick={() => setShowEducationPopup(true)}
            />
            {/* Education Pop-up window content */}
            <div className={`education-popup ${showEducationPopup ? 'visible' : ''}`}>
            <div class="education-input-row">
              <div class="education-details">
                <div class="title">Master of Science in Mechatronics, Robotics, and Automation</div>
                  <div class="institution">Northeastern University</div>
                    <div class="location">Boston, MA</div>
                      <div class="coursework-container">
                        <div class="coursework">Reinforcement Learning</div>
                        <div class="coursework">Computer Vision and Pattern Recognition</div>
                        <div class="coursework">Robot Sensing and Navigation</div>
                        <div class="coursework">MicroElectroMechanical Systems</div>
                        <div class="coursework">Robot Mechanics and Control</div>
                        <div class="coursework">Control Systems Engineering</div>
                        <div class="coursework">Advanced Mathematics for Engineering</div>
                        <div class="coursework">Digital Signal Processing</div>
                      </div>
                    </div>
                </div>
                <div class="education-input-row">
              <div class="education-details">
                <div class="title">Bachelor of Engineering in Mechanical Engineering</div>
                  <div class="institution">SSGMCE, Amravati University</div>
                    <div class="location">Maharashtra, India</div>
                      <div class="coursework-container">
                        <div class="coursework">Automobile Engineering</div>
                        <div class="coursework">Computer Aided Design</div>
                        <div class="coursework">DBMS</div>
                        <div class="coursework">Mechatronics Engineering</div>
                        <div class="coursework">Thermodynamics</div>
                        <div class="coursework">Strength of Materials</div>
                        <div class="coursework">Fluid Power</div>
                        <div class="coursework">Theory of Machines</div>
                        <div class="coursework">Control Systems Engineering</div>
                        <div class="coursework">Advanced Mathematics-1/2/3</div>
                        <div class="coursework">etcetra</div>
                      </div>
                    </div>
                </div>
              {/* Add more rows as needed */}
            </div>
          </div>
          <div className="work-icon-container">
            <img
              className="work-icon"
              src={workIcon}
              alt="Work Experience"
              onClick={() => setShowWorkPopup(true)}
            />
            {/* Work Pop-up window content */}
            <div className={`work-popup ${showWorkPopup ? 'visible' : ''}`}>
      {renderWorkHistory()}
    </div>
          </div>
          
          {/* <div className={`App ${isMarqueeUp ? 'move-up' : 'initial-position'}`}>
            <div className="marquee-name">Utkarsh Ghime</div>
          </div> */}

          <header className="App-header">
            {/* ... (existing code) */}
          </header>

          {/*Add a placeholder div to push down the content */}
          <div style={{ height: '100vh' }}></div>
          



          <div id="projects" className="project-section">
            
            <div className="project-box">
            <div class="video-container">
              <YouTube videoId="-HEcd3c-iq8" />
            </div>
            <div class="text-container">
              <p class="project-name">Project: Autonomous Guidance System using Deep Learning</p>
          
              <ul class = "project-description">
                <li>Developed and deployed a cutting-edge autonomous guidance system for Universal Robots, enhancing human-robot collaboration, enabling 3D mapping, obstacle avoidance, and safe task execution.</li>
                <li>Utilized a YOLO v5 pipeline with a custom object scanner and labeler, showcasing proficiency in Python multithreading and multiprocessing for efficient parallel processing.</li>
                <li>Integrated ROS for seamless robotic communication, applied SLAM techniques for real-time mapping, and implemented a Realsense pipeline with stereo cameras and LiDARs for efficient 3D mapping.</li>
                <li>Demonstrated expertise in deploying machine learning models, including pose estimation, while employing RRT* for path planning and integrating a torque sensor at the UR arm's tip for enhanced safety.</li>
                <li>- Demonstrated expertise in computer vision algorithms, sensor fusion, Git version control, and algorithm optimization, contributing to an efficient robotic system.</li>
              </ul>


          </div>
        </div>
            <div className="project-box">
            <div className="video-container">
              <YouTube videoId="gBQtDvzhvT8" />
            </div>
            <div class="text-container">
              
              <p class="project-name">LEGO-LOAM Integration with Dynamic Sensor Fusion for Machine Vision and Perception</p>
            <ul class="project-description">
              <li>Successfully integrated LEGO-LOAM, a cutting-edge SLAM (Simultaneous Localization and Mapping) algorithm.</li>
              <li>Achieved robust 3D mapping capabilities for autonomous navigation in robotic systems.</li>
              <li>Implemented sophisticated techniques within the Robot Operating System (ROS).</li>
              <li>Utilized advanced computer vision methodologies, including image processing, object detection, and feature extraction.</li>
              <li>Enhanced perception and recognition capabilities for improved autonomous navigation.</li>
              <li>Applied machine learning techniques to augment decision-making processes in the context of robotic systems.</li>
            </ul>
          </div>
        </div>

        <div className="project-box">
            <div className="video-container">
              <YouTube videoId="jbq_fD94-2Y"/>
            </div>
            <div class="text-container">
              
            <p class="project-name">"Modular Deep Q-Learning Framework for Reinforcement Learning in OpenAI Gym Environments"</p>
            <ul class="project-description">
            <li><strong>DQN Training Framework:</strong> Implemented a reinforcement learning script employing a Deep Q-Network (DQN) algorithm for training agents in the OpenAI Gym environment.</li>
            <li><strong>Custom DQN Model:</strong> Engineered a bespoke DQN model, adhering to the specifications of the problem, and employed a replay memory mechanism to enhance the model's ability to learn from past experiences.</li>
            <li><strong>Flexible Training Parameters:</strong> Engineered the script to accommodate dynamic training parameters, including replay size, batch size, exploration strategy (epsilon-greedy), and the discount factor (gamma) to facilitate fine-tuning and experimentation.</li>
            <li><strong>Checkpointing Mechanism:</strong> Integrated a checkpointing mechanism that saves model states at predefined intervals, enabling the retrieval of intermediate and final models for detailed analysis, debugging, or seamless continuation of training.</li>
            <li><strong>Performance Monitoring:</strong> Implemented tracking mechanisms for episode returns, lengths, and losses, providing detailed insights into the learning dynamics and convergence behavior of the DQN algorithm over the training period.</li>
            <li><strong>Modularity and Reusability:</strong> Designed the script with modularity in mind, offering a versatile and reusable codebase that can be readily applied to different environments, facilitating experimentation and sharing of models at various stages of the training process.</li>
            </ul>
          </div>
        </div>

        <div className="project-box">
      <div className="image-container" style={imageContainerStyle}>
        <img src={spacex} alt="Project Image" style={imageStyle} />
      </div>
          <div className="text-container">
            <a href="https://github.com/ghime-u/EECE5554/tree/main/LAB4/src" className="project-name">
              <p>Space X falcon 9 Landing Simulation using Reinforcement Learning<FontAwesomeIcon icon={faLink} /></p>
            </a>

            <ul className="project-description">
            <li>The paper explores the use of Reinforcement Learning (RL) for the autonomous and precise landing of SpaceX Falcon 9 rockets on designated target zones.</li>
<li>Three RL algorithms (DDPG, SAC, and PPO) were employed to train an agent within a physics-based simulation framework called RocketLander, which models the dynamics of rocket landing.</li>
<li>The state space of the environment includes crucial variables like rocket position, orientation, leg ground contact indicators, engine gimbal angle, and velocities, while the action space consists of gimbal, throttle, and control thruster adjustments.</li>
<li>The reward system incorporates a base reward, shaping rewards based on distance, speed, angle, ground contact, and reward shaping difference. A landing reward is given for successful landings, with additional penalties for incomplete episodes.</li>
<li>The physics simulation integrates principles of mechanics using the Box2D physics engine to emulate gravitational forces, aerodynamic effects, and collision mechanics, providing a realistic landing environment.</li>
<li>Comparative analysis of the RL algorithms showed that SAC outperformed DDPG and PPO in terms of stability, success rate, and training speed. The study emphasizes the importance of experimentation and fine-tuning in RL applications for rocket landing.</li>
            </ul>
          </div>
        </div>

        

      
        <div className="project-box">
  <div className="image-container">
    <img src={imu} alt="Project Image" />
  </div>
  <div className="text-container">
    <a href="https://github.com/ghime-u/EECE5554/tree/main/LAB4/src" className="project-name">
      <p>IMU, GPS, Magnetometer Navigation <FontAwesomeIcon icon={faLink} /></p>
    </a>

    <ul className="project-description">
      <li><strong>Data Collection:</strong> The project commenced with the collection of sensor data using the self-driving NUANCE car.</li>

      <li><strong>Magnetometer Distortions:</strong> Calibration addresses hard iron and soft iron distortions caused by nearby objects. Compensation methods mitigate these distortions.</li>

      <li><strong>Calibration Process:</strong> Involves correcting hard iron through offsets for x, y, and z data and soft iron by calculating scale factors based on average values. Result: calibrated magnetic field measurements.</li>

      <li><strong>Complementary Filter:</strong> Combines low-pass filtered magnetometer data and high-pass filtered gyro data using a weighted sum. Cutoff frequencies and filter coefficients determined using Butterworth filter design.</li>

      <li><strong>Yaw Data:</strong> Robust yaw estimation by combining magnetometer-based and gyro-based estimates. Tilt compensation enhances accuracy in magnetometer-based estimates.</li>

      <li><strong>Forward Velocity Estimate:</strong> Utilizes a low-pass filter to remove noise, followed by fitting a third-order polynomial to eliminate long-term drift or bias. Incorporates accelerometer-based and GPS-based velocity estimates for improved accuracy.</li>
    </ul>
  </div>
</div>
<div className="project-box">
            <div className="video-container">
              <YouTube videoId="g-sIYQ6HBTE" />
            </div>
            <div class="text-container">
              
              <p class="project-name">Stereo Camera-Based Path Planning: RRT and CNN for Obstacle Avoidance</p>
            <ul class="project-description">
            <li>The project aims to enhance robot navigation in scenarios like search and rescue by utilizing stereo cameras for depth estimation and computer vision algorithms.</li>
            <li>Depth information is obtained through triangulation, with obstacle course setup and calibration of the stereo camera system.</li>
            <li>Rapidly Exploring Random Trees (RRT) algorithm is implemented for optimal path planning, addressing challenges in obstacle avoidance through incremental exploration of state space.</li>
            <li>The integration of Convolutional Neural Networks (CNNs) enhances obstacle detection and classification, particularly for recognizing road signs, providing additional constraints for path planning.</li>
            <li>The average Root Mean Square (RMS) error across instances, representing the disparity between LiDAR-measured distances and those obtained through the proposed method, is approximately 15.048 cm, demonstrating the accuracy of the depth detection algorithm in the experimental results.</li>

            </ul>
          </div>
        </div>

        <div className="project-box">
            <div className="image-container">
              <img src= {CBIR} alt="Project Image"/>
            </div>
            <div class="text-container">
              <a href ="https://github.com/ghime-u/CBIR_5" class="project-name"> <p>Content-Based Image Retrieval and Object Detection <FontAwesomeIcon icon={faLink} /></p></a>
            <ul class="project-description">
            <li>Implemented a template detect function using OpenCV for baseline image matching, with the sum of squared differences serving as an effective distance metric.</li>
            <li>Introduced histogram matching based on 3-channel RGB histograms to compare images using color values, ranking images through a normalized min value difference.</li>
            <li>Enhanced the template detect function by incorporating 3-D histograms for RGB and HSV values in multi-histogram matching, computing a weighted average for improved image matching.</li>
            <li>Applied texture and color histogram analysis to entire images, utilizing RGB and Gradient Magnitude histograms, and computed weighted averages for efficient pattern recognition.</li>
            <li>Developed an object detection function based on the HSV color space, successfully extending detection capabilities to identify specific objects, such as bananas, showcasing the project's versatility and specificity.</li>
            </ul>
          </div>
        </div>

        <div className="project-box">
            <div className="image-container">
              <img src= {CNN} alt="Project Image"/>
            </div>
            <div class="text-container">
            <a href ="https://github.com/ghime-u/CNN" class="project-name"> <p>CNN/DeepVision <FontAwesomeIcon icon={faLink} /></p></a>
   
            <ul class="project-description">
            <li>Explore image classification using Convolutional Neural Networks (CNN) on digit and Greek symbol datasets.</li>
            <li>Utilize TorchVision for dataset management and PyTorch frameworks for deep learning model development.</li>
            <li>Analyze CNN architecture, visualize filters, and create digit embedding spaces for enhanced understanding.</li>
            <li>Experiment with parameters, including epochs and batch sizes, to optimize the model's performance.</li>
            <li>Engage with the Stack Overflow community for insights on custom dataset creation and deep learning concepts.</li>


            </ul>
          </div>
        </div>

        

        <div className="project-box">
            <div className="image-container">
              <img src= {ruggles} alt="Project Image"/>
            </div>
            <div class="text-container">
            <a href ="https://github.com/ghime-u/CBIR_" class="project-name"> <p>Visual Perception Enhancement for Robotic Navigation Systems <FontAwesomeIcon icon={faLink} /></p></a>
   
            <ul class="project-description">
            <li><strong>Camera Calibration:</strong> The project focuses on calibrating cameras to correct distortions and errors in images, crucial for applications like object recognition and augmented reality.</li>
            <li><strong>Undistortion:</strong> Addressing lens-induced distortion, the project employs intrinsic camera parameters to model and correct distortions, improving measurement accuracy in computer vision.</li>
            <li><strong>Panorama Creation:</strong> Six images were undistorted and stitched, providing an impressive panoramic view despite minor alignment issues.</li>
            <li><strong>Overlapping in Mosaic:</strong> Different overlap percentages (50% and 15%) were explored for capturing a mural, demonstrating their impact on image stitching quality.</li>
            <li><strong>Cinder Wall Panorama:</strong> Seven images of a Cinder wall were stitched into a high-quality panorama using the Harris corner detection algorithm, emphasizing the importance of feature points.</li>

            </ul>
          </div>
        </div>

        

          <div className="project-box">
          <div className="image-container">
              <img src= {reckoning} alt="Project Image"/>
            </div>
            <div className="text-container">
            <a href ="https://github.com/ghime-u/EECE5554/tree/main/LAB4/src" class="project-name"> <p>Dead Reckoning with IMU<FontAwesomeIcon icon={faLink} /></p></a>
            
             
              <ul className="project-description">
                <li><strong>Estimating Acceleration in Y direction:</strong> Discusses potential factors contributing to differences between estimated and observed acceleration, including sensor noise, bias, and integration errors.</li>

                <li><strong>Estimating Xc:</strong> Formula-based estimation of the x-coordinate of the center of mass using measured acceleration, angular velocity, and displacement parameters.</li>

                <li><strong>Estimate Trajectory:</strong> Simulation of vehicle trajectory by initializing position and orientation variables, calculating changes based on velocity, yaw rate, and elapsed time in a loop.</li>

                <li><strong>Dead Reckoning Challenges:</strong> Explains why dead reckoning estimates may diverge from actual positions over time due to cumulative errors and external factors. Includes specifications for the VectorNav VN-100 IMU.</li>

                <li><strong>Navigation Limitations:</strong> Discusses the expected duration of navigation without a position fix based on the VectorNav VN-100 IMU's heading and velocity errors.</li>
              </ul>
            </div>
          </div>

        

            
        </div>
        
       
        </div>
        
      )}
      <div id = "about" class="about-section">
        <p>I'm Utkarsh, a robotics enthusiast studying at Northeastern University. I am located in Boston, Massachussetts. My focus lies in Autonomous Driving, Artificial Intelligence, Computer Vision, and Deep Learning. Let's explore the future of technology together.</p>
        <div class="social-icons">

        <a href="https://www.linkedin.com/in/utkarshghime/" class="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.instagram.com/urranium_/" class="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://github.com/ghime-u" class="social-icon"><FontAwesomeIcon icon={faGit} /></a>
        <a href="https://www.facebook.com/sumpondereplay/" class="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
        <div class="about-content">
          <img src= {about} alt="Description"/>
          <h5>@utkarshghime 2023</h5>
        </div>
      </div>
    </div>
  );
}

export default App;


