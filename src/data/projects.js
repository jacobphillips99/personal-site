const projects = [
  {
    title: '"Unsupervised Latent Debiasing of Time-Series Models"',
    link: 'https://dspace.mit.edu/handle/1721.1/143324',
    organization: 'MIT Electrical Engineering and Computer Science',
    daterange: 'Jan 2021 - Jan 2022',
    points: [
      'Graduate thesis in fulfillment of MIT EECS Master of Engineering in Electrical Engineering and Computer Science with a Concentrartion in Artificial Intelligence.',
      'Conducted research into training unbiased time-series models via data sampling and transformation beyond inverse propensity scoring.',
      'Applied novel bias mitigation techniques to natural language processing, financial market forecasting, and weather prediction tasks.',
      'Implemented new algorithms on Transformer and LSTM model architectures.',
      'Improved model accuracy on under-represented portions of the dataset while maintaining accuracy on overrepresented subjects.',
    ],
  },
  {
    title: '"Learning Robust Policies for End-to-End Autonomous Driving from Data-Driven Simulation"',
    link: 'https://ieeexplore.ieee.org/document/8957584',
    organization: 'MIT Distributed Robotics Lab',
    daterange: 'May 2018 - Dec 2020',
    points: [
      'Joint presentation at the IEEE International Conference on Robotics and Automation (ICRA) and Robotics and Automation Letters (RA-L) with A. Amini, I. Gilitschenski, J. Moseyko, R. Banerjee, S. Karaman, and D. Rus',
      'Developed a data-driven simulator for autonomous driving via depth estimation, photogrammetry, and vehicle odometry to synthesize photorealistic novel scenes for autonomous vehicle training and testing.',
      'Utilized the simulator to train deep reinforcement learning agents, as well as perception, depth, variational auto-encoder, and modular control networks.',
      'Tested end-to-end autonomous driving agents trained entirely in simulation using reinforcement learning on real-world driving tracks and obstacles on a full-scale vehicle.',
    ],
  },
  {
    title: '"DiscrimRL: Utilizing Expert Examples in Reinforcement Learning"',
    link: null,
    organization: 'MIT Distributed Robotics Lab',
    daterange: 'Aug 2019 - May 2020',
    points: [
      'Conducted research into leveraging expert examples to bridge the gap between imitation learning and reinforcement learning.',
      'Implemented a GAN-based architecture where the discriminator network judges whether a set of observation-action pairs is an expert example or a sequence from the reinforcement learning policy rollout. The discriminator\'s prediction is then used as reward signal for the RL policy.',
      'The learned actor policy was twice as sample efficient as other RL benchmarks while retaining robustness learned via exploration in the simulator.',
      'Aptiv Undergraduate Research and Innovation Scholar',
    ],
  },
];

export default projects;
