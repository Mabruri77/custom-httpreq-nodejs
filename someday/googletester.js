const axios = require("axios")

const googleTester = async () => {
  try {
    const response = await axios.post("https://developers.google.com/_d/profile/user?hl=id")
    console.log(response.data)
  } catch (error) {
    console.log("error")
  }
}

googleTester()
