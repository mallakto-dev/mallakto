
export const useToast = () => {
const { $toast } = useNuxtApp();

const notifySuccess = (msg: string) => {
    $toast.success(msg);
  };
  
    return { notifySuccess };
  };