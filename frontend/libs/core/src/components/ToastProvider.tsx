import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
  return (
    <Toaster
      position={'bottom-center'} /*todo: isMobile ? 'bottom-center' : 'top-right'*/
      containerClassName={'mx-4 mb-20'} /*todo: isMobile ? 'mx-4 mb-20' : 'mt-24 mr-8'*/
      containerStyle={{ inset: 0, zIndex: 60 }}
    />
  );
}
