import TinyMCE from "@/components/editor/TinyMCE";
import React from "react";
import dotenv from "dotenv";

dotenv.config();

const Home = () => {
  return (
    <div>
      <TinyMCE />
    </div>
  );
};

export default Home;
