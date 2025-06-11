import UploadImageField from '@/components/common/UploadImageField';

const ClientProfileUploader = ({ onUpload }) => (
  <UploadImageField
    label="Foto de perfil del cliente"
    folder="ClientProfile"
    onUpload={onUpload}
  />
);

export default ClientProfileUploader;