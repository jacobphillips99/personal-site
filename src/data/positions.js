const positions = [
    {
        company: 'Themis AI',
        position: 'Cofounder and CTO',
        link: 'https://themisai.io',
        location: 'Boston, MA',
        daterange: 'September 2021 - May 2022',
        points: [
            'Co-founded a VC-backed startup delivering debiasing solutions for machine learning workflows, spanning data quality, model training, and model deployment.',
            'Led research and engineering to develop a platform and tools for existing machine learning pipelines.',
            'Developed packages for Pytorch and Tensorflow for data visualization, debiased model training, and evaluation of deployed models, compatible with both existing ML pipelines and cloud-compute infrastructure.',
            'Spun out research from MIT Distributed Robotics Lab and advised by Daniela Rus.'
        ]
    },
    {
        company: 'Scale',
        position: 'Intern',
        link: 'https://scale.com',
        location: 'Remote (San Francisoc, CA)',
        daterange: 'Summer 2021',
        points: [
            'Developed and deployed novel model architectures for copmlex scene-understanding labelling tasks.',
            'Achieved higher accuracy scores than human taskers, reducing cost and improving client-requested metrics.',
            'Engineered a full-stack solution combining AWS Lambda and EC2 with internal pipelines.',
        ]
    },
    {
        company: 'Skydio',
        position: 'Intern',
        link: 'https://www.skydio.com',
        location: 'Remote (Redwood City, CA)',
        daterange: 'Summer 2020',
        points: [
            'Developed novel long-range detection and tracking algorithms for remote flight safety protocols',
            'Prototyped a CNN-based system with novel loss functions capable of tracking aircraft at distances greater than 10km using existing drone hardware.',
            'Achieved higher accuracy and realiability than FAA standards, enabling the development of new products.',
            'Created dynamic synthetic datasets combined with real-world data to train and test the system.',
        ]
    },
    {
        company: 'Wayve',
        position: 'Intern',
        link: 'https://wayve.ai',
        location: 'Cambridge and London, UK',
        daterange: 'Summer 2019',
        points: [
            'Researched, implemented, and trained machine learning algorithms for conditional imitation learning and actor-critic reinforcement learning methods for end-to-end autonoous driving.',
            'Assisted in model testing and evaluation in the real world on an altered Jaguar I-Pace SUV.',
            'Additional testing in a proprietary simulation environment forked from the urban CARLA driving simulator.',
            'Developed code as part of a large-scale mono-repository under continuous integration pipelines.',
        ]
    },
]

export default positions;