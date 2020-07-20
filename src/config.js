const dev = { REACT_APP_BACKEND_API :  "https://theycallmekannan.info/backend/" }

const prod = { REACT_APP_BACKEND_API :  "https://theycallmekannan.info/backend/" }


const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

  export default {
      ...config
  }
