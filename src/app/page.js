"use client";
import Navbar from "@/components/Navbar"
import Search from "@/components/Search"
import UserProfile from "@/components/UserProfile";
import { useState } from "react";
import { Button,Container, Text } from "@chakra-ui/react"

export default function Home() {
  const [userData,setUserData] =useState(null);
  const [loading,setLoading] = useState(false);
  console.log(userData);
  return (
   <Container maxW='container.lg'>
    <Navbar/>
    <Text fontSize={"2xl"} textAlign={"center"} my={4} fontWeight={"bold"} textTransform={"uppercase"}>
      Search user on Github
    </Text>
    <Search setUserData={(res)=>setUserData(res)} setLoading={setLoading}/>

  {userData && <UserProfile userData={userData} />}
   </Container>
  )
}
