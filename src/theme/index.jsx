import {extendTheme} from "@chakra-ui/react"

import bg from "../sources/bg.jpg"

export default extendTheme({
  styles: {
    global: {
      body: {
        bg: `url(${bg})`,
        bgSize: "cover",
        bgRepeat: "no-repeat",
        fontSize: "16px",
      },
    },
  },
})
