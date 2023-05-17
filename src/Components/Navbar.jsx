import { Flex, Link } from "@chakra-ui/react";

import React from "react";

export const Navbar = () => {
    return (
        <Flex position={"fixed"} top={0} align="center" justify="space-around" w={"100%"} h={"100px"} bgColor={"black"} color={"white"}>

            <Link color='white' textDecoration="none" fontSize="30px" _hover={{ color: "white" }} href="/">
                Categories
            </Link>
            <Link color='white' textDecoration="none" fontSize="30px" _hover={{ color: "white" }} href="/search">
                Search
            </Link>
            <Link color='white' textDecoration="none" fontSize="30px" _hover={{ color: "white" }} href="/wishlist">
                Wishlist
            </Link>
        </Flex>
    );
};