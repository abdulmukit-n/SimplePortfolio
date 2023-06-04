const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/abdulmukit-n',
  title: 'AM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Abdul Mukit Nagaria',
  role: 'Software Engineer',
  description:
    "Hi, I have recieved my Bachelor's of Computer Science specializing in Cybersecurity at the University of Wollongong in Dubai and  I hope to be a full-stack web developer that is able to build complex apps and/or part of the Security industry.",
  resume: 'https://abdulmukit-n.github.io/SimplePortfolio/Abdul_CV_github.pdf',
  social: {
    linkedin: 'www.linkedin.com/in/abdul-mukit-n',
    github: 'https://github.com/abdulmukit-n',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'DASDS',
    description:
      "Driver automobile and safety detection system [First place STEM competition] \n • TensorFlow to train models for driver license detection \n • Open CV for training and checking driver health status for warnings \n • Application creation using Android Studio (java/kotlin) and database creation using NodeJS with MongoDB \n • Hosting on raspberry PI for mobility demonstration that technology can fit into a vehicle",
    stack: ['Python', 'nodeJS', 'OpenCV','Tensorflow'],
    sourceCode: 'https://github.com/abdulmukit-n/DASDS',
    livePreview: 'https://github.com/abdulmukit-n/DASDS',
  },
  {
    name: 'Controlled Blue Team Experiment automation script',
    description:
      'performing numerous hacks on multiple controlled Wi-Fi setups using kali Linux. other software/’s (Wireshark and etc) to find the best attack for different Wi-Fi configurations. Creating an automated script based on our findings on top of existing automation scripts to match with growing security',
    stack: ['bash', 'python', 'linux','Wireshark'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Simple Portfolio Website',
    description:
      'Furthering my Front-end knowdledge from python Webframeworks to javascript ones , so i built this simple portfolio website using documentation and online template resources to understand the inner workings or react as well as using github pages to host sites',
    stack: ['HTML','CSS', 'nodeJS', 'React','Javascript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Python',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Java',
  'Kotlin',
  'AWS',
  'SQL and noSQL',
  'Splunk'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'abdulmukitn@protonmail.com',
}

export { header, about, projects, skills, contact }
