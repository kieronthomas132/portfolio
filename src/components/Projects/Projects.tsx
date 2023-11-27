import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import SpotifyLogo from "../../assets/generic/spotify_image.png";
import SpotifySmall from "../../assets/project_images/spotify_small.png";
import HomeLand from "../../assets/project_images/Homeland.png";
import HomeLandSmall from "../../assets/project_images/homeland_small.png";
const Projects = () => {
  return (
    <div className="z-10 mx-auto h-full w-full p-3 text-white font-inter md:w-[80%] md:pt-0">
      <h1 className="text-start text-4xl font-bold">Featured Projects</h1>
      <div>
        <Card className="relative mx-auto flex flex-col bg-neutral-800 p-2 text-white h-[500px] w-[100%] mt-[40px] md:flex-row">
          <div className="flex flex-col justify-between">
            <CardHeader className="ml-2 flex items-center gap-2 text-2xl font-bold">
              <img src={SpotifyLogo} className="w-[50px]" alt="spotify" />
              Spotify Clone
            </CardHeader>
            <CardBody className="text-start text-lg text-neutral-400 md:w-[100%]">
              <p>
                As an avid music fan, I decided my most ambitious and biggest
                project would be to create this Spotify Clone. Built with
                Node.js, Express, MongoDB, React, and TypeScript, it's a
                full-stack clone aiming to replicate Spotify's vibe. Using the
                Spotify API via RapidAPI, this application has got all the music
                stuff—artists, albums, playlists, and tracks. I've poured my
                heart into perfecting the user experience, diving into modern
                tech and APIs.
              </p>
              <div className="mt-5 flex flex-col justify-end gap-2 font-bold h-[100%]">
                <Link
                  isExternal={true}
                  href="https://github.com/kieronthomas132/spotify_fullstack"
                  color="success"
                >
                  <span>See Live Version</span>
                </Link>
                <Link
                  isExternal={true}
                  href="https://spotify-fullstack-alpha.vercel.app/home"
                  color="success"
                >
                  <span>See Code</span>
                </Link>
              </div>
            </CardBody>
          </div>
          <div className="mt-4 hidden w-[500px] lg:flex">
            <Image
              src={SpotifySmall}
              className="ml-4 max-w-[500px] hover:scale-[1.05]"
            />
          </div>
        </Card>
      </div>
      <div className="mt-5">
        <Card className="relative mx-auto flex flex-col bg-neutral-800 p-2 text-white w-[100%] h-[500px] mt-[80px] md:flex-row">
          <div className="flex flex-col justify-between">
            <CardHeader className="ml-2 flex items-center gap-2 text-2xl font-bold">
              <img src={HomeLand} className="w-[100px]" alt="spotify" />
              HomeLand Real Estate
            </CardHeader>
            <CardBody className="text-start text-lg text-neutral-400 md:w-[100%]">
              <p>
                A real estate application utilising the use of Zoopla API from
                RapidAPI. This application allows users to search for rental
                properties and filter through via min and maximum rooms, price
                etc. This project also takes on Firebase to allow user auth and
                favorite properties to the users liking to create a personalised
                list of properties they have taken an interest in.
              </p>
              <div className="mt-5 flex flex-col justify-end gap-2 font-bold h-[100%]">
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
          <div className="hidden transition-all duration-200 ease-in-out mt-[50px] w-[400px] hover:mt-[40px] lg:flex">
            <Image
              src={HomeLandSmall}
              className="rotate-12 max-w-[500px] ml-[20px] hover:rotate-0"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
