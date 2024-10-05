'use client'

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MemberShipForm from "@/components/MemberShipForm";
import RegistrationForMejban from "@/components/RegistrationForMejban";
import Services from "@/components/Services"


export default function Home() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <RegistrationForMejban></RegistrationForMejban>
      <Services></Services>
    </div>
  );
}
