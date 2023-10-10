import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import SpotifyLogo from "../../assets/spotify_image.png";
import SpotifySmall from "../../assets/project_images/spotify_small.png";
import HomeLand from "../../assets/project_images/Homeland.png";
import HomeLandSmall from "../../assets/project_images/homeland_small.png";
const Projects = () => {
  return (
    <div className="text-white h-full w-full md:w-[80%] mx-auto  md:pt-0 z-10  font-inter p-3">
      <h1 className="text-4xl text-start font-bold">Featured Projects</h1>
      <div>
        <Card className=" h-[500px] relative w-[100%] flex flex-col md:flex-row mx-auto bg-neutral-800 mt-[40px] text-white p-2">
          <div className="flex flex-col justify-between">
            <CardHeader className="text-2xl ml-2 font-bold flex gap-2 items-center">
              <img src={SpotifyLogo} className="w-[50px] " alt="spotify" />
              Spotify Clone
            </CardHeader>
            <CardBody className="md:w-[100%] text-lg text-start text-neutral-400">
              <p>
                A clone of Spotify with the intent to match the original
                application as close as possible in terms of design and
                functionality. This application is built using Firebase to allow
                for user authentication and provide the ability to create
                personalized playlists with their favorite artists and tracks!
              </p>
              <div className="flex h-[100%] justify-end font-bold flex-col mt-5 gap-2 ">
                <Link
                  isExternal={true}
                  href="https://spotify-clone-rho-pearl.vercel.app/"
                  color="success"
                >
                  <span>See Live Version</span>
                </Link>
                <Link
                  isExternal={true}
                  href="https://github.com/kieronthomas132/spotify_clone"
                  color="success"
                >
                  <span>See Code</span>
                </Link>
              </div>
            </CardBody>
          </div>
          <div className="mt-4 w-[500px] hidden lg:flex">
            <Image
              src={SpotifySmall}
              className="max-w-[500px] ml-4 hover:scale-[1.05]"
            />
          </div>
        </Card>
      </div>
      <div className="mt-5">
        <Card className="w-[100%] h-[500px] relative  flex flex-col md:flex-row mx-auto bg-neutral-800 mt-[80px] text-white p-2">
          <div className="flex flex-col justify-between">
            <CardHeader className="text-2xl ml-2 font-bold flex gap-2 items-center">
              <img src={HomeLand} className="w-[100px]" alt="spotify" />
              HomeLand Real Estate
            </CardHeader>
            <CardBody className="md:w-[100%] text-lg text-start text-neutral-400">
              <p>
                A real estate application utilising the use of Zoopla API from
                RapidAPI. This application allows users to search for rental
                properties and filter through via min and maximum rooms, price
                etc. This project also takes on Firebase to allow user auth and
                favorite properties to the users liking to create a personalised
                list of properties they have taken an interest in.
              </p>
              <div className="flex h-[100%] justify-end font-bold flex-col mt-5 gap-2 ">
                <Link
                  isExternal={true}
                  href="https://homeland-real-estate-mu.vercel.app/"
                  color="primary"
                >
                  <span>See Live Version</span>
                </Link>
                <Link
                  isExternal={true}
                  href="https://github.com/kieronthomas132/homeland"
                  color="primary"
                >
                  <span>See Code</span>
                </Link>
              </div>
            </CardBody>
          </div>
          <div className="mt-[50px] hover:mt-[40px] transition-all ease-in-out duration-200 w-[400px] hidden lg:flex">
            <Image
              src={HomeLandSmall}
              className="max-w-[500px] ml-[20px] rotate-12 hover:rotate-0"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
