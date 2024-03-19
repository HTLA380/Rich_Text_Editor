import TinyMCE from "@/components/editor/TinyMCE";
import React from "react";
import dotenv from "dotenv";

dotenv.config();

const Home = () => {
  return (
    <div>
      <TinyMCE apiKey={process.env.TINYMCE_API_KEY} />
    </div>
  );
};

export default Home;
