import React from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ErrorAlertProps {
  className?: string;
  message: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ className = "", message }) => {
  return (
    <Alert
      variant="destructive"
      className={`w-[70%] mx-auto mt-6 ${className}`}
    >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default ErrorAlert;
