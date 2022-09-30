import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ReactPlayer from 'react-player'
const Video = () => {
  return (
    <>
          <Text marginTop="30px" color="rgb(3,169,244)" fontSize={{ base: "26px", md: "40px", lg: "46px" }} >Watch demo (12:35)</Text>
            <Box paddingTop="20px" display="flex" justifyContent="center" width="90%" margin="auto" className="container">

        <ReactPlayer controls width="980px" height="490px"  url="https://www.youtube.com/watch?v=NMZhFs_b0Aw"/>
        </Box>
    </>
  )
}

export default Video