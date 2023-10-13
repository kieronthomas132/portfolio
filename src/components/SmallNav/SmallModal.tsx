import {
  Modal,
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import { FaReact } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";

interface ModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}
const SmallModal = ({ isOpen, onOpenChange }: ModalProps) => {
  const actions = [
    {
      icon: <FaReact style={{ fontSize: 25 }} />,
      name: "Tech Stack",
      link: "/techstack",
    },
    {
      icon: <BsFillBarChartFill style={{ fontSize: 25 }} />,
      name: "Professional Development",
      link: "/development",
    },
    {
      icon: <SiAboutdotme style={{ fontSize: 25 }} />,
      name: "About",
      link: "/about",
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="bg-modal backdrop-blur-[10.3px] text-white shadow-modal"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              {actions.map((action) => (
                <ol>
                  <a href={action.link}>
                    <li className="flex items-center text-center justify-center p-4 gap-4 border-b-neutral-700 border-b">
                      <span>{action.icon}</span>
                      <h4>{action.name}</h4>
                    </li>
                  </a>
                </ol>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SmallModal;
