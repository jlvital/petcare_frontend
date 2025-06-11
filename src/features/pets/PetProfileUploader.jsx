import UploadImageField from '@/components/common/UploadImageField';

const PetProfileUploader = ({ onUpload }) => (
  <UploadImageField
    label="Foto de perfil de la mascota"
    folder="PetProfile"
    onUpload={onUpload}
  />
);

export default PetProfileUploader;