import { useToast as useToastChakra } from "@chakra-ui/react";

interface ToastProps {
  title: string;
  description?: string;
}

interface UseToastProps {
  toastSuccess: ({ title, description }: ToastProps) => void;
  toastError: ({ title, description }: ToastProps) => void;
}

export const useToast = (): UseToastProps => {
  const toast = useToastChakra();

  const toastSuccess = ({ title, description }: ToastProps) => {
    toast({
      title,
      description,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "bottom-right",
      containerStyle: {
        color: "#FFF",
        bg: "#00B050",
      },
    });
  };

  const toastError = ({ title, description }: ToastProps) => {
    toast({
      title,
      description,
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "bottom-right",
      containerStyle: {
        color: "#FFF",
        bg: "#E90000",
      },
    });
  };

  return {
    toastSuccess,
    toastError,
  };
};