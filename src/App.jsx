import React from "react";

// prettier-ignore
import { NavBar,Billing,CardDeal,Business,Clients,CTA,Stats,Footer,Testimonials,Hero} from "./Components/index";

const App = () => {
  return (
    <div className="px-6 w-full overflow-hidden  text-white ">
      {/* Nav bar */}
      <div className=" flex justify-center items-center  ">
        <div className="container mx-auto">
          <NavBar />
        </div>
      </div>

      {/* Hero section */}
      <div className="flex justify-center items-start">
        <div className="container mx-auto ">
          <Hero />
        </div>
      </div>

      {/* Hero section */}
      <div className="flex justify-center items-start ">
        <div className="container mx-auto">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
