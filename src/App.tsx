import React, { useEffect } from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  Button,
  IconButton,
  useDisclosure,
  Text,
  Stack,
  DrawerFooter,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import FeedbackForm from "./components/feedbackForm";
import {backendService} from "./recoil/atom"
import { useRecoilState } from "recoil";
import { BackendService } from "./services"

const App: React.FC<{ clientId: string }> = ({ clientId }) => {
  const [backend, setBackend] = useRecoilState(backendService);
  const { onClose, onOpen, isOpen } = useDisclosure();

  useEffect(() => {
    setBackend(new BackendService(clientId));
  }, [clientId, setBackend]);

  return (
    <>
      <div
        style={{
          right: "-4px",
          padding: "4px",
          position: "fixed",
          bottom: "10%",
          borderRadius: "6px",
        }}
      >
        <Button
          colorScheme="blue"
          onClick={onOpen}
          sx={{
            transform: "rotate(270deg) translateY(38px)",
          }}
        >
          Feedback
        </Button>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" onClick={onClose}>
              <Stack direction="row" justifyContent="space-between">
                <IconButton
                  aria-label="close-drawer"
                  size="sm"
                  icon={<CloseIcon />}
                />
              </Stack>
            </DrawerHeader>
            <DrawerBody>
              <FeedbackForm clientId={clientId} />
            </DrawerBody>
            <DrawerFooter>
              <Text fontSize="xs" colorScheme="gray">
                Powered by Rezpond ⚡
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default App;
